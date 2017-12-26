import firebase from 'firebase';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import IconButton from '../shared/IconButton';

export default class Header extends Component {
  handleSignOut() {
    if (window.confirm('Sign out of Photódex?')) {
      firebase.auth().signOut();
    };
  }

  render() {
    return (
      <header className="Header">
        <div className="Header-left" />
        <div className="Header-center">
          <h1 className="Header-title"><Link to="/">Photódex</Link></h1>
          <h2 className="Header-subtitle">Gotta snap 'em all!</h2>
        </div>
        <div className="Header-right">
          {this.props.user && <IconButton onClick={() => this.handleSignOut()}
            icon="sign-out-alt" aria-label="Sign out" />}
        </div>
      </header>
    );
  }
}
