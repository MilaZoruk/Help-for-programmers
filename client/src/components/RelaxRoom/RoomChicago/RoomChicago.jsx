import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'
import styles from './RoomChicago.module.css';

export default function RoomChicago() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [image, setImage] = useState('');

  useEffect(() => {
    async function getBook() {
      const resp = await fetch(
        'https://api.artic.edu/api/v1/artworks?limit=15',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const result = await resp.json();
      console.log(result);
      setItems(result.data);
      setImage(result.config);
    }
    getBook();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <ul>
     <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=lSXcbiXB07A'
          width='100%'
        />
      </div>
      {items.map((el) => (
        <div className={styles.allArt}>
            <img
              className={styles.imgARt}
              src={`https://www.artic.edu/iiif/2/${el.image_id}/full/843,/0/default.jpg`}
              alt={el.title}
            />
            <div key={el.id}>Название: {el.title}.
            <p>Место: {el.place_of_origin}.</p>
            <p>Период: {el.date_start}-{el.date_end}.</p>
            </div>
          </div>
      ))}
    </ul>
  );
}
