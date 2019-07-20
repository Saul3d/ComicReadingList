import React from 'react';

import Characters from '../Characters/Characters';
import getCharacterData from '../../helpers/data/getCharacterData';
import './Home.scss';

class Comics extends React.Component {
  state = {
    characters: [],
    comics: [],
  }

  getMyData = () => {
    getCharacterData.getCharacters()
      .then(characters => this.setState({ characters }))
      .catch(err => console.error('Could not get staff', err));
  }

  componentDidMount() {
    this.getMyData();
  }

  render() {
    const { characters } = this.state;
    console.error('saul', characters);
    return (
      <React.Fragment>
        <h1>Home Page</h1>
        <Characters hero={characters} />
      </React.Fragment>

    );
  }
}

export default Comics;
