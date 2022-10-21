import PropTypes from 'prop-types';

import { ImageGalleryList } from './ImageGallery.styled';
import { ImageGalleryItems } from 'components/ImageGalleryItem/ImageGalleryItem'; 

export const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryList>
      {images.length > 0 &&
        images.map(({ id, largeImageURL }) => (
          
            <ImageGalleryItems
              key={id}
              largeImageURL={largeImageURL}
            />
          
        ))}
    </ImageGalleryList>
  );
};


ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  )
  
}