import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class extends Component {
  render() {
    return (
      <header className="Header">
        <h1 className="Header-title"><Link to="/">Photódex</Link></h1>
        <h2 className="Header-subtitle">{this.props.subtitle || "Gotta snap 'em all!"}</h2>
      </header>
    );
  }
}
