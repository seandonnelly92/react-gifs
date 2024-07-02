import React, { Component } from 'react';

class Search extends Component {
  handleUpdate = (event) => {
    const query = event.target.value;
    console.log(query);
    this.props.searchFunction(query);
  }

  render() {
    return(
      <input type="text" className="form-search form-control"
      onChange={this.handleUpdate}
      />
    )
  }
};

export default Search;
