import ImageGalleryItem from './ImageGalleryItem';
import styles from './ImageGallery.module.css';

export const ImageGallery = ({ images }) => {
  return (
    <>
      <ul className={styles.imageGallery}>
        {images.length > 0
          ? images.map(img => <ImageGalleryItem key={img.id} item={img} />)
          : null}
      </ul>
    </>
  );
};
