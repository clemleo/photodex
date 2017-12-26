import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class extends Component {
  render() {
    return (
      <Link className="subtle-link" to="/">Cancel</Link>
    );
  }
}
