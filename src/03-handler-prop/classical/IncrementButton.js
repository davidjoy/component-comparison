import React, { PureComponent } from "react";

// Bonus!  What is PureComponent?  Why do we use it here?
export default class IncrementButton extends PureComponent {
  render() {
    console.log('rendering classical increment button');
    return (
      <button type="button" onClick={this.props.clickHandler}>Increment</button>
    )
  }
}
