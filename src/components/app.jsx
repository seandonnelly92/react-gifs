import React, { Component } from 'react';
import Search from './search';
import Giflist from './giflist';
import Maingif from './maingif';
import giphy from 'giphy-api';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        gifs: [],
        selectedGifId: "v1.Y2lkPTc5MGI3NjExODhidjNmcGU4MHd6MnliNzk0amZvNW12dDFwNG50NndodGZvczl4biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/g9582DNuQppxC"
      }
      // simulate the search
      this.selectGif = this.selectGif.bind(this);
    }

  search = (query) => {
    // TODO: API call
    giphy('4ibEHqGFwKWNq9rBT0DtYmIS9wvb069x').search({
      q: query,
      rating: 'g',
      limit: 20,
    }, (error, result) => {
      this.setState({
        gifs: result.data
      })
    })
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <Search searchFunction={this.search} />
          <div className="selected-gif">
            <Maingif id= {this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <Giflist gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    )
  }
}

export default App;
