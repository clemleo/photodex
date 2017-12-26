import React, { Component } from 'react';

export default class extends Component {
  render() {
    let smallPrintStyle = { fontSize: '0.8rem', margin: '0' };
    let { style, ...otherProps } = this.props;
    Object.assign(smallPrintStyle, style);
    return <p style={smallPrintStyle} {...otherProps} />
  }
}
