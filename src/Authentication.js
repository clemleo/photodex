import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AuthenticationLinks from './AuthenticationLinks';
import SignIn from './SignIn';
import Register from './Register';

class Authentication extends Component {
  componentWillMount() {
    if (this.props.user) {
      this.props.history.replace('/');
    }
  }

  render() {
    return (
      <div className="Authentication">
        <AuthenticationLinks />
        <Route path="/auth/sign-in" component={SignIn} />
        <Route path="/auth/register" component={Register} />
      </div>
    );
  }
}

export default Authentication;
