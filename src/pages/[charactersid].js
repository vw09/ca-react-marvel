import React from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/Detail.module.css';
import useCharacters from '@/data/useCharacters'; // Import the new hook

const CharacterDetailPage = () => {
  const router = useRouter();
  const { character, isLoading, isError } = useCharacter(router.query.id); // Use the new hook

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div className={styles.main}>
      <button className={styles.backButton} onClick={() => router.back()}>
        Terug
      </button>
      <h1>{character?.name}</h1> {/* Use the character object */}
      <div className={styles.descriptionBlock}>
        <h2 className={styles.descriptionTitle}>Beschrijving</h2>
        <p>{character?.description}</p>
      </div>
      <div className={styles.charactersBlock}>
        <h2 className={styles.charactersTitle}>Characters</h2>
        <div>
          {character?.description?.((char) => ( // Use the character object
            <div key={char.resourceURI}>{char.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailPage;