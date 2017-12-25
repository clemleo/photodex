import firebase from 'firebase';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import AuthenticationCancel from './AuthenticationCancel';

class SignIn extends Component {
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
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => this.setState({ error }));
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input name="email" type="email" placeholder="Email address" required
          onChange={e => this.handleEmailChange(e)} value={this.state.email} />
        <input name="password" type="password" placeholder="Password" required
          onChange={e => this.handlePasswordChange(e)} value={this.state.password} />
        <button type="submit">Go!</button>
        <AuthenticationCancel />
        <div style={{ marginBottom: '10px' }}>
          <Link className="subtle-link" style={{ textDecoration: 'none', fontSize: '0.8rem' }}
            to="/auth/reset-password">Forgotten your password?</Link>
        </div>
        {this.state.error && <p className="small-print error">{this.state.error.message}</p>}
      </form>
    );
  }
}

export default SignIn;
