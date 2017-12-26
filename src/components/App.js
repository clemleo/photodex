import firebase from 'firebase';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Authentication from './auth/Authentication';
import Header from './layout/Header';
import Home from './home/Home';
import withProps from '../hoc/withProps'

export default class App extends Component {
  constructor() {
    super();
    this.state = { loaded: false };
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        let db = firebase.firestore();
        db.collection('users').doc(user.uid).get().then(doc => {
          this.setState({ loaded: true, user: doc.data() });
        });
      } else {
        this.setState({ loaded: true, user: undefined });
      }
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <Header user={this.state.user} />
          </div>
          {this.state.loaded && <div className="App-content">
            <Route exact path="/" component={withProps(Home, { user: this.state.user })} />
            <Route path="/auth/:action" component={withProps(Authentication, { user: this.state.user })} />
          </div>}
        </div>
      </Router>
    );
  }
}
