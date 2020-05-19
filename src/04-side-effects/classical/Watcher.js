import React, { Component } from 'react';

export default class Watcher extends Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight,
  }

  handleResize = (event) => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <div>
        {`${this.state.width}w x ${this.state.height}h`}
      </div>
    )
  }
}
