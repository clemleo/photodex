import firebase from 'firebase';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Photodex.css';
import Entry from './Entry';
import Placeholder from './Placeholder';

export default class Photodex extends Component {
  constructor(props) {
    super(props);
    this.trainerName = props.match.params.trainer;
    this.state = {
      pokedex: []
    }
  }

  componentDidMount() {
    let db = firebase.firestore();
    db.collection('pokedex').get().then(snapshot => {
      this.setState({ pokedex: snapshot.docs });
    });
    db.collection('users').where('name', '==', this.trainerName).get().then(snapshot => {
      let trainer = snapshot.docs[0] || null;
      this.setState({ trainer });
      if (trainer) {
        db.collection('users').doc(trainer.id).collection('snaps').get().then(snapshot => {
          let docs = snapshot.docs || [];
          let snaps = docs.reduce((map, doc) => {
            map[doc.id] = doc.data();
            return map;
          },{});
          this.setState({ snaps });
        });
      }
    });
  }

  render() {
    let numberOrMode = this.props.match.params.numberOrMode;
    let canEdit = this.props.user && (this.props.user.name === this.trainerName); 
    if (numberOrMode && (numberOrMode !== 'edit' || !canEdit)) {
      return <Redirect to={`/${this.trainerName}`} />
    }

    if (this.state.trainer === null) {
      return (<div>Trainer not found!</div>);
    }
    if (!this.state.trainer || !this.state.snaps) {
      return null;
    }

    let entries = [];
    let placeholders = [];

    let trainerId = this.state.trainer.id;
    let userId = this.props.user ? this.props.user.uid : undefined;
    this.state.pokedex.forEach((doc, i) => {
      let number = doc.id;
      entries.push(<Entry key={i} number={number} pokemon={doc.data()}
        trainerId={trainerId} userId={userId} editMode={!!numberOrMode} 
        snap={this.state.snaps[number]} />);
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
