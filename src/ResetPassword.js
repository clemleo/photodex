import firebase from 'firebase';
import React, { Component } from 'react';
import AuthenticationCancel from './AuthenticationCancel';

export default class ResetPassword extends Component {
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
      <form onSubmit={e => this.handleSubmit(e)}>
        <input name="email" type="email" placeholder="Email address" required
          onChange={e => this.handleEmailChange(e)} value={this.state.email} />
        <button type="submit">Reset</button>
        <AuthenticationCancel />
        {this.state.error && <p className="small-print error">{this.state.error.message}</p>}
      </form>
    );
  }
}
