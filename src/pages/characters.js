// Importeer de benodigde modules
import React from 'react';
import useCharacters from '@/path/to/useCharacters';
import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router';

// Definieer de component
const Characters = () => {
  const router = useRouter();
  const { characters, isLoading, isError } = useCharacters();

  const onSelectCharacter = (character) => {
    router.push(`/characters/${character.id}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div className={styles.main}>
      <h1>The Chronicles of Marvel</h1>
      <div className={styles.container}>
        <div className={styles.eventsContainer}>
          {characters.map(character => (
            <div key={character.id} className={styles.ballsContainer}>
              <div className={styles.ball}></div>
              <div onClick={() => onSelectCharacter(character)} className={styles.event}>
                <h2>{character.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Exporteer de component
export default Characters;
