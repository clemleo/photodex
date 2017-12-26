import React, { Component } from 'react';

export default class extends Component {
  render() {
    let {name, type, placeholder, ...otherProps} = this.props;
    return (
      <input name={name || 'email'} type="email" placeholder="Email address" {...otherProps} />
    )
  }
}
