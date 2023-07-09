import Modal from 'components/Modal/Modal';
import { Component } from 'react';
import styles from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  handleClick = () => {
    this.setState(state => ({
      isModalOpen: !state.isModalOpen,
    }));
  };

  render() {
    const { item } = this.props;
    const { isModalOpen } = this.state;

    return (
      <li id={item.id} className={styles.imageGalleryItem}>
        <img
          className={styles.imageGalleryItem_image}
          src={item.webformatURL}
          alt={item.tags}
          onClick={this.handleClick}
        />
        {isModalOpen && (
          <Modal
            largeImage={item.largeImageURL}
            alt={item.tags}
            handleClick={this.handleClick}
          />
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;
