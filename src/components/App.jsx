import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const key = '38201775-25af2f6387845f79e6ba89182';
const { Component } = require('react');

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  fetchItems = async () => {
    try {
      const response = await axios.get(
        `/?q=${this.state.query.slice(
          this.state.query.indexOf('/') + 1
        )}&page=${
          this.state.page
        }&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  deleteQuiz = async quizId => {
    const response = await axios.delete(`/quizzes/${quizId}`);
    return response.data;
  };

  createQuiz = async quiz => {
    const response = await axios.post('/quizzes', quiz);
    return response.data;
  };

  onSubmit = evt => {
    evt.preventDefault();
    this.changeQuery(evt.target.elements.query.value);
    evt.target.reset();
  };
  changeQuery = newQuery => {
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.fetchItems().then(responce => {
        this.setState({ images: responce.hits });
      });
      console.log(
        `HTTP запрос за ${this.state.query.slice(
          this.state.query.indexOf('/') + 1
        )}, и page=${this.state.page}`
      );
      // Не забываем отрезать req-id/ от query
      // this.setState({ images: результат запроса })
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <div>
        <Searchbar submit={this.onSubmit}></Searchbar>
        <ImageGallery cards={this.state.images}></ImageGallery>
        <Loader></Loader>
        <Button></Button>
      </div>
    );
  }
}
