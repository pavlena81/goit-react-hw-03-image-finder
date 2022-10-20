import PropTypes from 'prop-types';

import { ImageGallery } from './ImageGallery.styled';
import { ImageGalleryItemImage } from 'components/ImageGalleryItem/ImageGalleryItem'; 

export const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.length > 0 &&
        images.map(({ id, largeImageURL }) => (
          <ImageGallery >
            <ImageGalleryItemImage
              key={id}
              largeImageURL={largeImageURL}
            />
          </ImageGallery>
        ))}
    </ul>
  );
};


ImageGallery.propTypes = {
  
  id: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
}