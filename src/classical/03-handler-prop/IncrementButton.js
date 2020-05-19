import React, { Component } from "react";

// Bonus!  What is PureComponent?  Could I use it here?
export default class IncrementButton extends Component {
  render() {
    return (
      <button type="button" onClick={this.props.clickHandler}>Increment</button>
    )
  }
}
