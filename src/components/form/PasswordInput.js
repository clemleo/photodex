import React, { Component } from 'react';

export default class extends Component {
  render() {
    let {name, type, placeholder, ...otherProps} = this.props;
    return (
      <input name={name || 'password'} type="password" placeholder="Password" {...otherProps} />
    );
  }
}
