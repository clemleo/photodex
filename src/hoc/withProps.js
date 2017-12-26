import React, { Component } from 'react';

export default function withProps(WrappedComponent, otherProps) {
  return class extends Component {
    render() {
      return <WrappedComponent {...this.props} {...otherProps} />
    }
  }
}
