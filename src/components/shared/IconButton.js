import React from 'react';
import './IconButton.css';

export default function IconButton(props) {
  let { icon, ...otherProps } = props;
  return (
    <button className="IconButton" {...otherProps}>
      <i className={`fas fa-${props.icon}`} />
    </button>
  )
} 
