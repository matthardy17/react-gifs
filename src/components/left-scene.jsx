import React, { Component } from 'react';

class LeftScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleChange = () => {
    this.setState({ changed: !this.state.changed });
  }

  render() {
    return (
      <div>
        <div className="left-scene" onChange={this.handleChange} />
      </div>
    )
  }
}

export default LeftScene;
