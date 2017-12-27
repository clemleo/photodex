import firebase from 'firebase';
import React, { Component } from 'react';
import Spinner from '../shared/Spinner';

export default class Entry extends Component {
  constructor(props) {
    super(props);
    this.storageRef = `photodex/${this.props.trainerId}/raw/${this.props.number}`;
    this.state = {};
  }

  componentWillMount() {
    if (this.props.snap) {
      this.setState({ url: this.props.snap.rawUrl });
    }
  }

  uploadSnap() {
    this.fileInput.onchange = () => {
      let file = this.fileInput.files[0];
      if (file) {
        this.setState({ url: null });
        firebase.storage().ref(this.storageRef).put(file).then(snapshot => {
          let url = snapshot.downloadURL;
          this.getDocRef().set({ rawUrl: url });
          this.setState({ url });
        });
      }
      this.fileInput.onchange = null;
    }
    this.fileInput.click();
  }

  getDocRef() {
    return firebase.firestore().collection('users').doc(this.props.trainerId)
      .collection('snaps').doc(this.props.number);
  }

  getClickHandler() {
    if (!this.props.pokemon.obtainable) {
      return null;
    }
    if (this.props.editMode) {
      return () => this.uploadSnap();
    }
    return null;
  }

  render() {
    let onClick = this.getClickHandler();
    let clickable = onClick ? 'clickable' : '';
    let unobtainable = this.props.pokemon.obtainable ? '' : 'unobtainable';
    let className = `Photodex-Entry ${this.props.pokemon.region} ${unobtainable} ${clickable}`;
    return (
      <button className={className} onClick={onClick}>
        <input type="file" style={{ display: 'none' }} ref={input => this.fileInput = input} />
        {this.state.url === null ?
          <Spinner /> : // Upload in progress.
          this.state.url !== undefined ?
            <img src={this.state.url} alt={this.props.pokemon.name} /> :
            this.props.number}
      </button>
    );
  }
}
