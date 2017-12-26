import firebase from 'firebase';
import React, { Component } from 'react';
import './Photodex.css';
import Entry from './Entry';
import Placeholder from './Placeholder';

export default class Photodex extends Component {
  constructor() {
    super();
    this.state = {
      pokedex: []
    }
  }

  componentDidMount() {
    let db = firebase.firestore();
    let trainerName = this.props.match.params.trainer;
    db.collection('users').where('name', '==', trainerName).get().then(snapshot => {
      this.setState({ trainer: snapshot.docs[0] || null });
    });
    db.collection('pokedex').get().then(snapshot => {
      this.setState({ pokedex: snapshot.docs });
    });
  }

  render() {
    if (this.state.trainer === null) {
      return (<div>Trainer not found!</div>);
    }
    if (!this.state.trainer) {
      return null;
    }

    let entries = [];
    let placeholders = [];

    let trainerId = this.state.trainer.id;
    let userId = this.props.user ? this.props.user.uid : undefined;
    this.state.pokedex.forEach((doc, i) => {
      entries.push(<Entry key={i} number={doc.id} pokemon={doc.data()}
        trainerId={trainerId} userId={userId} />);
      placeholders.push(<Placeholder key={i} />);
    });

    // Placeholders provide a hacky way to ensure that last row of aligns to grid.
    // http://stackoverflow.com/a/22018710
    return (
      <div className="Photodex">
        {entries}
        {placeholders}
      </div>
    );
  }
}
