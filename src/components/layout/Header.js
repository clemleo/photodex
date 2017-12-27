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
    let editMode = this.props.match.params.edit === 'edit';
    return (
      <header className="Header">
        <div className="Header-left">
          {user && <IconLink icon="picture-o" aria-label="My Photódex" to={`/${user.name}`} />}
          {canEdit && (editMode ?
            <IconLink icon="eye" aria-label="View" to={`/${user.name}`} /> :
            <IconLink icon="upload" aria-label="Upload" to={`/${user.name}/edit`} />
          )}
        </div>
        <div className="Header-center">
          <h1 className="Header-title"><Link to="/">Photódex</Link></h1>
            {trainerName ? <PhotodexSubheader trainerName={trainerName} /> : <DefaultSubheader />}
        </div>
        <div className="Header-right">
          {user !== undefined && (user !== null ?
            <IconButton icon="sign-out" aria-label="Sign out"
              onClick={() => this.handleSignOut()} /> :
            <IconLink icon="sign-in" aria-label="Sign in" to="/auth/sign-in" />)}
        </div>
      </header>
    );
  }
}
