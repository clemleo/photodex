import firebase from 'firebase';
import 'firebase/firestore'; // Required for side effects.
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

let config = {
  apiKey: "AIzaSyCygvdygp427301qMt8ZLO4N8pcYG3J99A",
  authDomain: "photodex-d7792.firebaseapp.com",
  databaseURL: "https://photodex-d7792.firebaseio.com",
  projectId: "photodex-d7792",
  storageBucket: "photodex-d7792.appspot.com",
  messagingSenderId: "1076257567944"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
