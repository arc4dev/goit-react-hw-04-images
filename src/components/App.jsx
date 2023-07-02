import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './SearchBar/SearchBar';
import { getImagesAPI } from 'services/getImagesAPI';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isMore: false,
    isLoading: false,
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ isLoading: true });

    const query = e.target.elements.query.value;

    try {
      const images = await getImagesAPI(query, 1);

      if (images.length <= 0) this.setState({ isMore: false });
      else this.setState({ isMore: true });

      this.setState({ images });

      console.log(images, this.state);
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleClick = async e => {
    const { query, page } = this.state;

    const newImages = await getImagesAPI(query, page + 1);

    this.setState(state => ({
      images: [...state.images, ...newImages],
      page: state.page + 1,
    }));
  };

  render() {
    const { query, images, isLoading, isMore } = this.state;

    if (isLoading) {
      return (
        <div>
          <Loader />
        </div>
      );
    }

    return (
      <div className="App">
        <SearchBar
          query={query}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <ImageGallery images={images} isLoading={isLoading} />

        {isMore ? (
          <Button handleClick={this.handleClick} text="Load more..." />
        ) : null}
      </div>
    );
  }
}

export default App;
