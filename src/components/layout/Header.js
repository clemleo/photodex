import alertify from 'alertify.js';
import firebase from 'firebase';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import DefaultSubheader from "./DefaultSubheader";
import PhotodexSubheader from "./PhotodexSubheader";
import IconButton from '../shared/IconButton';
import IconLink from '../shared/IconLink';

export default class Header extends Component {
  handleSignOut() {
    alertify.confirm('Sign out of your Photódex account?', () => firebase.auth().signOut());
  }

  render() {
    let user = this.props.user;
    let trainerName = this.props.match.params.trainer;
    let canEdit = user && (user.name === trainerName);
    let editMode = this.props.match.params.numberOrMode === 'edit';
    return (
      <header className="Header">
        <div className="Header-left">
          {user && <IconLink icon="picture-o" to={`/${user.name}`}
             title="My Photódex" aria-label="My Photódex" />}
          {canEdit && (editMode ?
            <IconLink icon="eye" to={`/${user.name}`}
              title="View" aria-label="View" /> :
            <IconLink icon="pencil" to={`/${user.name}/edit`}
              title="Edit" aria-label="Edit" />
          )}
        </div>
        <div className="Header-center">
          <h1 className="Header-title"><Link to="/">Photódex</Link></h1>
            {trainerName ? <PhotodexSubheader trainerName={trainerName} /> : <DefaultSubheader />}
        </div>
        <div className="Header-right">
          {user !== undefined && (user !== null ?
            <IconButton icon="sign-out" onClick={() => this.handleSignOut()}
              title="Sign out" aria-label="Sign out" /> :
            <IconLink icon="sign-in" to="/auth/sign-in"
              title="Sign in" aria-label="Sign in" />)}
        </div>
      </header>
    );
  }
}
