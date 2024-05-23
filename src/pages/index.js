import React from 'react';
import useEvents from '@/data/events';
import styles from '@/styles/Home.module.css';

const Home = () => {
  const { data, isLoading, isError } = useEvents();

  const onSelectEvent = (event) => {
    alert(`Geselecteerd evenement: ${event.title}\nBeschrijving: ${event.description}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const sortedEvents = [...data.data.results].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className={styles.main}>
      <div className={styles.ballsContainer}>
        {sortedEvents.map(event => (
          <div key={event.id} className={styles.ball}></div>
        ))}
      </div>
      <div className={styles.eventsContainer}>
        {sortedEvents.map(event => (
          <div key={event.id} onClick={() => onSelectEvent(event)} className={styles.event}>
            <h2>{event.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
