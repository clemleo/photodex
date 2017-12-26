import firebase from 'firebase';
import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './Header.css';
import DefaultSubheader from "./DefaultSubheader";
import PhotodexSubheader from "./PhotodexSubheader";
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
          {user && <IconLink icon="images" aria-label="My Photódex" to={`/${user.name}`} />}
        </div>
        <div className="Header-center">
          <h1 className="Header-title"><Link to="/">Photódex</Link></h1>
          <Switch>
            <Route exact path="/:trainer" component={PhotodexSubheader} />
            <Route path="/" component={DefaultSubheader} />
          </Switch>
        </div>
        <div className="Header-right">
          {user !== undefined && (user !== null ?
            <IconButton icon="sign-out-alt" aria-label="Sign out"
              onClick={() => this.handleSignOut()} /> :
            <IconLink icon="sign-in-alt" aria-label="Sign in" to="/auth/sign-in" />)}
        </div>
      </header>
    );
  }
}
