import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import AlbomCover from '../../components/AlbomCover';

import styles from './Home.module.css';

function Home() {
  const [alboms, setAlboms] = useState([]);
  const [albomsImagesCounter, setAlbomsImagesCounter] = useState([]);
  const [searchParams] = useSearchParams();

  const LIMIT_ALBOMS = 9;
  const currentPage = parseInt(searchParams.get('page')) || 1;

  useEffect(() => {
    function fetchAlboms(limit, page) {
      fetch(`http://localhost:8055/items/gallery?aggregate[count]=albom_id&groupBy[]=albom_id`)
        .then((res) => res.json())
        .then((res) => {
          setAlbomsImagesCounter(res.data);
        });

      fetch(`http://localhost:8055/items/albom`)
        .then((res) => res.json())
        .then((res) => {
          setAlboms(res.data);
        });
    }

    fetchAlboms(LIMIT_ALBOMS, currentPage);
  }, [searchParams]);

  return (
    <div>
      <header>
        <h1 className={styles.header__title}>Our Albums</h1>
      </header>
      <main>
        <div className={styles.alboms}>
          {alboms.map((albom, index) => (
            <AlbomCover
              key={albom.id}
              albomName={albom.albom_name}
              albomPreviewImage={albom.albom_preview_image}
              totalImages={albomsImagesCounter[index].count.albom_id}
            />
          ))}
        </div>
      </main>
      <footer className={styles.footer}>
        <h2 className={styles.footer__title}>© By Vladimir Vishnyakov</h2>
        <p className={styles.footer__text}>CaseLab JavaScript 2024</p>
      </footer>
    </div>
  );
}

export default Home;
