import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './Authentication.css';
import AuthenticationLinks from './AuthenticationLinks';
import SignIn from './SignIn';
import Register from './Register';
import ResetPassword from './ResetPassword';

export default function Authentication(props) {
  if (props.user) {
    return (
      <Redirect to="/" />
    );
  }
  return (
    <div className="Authentication">
      <AuthenticationLinks />
      <Route path="/auth/sign-in" component={SignIn} />
      <Route path="/auth/register" component={Register} />
      <Route path="/auth/reset-password" component={ResetPassword} />
    </div>
  );
}
