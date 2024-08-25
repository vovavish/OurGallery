import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PopupImageStore from '../../store/PopupImageStore';

import styles from './PaginationImages.module.css';


function PaginationImages({ album, limit, currentPage }) {
  const [totalImagesCount, setTotalImagesCount] = useState(0);
  const [totalPagesCount, setTotalPagesCount] = useState(0);

  useEffect(() => {
      let albomId = 0;
      async function fetchAlbomImages() {
        await fetch(`http://localhost:8055/items/albom?filter[albom_name]=${album}`)
          .then((res) => res.json())
          .then((res) => {
            albomId = res.data[0].id;
          });
        fetch(
          `http://localhost:8055/items/gallery?aggregate[count]=albom_id&groupBy[]=albom_id&filter[albom_id]=${albomId}`,
        )
          .then((res) => res.json())
          .then((res) => {
            const totalImages = res.data[0].count.albom_id;
            setTotalImagesCount(totalImages);
            PopupImageStore.setTotalImages(totalImages);
            setTotalPagesCount(Math.ceil(totalImages / limit));
          });
      }
      fetchAlbomImages();
  }, []);

  const hasMorePage = () => {
    const recievedPostsCount = limit * currentPage;
    return recievedPostsCount < totalImagesCount;
  };

  return (
    <div className={styles.PaginationWrapper}>
      <Link
        className={`${styles.PaginationPageLink}`}
        to={currentPage <= 1 ? `?page=1` : `?page=${currentPage - 1}`}
      >
        &lt;
      </Link>
      {Array.from(Array(totalPagesCount), (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          to={page === 1 ? '/' : `?page=${page}`}
          className={`${styles.PaginationPageLink} ${
            page === currentPage ? styles.PaginationActivePage : ''
          }`}
        >
          {page}
        </Link>
      ))}
      <Link
        className={styles.PaginationPageLink}
        to={hasMorePage() ? `?page=${currentPage + 1}` : `?page=${currentPage}`}
      >
        &gt;
      </Link>
    </div>
  );
}

export default PaginationImages;
