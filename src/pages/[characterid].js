// Importeer de benodigde modules
import React from 'react';
import useCharacter from '../data/events3';
import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router';

const CharacterDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <div>Loading...</div>;
  }

  // Gebruik de useCharacter-hook met het personage-id
  const { data, isLoading, isError } = usecharacter(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  // Render de inhoud op basis van de gegevens
  return (
    <div className={styles.main}>
      <h1>{data?.name}</h1>
      {/* Render andere details van het personage */}
    </div>
  );
};

export default CharacterDetail;
