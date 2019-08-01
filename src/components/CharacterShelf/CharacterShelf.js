import React from 'react';

import Characters from '../Characters/Characters';
import getCharacterData from '../../helpers/data/getCharacterData';

import './CharacterShelf.scss';

class CharacterShelf extends React.Component {
  state={
    characters: [],
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
    return (
      <React.Fragment>
        <h1>Marvel Characters</h1>
        <Characters key={characters.id} hero={characters} />
      </React.Fragment>
    );
  }
}

export default CharacterShelf;
