import React from 'react';

class Dongguk extends React.Component {
  constructor() {
    super();
    this.state = {name: "seung hyun"};
  }
  render() {
    return <h1>Hi {this.state.name}</h1>;
  }
}

export default Dongguk;