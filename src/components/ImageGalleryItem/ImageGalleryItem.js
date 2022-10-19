export const ImagesList = ({ images }) => (
  <ul>
    {images.length > 0 &&
          images.map(({ id, webformatURL, largeImageURL }) => (
      <li key={id}>
        <img src={webformatURL} alt={tags} />        
      </li>
    ))}
  </ul>
);
