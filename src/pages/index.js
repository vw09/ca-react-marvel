// Home.js
import React from 'react';
import useEvents from '@/data/events';
import styles from '@/styles/Home.module.css';

const Home = ({ onSelectCharacter }) => {
  const { data, isLoading, isError } = useEvents();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div className={styles.main}> 
      <h1>Evenementen</h1>
      {data.data.results.map(event => (
        <div key={event.id} onClick={() => onSelectCharacter(event)}>
          <h2>{event.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Home;
