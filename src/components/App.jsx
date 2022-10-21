import { Component } from "react";
// import axios from "axios";

import {getImages} from 'service/service';
import { ToastContainer } from 'react-toastify';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from "./ImageGallery/ImageGallery.styled";




export class App extends Component {

  state = {
    page: 1,
    query: '',
    images: [],
    isLoading: false,
  };

  handleSubmit = searchInput => {
    
    this.setState({
      searchInput
    });
    // e.target.reset();
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      isLoading: true,
    }));
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (
      prevState.page !== page ||
      prevState.query !== query
    ) {
      console.log('query');
      this.getPhotos(query, page);
    }
  }

  getPhotos = async (query, page) => {    
    if (!query) {
      return;
    }
    try {
      const data = await getImages(query, page);
      

      this.setState(state => ({
        images: [ state.images, ...data.hits],
      }));

    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

    render() {
    // const { images } = this.state;
    return (
      <div>
        
        <Searchbar onSubmit={this.handleSubmit } />
        <ImageGallery images = {this.state.images}/>
        {/* {images.length > 0 ? <ImagesList images={images} /> : null } */}
        <ToastContainer autoClose={3000} />
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
