import React from 'react';
import AuthenticationLinks from '../auth/AuthenticationLinks';

export default function Home(props) {
  return (
    <div>
      {!props.user && <AuthenticationLinks />}
      Hello {props.user ? props.user.name : 'anonymous'}!
    </div>
  );
}
