import { Component } from "react";
import axios from "axios";

import {getImages} from 'service/service';
import { ToastContainer } from 'react-toastify';

import { Searchbar } from './Searchbar/Searchbar';




export class App extends Component {

  state = {
    page: 1,
    query: '',
    images: [],
    isLoading: false,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      page: 1,
      query: e.target.elements.query.value,
      images: [],
    });
    e.target.reset();
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      isLoading: true,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      console.log('didUpdate');
      this.getPhotos(query, page);
    }
  }

  getPhotos = async (query, page) => {
    if (!query) {
      return;
    }
    try {
      const response = await getImages(query, page);
      const images = response.hits;

      this.setState(({ images }) => ({
        images: [...images],
      }));

    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  // async componentDidMount() {
  //   this.setState({ isLoading: true });
  //   const response = await getImages(query, page);
  //   this.setState({
  //     images: response.data.hits,
  //     isLoading: false,
  //   });
  // }

  render() {
    // const { images } = this.state;
    return (
      <div>
        
        <Searchbar onSubmit={this.handleSubmit} />
        
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
