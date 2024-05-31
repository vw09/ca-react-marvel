import React from 'react';
import useCharacters from '@/data/useCharacters';
import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router'

const Characters = () => {
  const router = useRouter()
  const { Characters, isLoading, isError } = useCharacters();

  const onSelectCharacter = (character) => {
    router.push(`/characters/${character.id}`)
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred while fetching characters</div>;

  const sortedCharacters = [...Characters].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className={styles.main}>
      <h1>The Chronicles of Marvel</h1>
      <div className={styles.container}>
        <div className={styles.eventsContainer}>
        {sortedCharacters.map(character => (
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

export default Characters;