import firebase from 'firebase';
import React, { Component } from 'react';
import AuthenticationCancel from './AuthenticationCancel';
import EmailInput from '../form/EmailInput';
import Form from '../form/Form';
import PasswordInput from '../form/PasswordInput';
import SmallPrint from '../form/SmallPrint';
import SubmitButton from '../form/SubmitButton';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value, error: undefined });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value, error: undefined });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value, error: undefined });
  }

  handleSubmit(e) {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => this.setState({ error }));
    e.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={e => this.handleSubmit(e)} error={this.state.error}>
        <SmallPrint>Trainer name should match Pokémon GO.</SmallPrint>
        <input name="name" type="text" placeholder="Trainer name" required pattern="[a-zA-Z0-9]{4,15}"
          autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"
          onChange={e => this.handleNameChange(e)} />
        <SmallPrint>Email adress and password do <u>not</u> have to match Pokémon GO!</SmallPrint>
        <EmailInput placeholder="Email address" required onChange={e => this.handleEmailChange(e)} />
        <PasswordInput required onChange={e => this.handlePasswordChange(e)} />
        <SubmitButton />
        <AuthenticationCancel />
      </Form>
    );
  }
}
