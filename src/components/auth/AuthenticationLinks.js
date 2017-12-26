import React from 'react';
import { NavLink } from 'react-router-dom';
import './AuthenticationLinks.css';

export default function AuthenticationLinks() {
  return (
    <div className="AuthenticationLinks">
      <NavLink className="subtle-link" to="/auth/sign-in">Sign in</NavLink>
      <small>or</small>
      <NavLink className="subtle-link" to="/auth/register">Register</NavLink>
    </div>
  );
}
