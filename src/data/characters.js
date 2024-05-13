
import React from 'react';

const CharacterDetail = ({ character }) => {
  return (
    <div>
      <h2>Character Details</h2>
      <p>Name: {character.name}</p>
      <p>Description: {character.description}</p>
      {/* Voeg hier de andere details van het personage toe */}
    </div>
  );
};

export default CharacterDetail;