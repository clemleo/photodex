import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AuthenticationCancel extends Component {
  render() {
    return (
      <Link className="subtle-link" to="/">Cancel</Link>
    );
  }
}

export default AuthenticationCancel;
