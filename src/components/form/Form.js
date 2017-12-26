import React from 'react';
import './Form.css';
import SmallPrint from './SmallPrint';

export default function Form(props) {
  let { children, error, ...otherProps } = props;
  return (
    <form className="Form" {...otherProps}>
      {children}
      {error && <SmallPrint style={{ color: '#ff0000', fontWeight: 'bold' }}>
        {error.message}
      </SmallPrint>}
    </form>
  );
}
