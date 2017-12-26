import firebase from 'firebase';
import React, { Component } from 'react';

export default class Entry extends Component {
  constructor(props) {
    super(props);
    this.storageRef = `photodex/${this.props.trainerId}/raw/${this.props.number}`;
    this.state = {};
  }

  componentDidMount() {
    this.getSnapDocRef().get().then(doc => {
      if (doc.exists) {
        this.setState({ url: doc.data().rawUrl });
      }
    });
  }

  uploadSnap() {
    this.fileInput.onchange = () => {
      let file = this.fileInput.files[0];
      if (file) {
        firebase.storage().ref(this.storageRef).put(file).then(snapshot => {
          this.getSnapDocRef().set({ rawUrl: snapshot.downloadURL });
          this.setState({ url: snapshot.downloadURL });
        });
      }
      this.fileInput.onchange = null;
    }
    this.fileInput.click();
  }

  getSnapDocRef() {
    return firebase.firestore().collection('users').doc(this.props.trainerId)
      .collection('snaps').doc(this.props.number);
  }

  render() {
    let pokemon = this.props.pokemon;
    let onClick = this.props.userId === this.props.trainerId ? () => this.uploadSnap() : undefined;
    let unobtainableClass = pokemon.obtainable ? '' : 'unobtainable';
    let clickableClass = onClick && pokemon.obtainable ? 'clickable' : '';
    return (
      <div className={`Photodex-Entry ${pokemon.region} ${unobtainableClass} ${clickableClass}`}
        onClick={onClick}>
        <input type="file" style={{ display: 'none' }} ref={input => this.fileInput = input} />
        {this.state.url ? <img src={this.state.url} alt={pokemon.name} /> : this.props.number}
      </div>
    );
  }
}
