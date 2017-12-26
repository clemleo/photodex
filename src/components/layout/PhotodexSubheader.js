import firebase from 'firebase';
import React, { Component } from 'react';

export default class PhotodexSubheader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.trainerName = props.match.params.trainer;
  }

  componentDidMount() {
    let db = firebase.firestore();
    db.collection('users').where('name', '==', this.trainerName).get().then(snapshot => {
      let trainer = snapshot.docs[0];
      if (trainer) {
        let trainerId = trainer.id;
        db.collection('users').doc(trainerId).collection('snaps').get().then(snapshot =>
          this.setState({ count: snapshot.size })
        );
      } else {
        this.setState({ count: 0 });
      }
    });
  }

  render() {
    return (
      <div>
        <p style={{ margin: '0', fontWeight: 'bold' }}>by {this.trainerName}</p>
        <h2 className="Header-subtitle" style={{ margin: '4px 0 0 0' }}>
          Snapped: {this.state.count !== undefined ? this.state.count : '???'}
        </h2>
      </div>
    );
  }
}
