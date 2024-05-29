// Importeer de benodigde modules
import React from 'react';
import useCharacter from '@/path/to/useCharacter';
import styles from '@/styles/Home.module.css';

// Definieer de component
const CharacterDetailPage = () => {
  // TODO: Haal de characterid op uit de query parameters met useRouter
  const { data, isLoading, isError } = useCharacter(characterid);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div className={styles.main}>
      <h1>{data.name}</h1>
      {/* Voeg andere details van het character toe */}
    </div>
  );
};

// Exporteer de component
export default CharacterDetailPage;
