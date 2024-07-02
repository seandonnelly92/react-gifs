import React, { Component } from 'react';
import Maingif from './maingif';

class Giflist extends Component {
  render() {
    return(
    // the array of gifs we defined
      <div className="gif-list">
        {this.props.gifs.map(gif => {
          return <Maingif id={gif.id} key={gif.id} selectGif={this.props.selectGif} />
        })}
      </div>
  )
  }
}

export default Giflist
