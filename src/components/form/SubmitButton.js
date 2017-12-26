import React from 'react';
import './SubmitButton.css';

export default function SubmitButton(props) {
  return (
    <button className="SubmitButton" type="submit" disabled={props.loading}>
      {props.children || 'Go!'}
    </button>
  );
}
