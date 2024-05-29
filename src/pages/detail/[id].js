import React from 'react';
import { useRouter } from 'next/router'
import useEvent from '@/data/event';
import styles from '@/styles/Detail.module.css';



const Index2 = () => {
  const router = useRouter()
  const { data, isLoading, isError } = useEvent(router.query.id);

console.log(data)

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div className={styles.main}>
      <h1>{data.data.results[0].title}</h1>
 <p>{data.data.results[0].description}</p>
  <div>{data.data.results[0].characters.items.map(char => {
    return (<div key={char.resourceURI}>{char.name}</div>)
  })}</div>
    </div>
  );
};

export default Index2;