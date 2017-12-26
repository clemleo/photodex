import firebase from 'firebase';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import IconButton from '../shared/IconButton';
import IconLink from '../shared/IconLink';

export default class Header extends Component {
  handleSignOut() {
    if (window.confirm('Sign out of Photódex?')) {
      firebase.auth().signOut();
    };
  }

  render() {
    let user = this.props.user;
    return (
      <header className="Header">
        <div className="Header-left">
          {user && <IconLink icon="images" aria-label="Sign out" to={`/${user.name}`} />}
        </div>
        <div className="Header-center">
          <h1 className="Header-title"><Link to="/">Photódex</Link></h1>
          <h2 className="Header-subtitle">Gotta snap 'em all!</h2>
        </div>
        <div className="Header-right">
          {user && <IconButton icon="sign-out-alt" aria-label="Sign out"
            onClick={() => this.handleSignOut()} />}
        </div>
      </header>
    );
  }
}
