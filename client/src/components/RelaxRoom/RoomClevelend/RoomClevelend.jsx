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
        'https://openaccess-api.clevelandart.org/api/artworks/?limit=5',
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
// добавить проверку на null
  return (
    <ul>
        <div className='player-wrapper'>
          <ReactPlayer
          className='react-player'
          url={['https://www.youtube.com/watch?v=2pbH57GfmtA&t=1s', 'https://www.youtube.com/watch?v=o_wJueqWFc4', 'https://www.youtube.com/watch?v=AuPubReb76k']}
          width='100%'
        />
      </div>
      {items.map((el) => (
        <div className={styles.allArt}>
          <img
          className={styles.imgARt}
          src={el.images.web.url} alt={el.title}
          />
        <div key={el.id}>Название: {el.title}.
          <p>Автор: {el.creators[0].description}</p>
          <p>Забавные факты: {el.fun_fact}</p>
          <p>Описание: {el.wall_description}</p>
        </div>
        </div>
      ))}
    </ul>
  );
}
