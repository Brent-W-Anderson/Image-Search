import React from 'react';
import Axios from 'axios';

import Searchbar from './searchbar/searchbar'
import ImageList from './image-list/image-list'

import 'semantic-ui-css/semantic.min.css';
import '../styles/app.css'

export default class App extends React.Component {
  state = {
    images: [],
    imagesReference: []
  }

  onSearchSubmit = async term => { // called by child component: <Searchbar /> on submit/enter
    const response = await Axios.get('https://api.unsplash.com/search/photos?per_page=15?', {
      params: { query: term },
      headers: {
        Authorization: process.env.REACT_APP_UNSPLASH_KEY
      }
    });

    this.setState({
      images: response.data.results,
      imagesReference: response.data.results
    });
  }

  render() {
    return (
      <div className="App">
        <div className="ui container">
          <Searchbar onSearchSubmit={this.onSearchSubmit} />
          <ImageList app={this} images={this.state.images} />
        </div>
      </div>
    );
  }
}
