import firebase from 'firebase';
import React, { Component } from 'react';
import AuthenticationCancel from './AuthenticationCancel';
import EmailInput from '../form/EmailInput';
import Form from '../form/Form';
import PasswordInput from '../form/PasswordInput';
import SmallPrint from '../form/SmallPrint';
import SubmitButton from '../form/SubmitButton';

export default class extends Component {
  constructor(props) {
    super();
    this.state = {
      email: ''
    };
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value, error: undefined });
  }

  handleSubmit(e) {
    firebase.auth().sendPasswordResetEmail(this.state.email)
      .then(() => {
        alert('A password reset email has been sent.')
        this.props.history.push('/auth/sign-in');
      })
      .catch(error => this.setState({ error }));
    e.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={e => this.handleSubmit(e)} error={this.state.error}>
        <SmallPrint>An email will be sent with password reset instructions.</SmallPrint>
        <EmailInput required onChange={e => this.handleEmailChange(e)} value={this.state.email} />
        <SubmitButton>Reset</SubmitButton>
        <AuthenticationCancel />
      </Form>
    );
  }
}
