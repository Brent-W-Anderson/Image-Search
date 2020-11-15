import React from 'react';
import Axios from 'axios';

import Searchbar from './searchbar/searchbar'
import ImageList from './image-list/image-list'

import 'semantic-ui-css/semantic.min.css';
import '../styles/app.css'

export default class App extends React.Component {
  state = {
    images: []
  }

  onSearchSubmit = async term => {
    const response = await Axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: process.env.REACT_APP_UNSPLASH_KEY
      }
    });

    this.setState({
      images: response.data.results
    });
  }

  render() {
    return (
      <div className="App">
        <div className="ui container">
          <Searchbar onSearchSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images} />
        </div>
      </div>
    );
  }
}
