import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { AppGallary } from './App.styled';
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const key = '38201775-25af2f6387845f79e6ba89182';
const { Component } = require('react');

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
  };

  fetchItems = async () => {
    try {
      this.setState({ loading: true });
      const response = await axios.get(
        `/?q=${this.state.query.slice(
          this.state.query.indexOf('/') + 1
        )}&page=${
          this.state.page
        }&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
      );
      this.setState({ loading: false });
      return response.data;
    } catch (error) {
      console.error(error);
    }
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
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <AppGallary>
        <Searchbar submit={this.onSubmit}></Searchbar>
        <ImageGallery cards={this.state.images}></ImageGallery>
        <Loader visible={this.state.loading}></Loader>
        {this.state.images.length !== 0 && (
          <Button moreCards={this.handleLoadMore}></Button>
        )}
      </AppGallary>
    );
  }
}
