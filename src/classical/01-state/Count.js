import React, { Component } from 'react';

export default class Count extends Component {
  constructor(props) {
    super(props);

    // Bonus!  Is there another way to set up this initial state?
    this.state = {
      count: props.count,
    }
  }

  render() {
    return (
      <div>{this.state.count}</div>
    )
  }
}
