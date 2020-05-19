import React, { Component } from 'react';
import IncrementButton from './IncrementButton';
import CounterContext from './CounterContext';
import Count from './Count';

export default class Counter extends Component {
  state = {
    count: this.props.count,
  }

  handleIncrementClick = (event) => {
    this.setState((previousState) => {
      return {
        count: previousState.count + 1,
      }
    });
  }

  render() {
    return (
      <CounterContext.Provider value={{ count: this.state.count }}>
        <Count />
        <IncrementButton clickHandler={this.handleIncrementClick} />
      </CounterContext.Provider>
    )
  }
}
