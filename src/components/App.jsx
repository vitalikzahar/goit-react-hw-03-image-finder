import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { AppGallary } from './App.styled';
import { getResponse } from './fetch';
const { Component } = require('react');

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    showBtn: '',
  };

  fetchItems = async () => {
    try {
      this.setState({ loading: true });
      const queryItems = this.state.query;
      const page = this.state.page;
      return getResponse(queryItems, page);
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ loading: false });
    }
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
        this.setState(prevState => ({
          images: [...prevState.images, ...responce.hits],
          showBtn: responce.totalHits,
        }));
      });
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <AppGallary>
        <Searchbar changeQuery={this.changeQuery}></Searchbar>
        <ImageGallery cards={this.state.images}></ImageGallery>
        <Loader visible={this.state.loading}></Loader>
        {this.state.page < Math.ceil(this.state.showBtn / 12) && (
          <Button moreCards={this.handleLoadMore}></Button>
        )}
      </AppGallary>
    );
  }
}
