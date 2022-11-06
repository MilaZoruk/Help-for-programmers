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
        'https://api.artic.edu/api/v1/artworks?limit=25',
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

    <><div className={styles.playerwrapper}>
        <ReactPlayer
          className='react-player'
          url={['https://www.youtube.com/watch?v=WtKHPUrk5q8', 'https://www.youtube.com/watch?v=t3lcMgWoKY4', 'https://www.youtube.com/watch?v=NFPs_cRRGdM']}
          width='100%'
        />
      </div>

      <div className={styles.allArt}>
        {items.map((el) => (
         <>
            <img
              className={styles.imgARt}
              src={`https://www.artic.edu/iiif/2/${el.image_id}/full/843,/0/default.jpg`}
              alt={el.title}
            />
            <br></br>
            <div key={el.id}>
            <p className={styles.wordDescription1}> Название:</p> <p className={styles.wordDescription}>{el.title}</p>
            <p className={styles.wordDescription1}>Место:</p> <p className={styles.wordDescription}>{el.place_of_origin}</p>
            <p className={styles.wordDescription1}>Период:</p> <p className={styles.wordDescription}>{el.date_start}-{el.date_end}</p>
          </div>
          </>
      ))}
      </div>
    </>
  );
}
