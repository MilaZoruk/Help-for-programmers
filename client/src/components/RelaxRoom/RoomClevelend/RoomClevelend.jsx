import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'
import styles from './RoomClevelend.module.css';

export default function RoomClevelend() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  //   const [image, setImage] = useState('');

  useEffect(() => {
    async function getBook() {
      const resp = await fetch(
        'https://openaccess-api.clevelandart.org/api/artworks/?limit=25',
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
      // setImage(result.config);
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
          url={['https://www.youtube.com/watch?v=2pbH57GfmtA&t=1s', 'https://www.youtube.com/watch?v=o_wJueqWFc4', 'https://www.youtube.com/watch?v=AuPubReb76k']}
          width='100%'
        />
      </div>

      <div className={styles.allArt}>
      {items.map((el) => (
          <>
          <img
          className={styles.imgARt}
          src={el?.images?.web?.url} alt={el.title} />
          <br></br>
            <div className="space-y-2 mt-4 text-lg" key={el.id}>
              <p className={styles.wordDescription1}>Название:</p>  <p className={styles.wordDescription}>{el.title}.</p>
              <br></br>
              <p className={styles.wordDescription1}>Автор:</p> <p className={styles.wordDescription}> {el.creators[0].description}</p>
              <br></br>
              <p className={styles.wordDescription1}>Факты:</p> <p className={styles.wordDescription}>{el.fun_fact}</p>
              <br></br>
          </div></>
      ))}
    </div>
    </>
  );
}
