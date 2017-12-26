import React, { Component } from 'react';
import AuthenticationLinks from './AuthenticationLinks';

export default class extends Component {
  render() {
    let email = this.props.user && this.props.user.email;
    return (
      <div>
        {!this.props.user && <AuthenticationLinks />}
        Hello {email || 'anonymous'}!
      </div>
    );
  }
}
