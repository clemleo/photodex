import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Authentication.css';
import AuthenticationLinks from './AuthenticationLinks';
import SignIn from './SignIn';
import Register from './Register';
import ResetPassword from './ResetPassword';

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
        <Route path="/auth/reset-password" component={ResetPassword} />
      </div>
    );
  }
}

export default Authentication;
