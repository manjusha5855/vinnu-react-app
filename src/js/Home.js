import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Welcome!!',
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <p>Sample home page!!!</p>
      </div>
    );
  }
}

export default Home;
