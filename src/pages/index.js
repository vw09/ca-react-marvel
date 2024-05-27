import React from 'react';
import useEvents from '@/data/events';
import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()
  const { data, isLoading, isError } = useEvents();

  const onSelectEvent = (event) => {
    router.push(`detail/${event.id}`)
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const totalBalls = 20;

  const sortedEvents = [...data.data.results].sort((a, b) => new Date(b.date) - new Date(a.date));
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
          {eventsToShow.map(event => (
            <div key={event.id} className={styles.ballsContainer}>
              <div className={styles.ball}></div>
              <div onClick={() => onSelectEvent(event)} className={styles.event}>
                <h2>{event.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
