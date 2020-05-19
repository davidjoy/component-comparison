import React, { Component } from 'react';
import IncrementButton from './IncrementButton';

export default class Counter extends Component {
  state = {
    count: this.props.count,
  }

  handleIncrementClick = (event) => {
    this.setState((previousState) => {
      // Bonus!  If we had other state... Did I just erased it when I returned this?
      return {
        count: previousState.count + 1,
      }
    });
  }

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <IncrementButton clickHandler={this.handleIncrementClick} />
      </>
    )
  }
}
