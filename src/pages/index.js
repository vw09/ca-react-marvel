
import Navigation from '@/components/Navigation'
import styles from '@/styles/Home.module.css'
import { useState } from 'react';
import useEvents from '@/data/events';


export default function Home(){
  console.log(useEvents)
  const { data, isLoading, isError } = useEvents()
 
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>

  console.log(data);

  return (<div>
    {data.data.results.map(event => {
      return <div key={event.id}>
        <h2>{event.title}</h2>
        <div>
          {event.characters.items.map(character => {
            return <div key={character.resourceURI}>
              <h3>{character.name}</h3>
            </div>
          })}
        </div>
      </div>
    })}
  </div>)
}
