import Modal from 'components/Modal/Modal';

import styles from './ImageGalleryItem.module.css';
import { useState } from 'react';

function ImageGalleryItem({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(val => !val);
  };

  return (
    <li id={item.id} className={styles.imageGalleryItem}>
      <img
        className={styles.imageGalleryItem_image}
        src={item.webformatURL}
        alt={item.tags}
        onClick={handleClick}
      />
      {isModalOpen && (
        <Modal
          largeImage={item.largeImageURL}
          alt={item.tags}
          handleClick={handleClick}
        />
      )}
    </li>
  );
}

export default ImageGalleryItem;
