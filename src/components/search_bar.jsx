import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class SearchBar extends Component {
  handleChange = (event) => {
    this.props.search(event.target.value);
  }

  render() {
    return (
      <input className="form-control form-search" onChange={this.handleChange} placeholder="Enter search term" />
    );
  }
}

export default SearchBar;
