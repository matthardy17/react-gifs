import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif-list';


// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: 'jn21b1FXsZg011z88p'
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
        <div className="title">React Gif Finder</div>
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
