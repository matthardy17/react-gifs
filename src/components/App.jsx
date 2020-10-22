import React, { Component } from 'react';
import giphy from 'giphy-api';
import ReactTypingEffect from 'react-typing-effect';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif-list';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null
    };
  }

  search = (query) => {
    giphy('Y2atpmiqV43lvMIf35f92kzVe05qsD4T').search({
      q: query,
      limit: 10,
      rating: 'pg'
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="title">
          Gif Finder 
          <br />
          <ReactTypingEffect text="Made in React" speed="100" />
        </div>
        <div className="scenes">
          <div className="left-scene">
            <SearchBar search={this.search} />
            <div className="selected-gif">
              <Gif id={this.state.selectedGifId} />
            </div>
          </div>
          <div className="right-scene">
            <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
