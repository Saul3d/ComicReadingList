import React from 'react';

import './Characters.scss';

class Characters extends React.Component {
  render() {
    const { hero } = this.props;
    const makeCharacterCards = hero.map(character => (
     <div className="marvelCharacters col-2 d-flex flex-column">
       <h5>{character.name}</h5>
       <div className="image-wrapper">
       <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} title={character.name} className="characterImage"/>
       </div>
     </div>
    ));
    return (
      <div className="d-flex flex-wrap justify-content-center">
        {makeCharacterCards}
      </div>
    );
  }
}

export default Characters;
