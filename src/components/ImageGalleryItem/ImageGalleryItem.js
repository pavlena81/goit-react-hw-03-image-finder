import PropTypes from 'prop-types';
import { ImageGalleryItem, ImageGalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGaleryItem = ({ webformatURL, tags }) => (
  
  <ImageGalleryItem key={id}>
    
        <ImageGalleryItemImage src={webformatURL} alt={tags} />        
      
  </ImageGalleryItem>
   
  
);





ImageGaleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
}