import React from 'react';

class Dongguk extends React.Component {
  constructor() {
    super();
    this.state = {name: "jung woo"};
  }
  render() {
    return <h1>Hi {this.state.name}</h1>;
  }
}

export default Dongguk;