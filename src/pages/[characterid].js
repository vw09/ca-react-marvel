// pages/characters/[id].js

import React from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/Detail.module.css';

const CharacterDetail = ({ character }) => {
  const router = useRouter();

  if (!character) return <div>Error</div>;

  return (
    <div className={styles.main}>
      <button className={styles.backButton} onClick={() => router.back()}>
        Terug
      </button>
      <h1>{character.name}</h1>
      <div className={styles.descriptionBlock}>
        <h2 className={styles.descriptionTitle}>Beschrijving</h2>
        <p>{character.description}</p>
      </div>
      <div className={styles.charactersBlock}>
        <h2 className={styles.charactersTitle}>Comics</h2>
        <div>
          {character.comics.items.map((comic) => (
            <div key={comic.resourceURI}>{comic.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  const apiKey = "a437d6abb4a57dbbf98e7794596a8677";

  try {
    const res = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${apiKey}`);
    const data = await res.json();

    if (!data || !data.data || !data.data.results || data.data.results.length === 0) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        character: data.data.results[0].description
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        character: null,
      },
    };
  }
}

export default CharacterDetail;
