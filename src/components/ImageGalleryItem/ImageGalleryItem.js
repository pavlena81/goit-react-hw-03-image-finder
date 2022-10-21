import PropTypes from 'prop-types';
import { ImageGalleryItem, ImageGalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItems = ({ webformatURL, tags }) => {
  return (
    <ImageGalleryItem>
    
      <ImageGalleryItemImage src={webformatURL}
                              alt={tags} />
      
    </ImageGalleryItem>
  ); 
  
};





ImageGalleryItems.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
}