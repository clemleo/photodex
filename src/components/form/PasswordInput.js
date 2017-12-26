import React from 'react';

export default function PasswordInput(props) {
  let { name, type, placeholder, ...otherProps } = props;
  return (
    <input name={name || 'password'} type="password" placeholder="Password" {...otherProps} />
  );
}
