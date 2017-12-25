import React, { Component } from "react";

export default function (WrappedComponent, otherProps) {
  return class extends Component {
    render() {
      return <WrappedComponent {...this.props} {...otherProps} />
    }
  }
}
