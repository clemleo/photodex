import firebase from 'firebase';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Authentication from './auth/Authentication';
import Header from './layout/Header';
import Home from './home/Home';
import Photodex from './photodex/Photodex';
import withProps from '../hoc/withProps'

export default class App extends Component {
  constructor() {
    super();
    this.state = { loaded: false };
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        let db = firebase.firestore();
        db.collection('users').doc(user.uid).get().then(doc => {
          Object.assign(user, doc.data());
          this.setState({ loaded: true, user: user });
        });
      } else {
        this.setState({ loaded: true, user: null });
      }
    });
  }

  withUser(component) {
    return withProps(component, { user: this.state.user });
  }

  render() {
    if (this.state.user === undefined) {
      return null;
    }
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <Switch>
              <Route exact path="/" component={this.withUser(Header)} />
              <Route exact path="/auth/:action" component={this.withUser(Header)} />
              <Route exact path="/:trainer/:numberOrMode?" component={this.withUser(Header)} />
            </Switch>
          </div>
          {this.state.loaded && <div className="App-content">
            <Switch>
              <Route exact path="/" component={this.withUser(Home)} />
              <Route exact path="/auth/:action" component={this.withUser(Authentication)} />
              <Route exact path="/:trainer/:numberOrMode?" component={this.withUser(Photodex)} />
            </Switch>
          </div>}
        </div>
      </Router>
    );
  }
}
