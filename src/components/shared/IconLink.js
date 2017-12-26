import React from 'react';
import { Link } from 'react-router-dom';
import './IconLink.css';

export default function IconLink(props) {
  let { icon, ...otherProps } = props;
  return (
    <Link className="IconLink" {...otherProps}>
      <i className={`fas fa-${props.icon}`} />
    </Link>
  );
}
