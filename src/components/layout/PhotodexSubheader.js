import firebase from 'firebase';
import React, { Component } from 'react';

export default class PhotodexSubheader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    let db = firebase.firestore();
    db.collection('users').where('name', '==', this.props.trainerName).get().then(snapshot => {
      let trainer = snapshot.docs[0];
      if (trainer) {
        let trainerId = trainer.id;
        db.collection('users').doc(trainerId).collection('snaps').get().then(snapshot =>
          this.setState({ count: snapshot.size || 0 })
        );
      } else {
        this.setState({ count: 0 });
      }
    });
  }

  render() {
    return (
      <div>
        <p style={{ margin: '0', fontWeight: 'bold' }}>by {this.props.trainerName}</p>
        {this.state.count !== undefined &&
          <h2 className="Header-subtitle" style={{ margin: '4px 0 0 0' }}>
            Snapped: {this.state.count}
          </h2>}
      </div>
    );
  }
}
