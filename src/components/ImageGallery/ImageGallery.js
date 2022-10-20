import PropTypes from 'prop-types';




export const Gallery = () => {
<ul>
    {images.length > 0 &&
          images.map(({ id,  largeImageURL }) => (
      <li key={id}>
        <img src alt={tags} />        
      </li>
    ))}
  </ul>
  
  
}
