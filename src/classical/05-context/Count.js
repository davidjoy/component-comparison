import React, { Component } from "react";
import CounterContext from "./CounterContext";

export default class Count extends Component {
  render() {
    return (
      // Bonus!  Is there another way consume the Context value in class-based components?
      <CounterContext.Consumer>
        {({ count }) => count}
      </CounterContext.Consumer>
    );
  }
}
