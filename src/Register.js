import firebase from 'firebase';
import React, { Component } from 'react';
import AuthenticationCancel from './AuthenticationCancel';

class Register extends Component {
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
      <form onSubmit={e => this.handleSubmit(e)}>
        <p className="small-print">Trainer name should match Pokémon GO.</p>
        <input name="name" type="text" placeholder="Trainer name" required pattern="[a-zA-Z0-9]{4,15}"
          autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"
          onChange={e => this.handleNameChange(e)} />
        <p className="small-print">Email adress and password do <u>not</u> have to match Pokémon GO!</p>
        <input name="email" type="email" placeholder="Email address" required
          onChange={e => this.handleEmailChange(e)} />
        <input name="password" type="password" placeholder="Password" required
          onChange={e => this.handlePasswordChange(e)} />
        <button type="submit">Go!</button>
        <AuthenticationCancel />
        {this.state.error && <p className="small-print error">{this.state.error.message}</p>}
      </form>
    );
  }
}

export default Register;
