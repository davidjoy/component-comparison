import React, { Component } from 'react';

export default class Counter extends Component {
  // Bonus!  Why does this work?  Does this happen... after the constructor?  Can we check in the source?
  state = {
    count: this.props.count
  }

  constructor(props) {
    super(props);

    // Bonus!  Do I need this line?  Why?  How can I get rid of this line?
    this.handleIncrementClick = this.handleIncrementClick.bind(this);
  }

  handleIncrementClick(event) {
    this.setState((previousState) => {
      return {
        count: previousState.count + 1,
      }
    });
  }

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button type="button" onClick={this.handleIncrementClick}>Increment</button>
      </>
    )
  }
}
