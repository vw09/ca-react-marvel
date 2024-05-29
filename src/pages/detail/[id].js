import React from 'react';
import { useRouter } from 'next/router';
import useEvent from '@/data/event';
import styles from '@/styles/Detail.module.css';


const Index2 = () => {
  const router = useRouter();
  const { data, isLoading, isError } = useEvent(router.query.id);

  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div className={styles.main}>
      <button className={styles.backButton} onClick={() => router.back()}>
        Terug
      </button>
      <h1>{data.data.results[0].title}</h1>
      <div className={styles.descriptionBlock}>
        <h2 className={styles.descriptionTitle}>Description</h2>
        <p>{data.data.results[0].description}</p>
      </div>
      <div className={styles.charactersBlock}>
        <h2 className={styles.charactersTitle}>Characters</h2>
        <div>
          {data.data.results[0].characters.items.map((char) => {
            return <div key={char.resourceURI}>{char.name}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Index2;
