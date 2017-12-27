import React from 'react';
import { Link } from 'react-router-dom';
import './IconLink.css';
import Icon from './Icon';

export default function IconLink(props) {
  let { icon, ...otherProps } = props;
  return (
    <Link className="IconLink" {...otherProps}>
      <Icon icon={icon} />
    </Link>
  );
}
