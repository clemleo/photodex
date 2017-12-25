import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <h1 className="Header-title"><Link to="/">Photódex</Link></h1>
        <h2 className="Header-subtitle">{this.props.subtitle || "Gotta snap 'em all!"}</h2>
      </header>
    );
  }
}

export default Header;
