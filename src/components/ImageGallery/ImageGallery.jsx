import ImageGalleryItem from './ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <>
      <ul className="ImageGallery">
        {images.length > 0
          ? images.map(img => <ImageGalleryItem key={img.id} item={img} />)
          : null}
      </ul>
    </>
  );
};
