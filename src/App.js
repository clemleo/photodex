import firebase from "firebase";
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Authentication from "./Authentication";
import Header from './Header';
import Home from './Home';
import withProps from './withProps'

class App extends Component {
  constructor() {
    super();
    this.state = { loaded: false };
    firebase.auth().onAuthStateChanged(user => {
      let loaded = true;
      this.setState({ loaded, user });
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

export default App;
