import { ImageGallery } from '../ImageGallery/ImageGallery';
import { SearchBar } from '../SearchBar/SearchBar';
import { getImagesAPI } from 'services/getImagesAPI';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';

import styles from './App.module.css';
import { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isMore, setIsMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    setIsLoading(true);

    const query = e.target.elements.query.value;

    try {
      const newImages = await getImagesAPI(query, 1);

      if (newImages.length <= 0) setIsMore(false);
      else setIsMore(true);

      setImages(newImages);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = e => {
    setQuery(e.target.value.trim());
  };

  const handleClick = async e => {
    const newImages = await getImagesAPI(query, page + 1);

    setImages(prevImages => [...prevImages, ...newImages]);
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className={styles.app}>
      <SearchBar
        query={query}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      {isLoading ? <Loader /> : <ImageGallery images={images} />}

      {isMore && <Button handleClick={handleClick} text="Load more..." />}
    </div>
  );
}

export default App;
