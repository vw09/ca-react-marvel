import React from 'react';
import { useRouter } from 'next/router';
import useCharacter from '@/data/events3'; // Gebruik de juiste hook
import styles from '@/styles/Detail.module.css';

const CharacterDetailPage = () => {
  const router = useRouter();
  const { data, isLoading, isError } = useCharacter(router.query.id); // Zorg ervoor dat je de juiste ID doorgeeft

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div className={styles.main}>
      <button className={styles.backButton} onClick={() => router.back()}>
        Terug
      </button>
      <h1>{data.data.results[0].name}</h1> {/* Gebruik de juiste eigenschappen van het karakter */}
      <div className={styles.descriptionBlock}>
        <h2 className={styles.descriptionTitle}>Beschrijving</h2>
        <p>{data.description}</p>
      </div>
      <div className={styles.charactersBlock}>
        <h2 className={styles.charactersTitle}>Characters</h2>
        <div>
          {data.data.results[0].description((char) => ( // Zorg ervoor dat je de juiste eigenschappen van het karakter gebruikt
            <div key={char.resourceURI}>{char.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailPage;
