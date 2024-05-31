import React from 'react';
import useCharacters from '@/data/useCharacters';
import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router';

const Characters = () => {
  const router = useRouter();
  const { characters, isLoading, isError } = useCharacter();

console.log(character)

  const onSelectCharacters = (character) => {
    router.push(`/detail/${character.id}`); // Zorg ervoor dat je character.id gebruikt
  };


  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;


  const totalBalls = 20;

  const sortedEvents = [...characters.results].sort((a, b) => new Date(b.date) - new Date(a.date));
  const eventsToShow = sortedEvents.slice(0, totalBalls);

  // Dummygegevens voor de overgebleven bollen
  const remainingBalls = totalBalls - eventsToShow.length;
  const dummyBalls = [...Array(remainingBalls)].map((_, index) => ({
    id: `dummy-${index}`,
    title: '',
  }));

  const allItems = [...eventsToShow, ...dummyBalls];


  return (
    <div className={styles.main}>
      <h1>The Chronicles of Marvel</h1>
      <div className={styles.container}>
        <div className={styles.eventsContainer}>
          {characters && characters.map(character => (
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

export default Character;
