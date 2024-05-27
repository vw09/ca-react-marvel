import React from 'react';

import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router'
import useEvent from '@/data/event';

const Index2 = () => {
  const router = useRouter()
  const { data, isLoading, isError } = useEvent(router.query.id);

console.log(data)

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div>
      <h1>{data.data.results[0].title}</h1>
 <p>{data.data.results[0].description}</p>
  <div>{data.data.results[0].characters.items.map(char => {
    return (<div key={char.resourceURI}>{char.name}</div>)
  })}</div>
    </div>
  );
};

export default Index2;