import firebase from 'firebase';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthenticationCancel from './AuthenticationCancel';
import EmailInput from '../form/EmailInput';
import Form from '../form/Form';
import PasswordInput from '../form/PasswordInput';
import SubmitButton from '../form/SubmitButton';

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value, error: undefined });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value, error: undefined });
  }

  handleSubmit(e) {
    this.setState({ loading: true });
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => this.setState({ error: error, loading: false }));
    e.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={e => this.handleSubmit(e)} error={this.state.error}>
        <EmailInput required onChange={e => this.handleEmailChange(e)} value={this.state.email} />
        <PasswordInput required onChange={e => this.handlePasswordChange(e)} value={this.state.password} />
        <SubmitButton loading={this.state.loading} />
        <AuthenticationCancel />
        <div style={{ marginBottom: '10px' }}>
          <Link className="subtle-link" style={{ textDecoration: 'none', fontSize: '0.8rem' }}
            to="/auth/reset-password">Forgotten your password?</Link>
        </div>
      </Form>
    );
  }
}
