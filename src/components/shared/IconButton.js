import React from 'react';
import './IconButton.css';
import Icon from './Icon';

export default function IconButton(props) {
  let { icon, ...otherProps } = props;
  return (
    <button className="IconButton" {...otherProps}>
      <Icon icon={icon} />
    </button>
  );
} 
