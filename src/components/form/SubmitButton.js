import React, { Component } from 'react';
import './SubmitButton.css';

export default class extends Component {
  render() {
    return (
      <button className="SubmitButton" type="submit">
        {this.props.children || 'Go!'}
      </button>
    );
  }
}
