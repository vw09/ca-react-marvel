import React from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/Detail.module.css';
import useCharacter from '@/data/useCharacters';

const CharacterId = () => {
  const router = useRouter();
  const { id } = router.query;
  const { character, isLoading, isError } = useCharacter(id);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred while fetching character</div>;

  return (
    <div className={styles.main}>
      <button className={styles.backButton} onClick={() => router.back()}>
        Back
      </button>
      <h1>{character.name}</h1>
      <div className={styles.descriptionBlock}>
        <h2 className={styles.descriptionTitle}>Description</h2>
        <p>{character.description}</p>
      </div>
      <div className={styles.comicsBlock}>
        <h2 className={styles.comicsTitle}>Comics</h2>
        <div>
          {character?.comics?.items?.map((comic) => {
            return <div key={comic.resourceURI}>{comic.name}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default CharacterId;