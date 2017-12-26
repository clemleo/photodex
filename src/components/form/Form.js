import React, { Component } from 'react';
import './Form.css';
import SmallPrint from './SmallPrint';

export default class extends Component {
  render() {
    let { children, error, ...otherProps } = this.props;
    return (
      <form className="Form" {...otherProps}>
        {children}
        {error && <SmallPrint style={{ color: '#ff0000', fontWeight: 'bold' }}>
          {error.message}
        </SmallPrint>}
      </form>
    );
  }
}
