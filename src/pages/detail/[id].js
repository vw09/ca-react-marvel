import React from 'react';
import useEvents from '@/data/events';
import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router'

const Index2 = () => {
  const router = useRouter()
  //const { data, isLoading, isError } = useEvent(router.query.id);
  return (
    <div>
      <h1>This is Index {router.query.id}</h1>
      {/* Voeg hier de inhoud van je tweede pagina toe */}
    </div>
  );
};

export default Index2;