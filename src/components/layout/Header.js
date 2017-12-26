import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(props) {
  return (
    <header className="Header">
      <h1 className="Header-title"><Link to="/">Photódex</Link></h1>
      <h2 className="Header-subtitle">{props.subtitle || "Gotta snap 'em all!"}</h2>
    </header>
  );
}
