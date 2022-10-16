import { Component } from "react";
// import axios from "axios";

import { Searchbar } from './Searchbar/Searchbar';

// const API_KEY = '29581970-ca9e55c9ea9a40620816915df';

// const ImagesList = ({ images }) => (
//   <ul>
//     {images.length > 0 &&
//           images.map(({ id, webformatURL, largeImageURL }) => (
//       <li key={id}>
//         <img src={largeImageURL} alt={alt} />        
//       </li>
//     ))}
//   </ul>
// );

export class App extends Component {

  state = {
    page: 1,
    query: '',
    images: [],
    isLoading: false,
  };

  // async componentDidMount() {
  //   this.setState({ isLoading: true });
  //   const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`);
  //   this.setState({
  //     images: response.data.hits,
  //     isLoading: false,
  //   });
  // }

  render() {
    // const { images } = this.state;
    return (
      <div>
        
      <Searchbar />
         {/* {images.length > 0 ? <ImagesList images={images} /> : null } */}
      </div>
    );
  }
}










// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
