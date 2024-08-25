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
  }, [album, limit]);

  const hasMorePage = () => {
    const recievedPostsCount = limit * PopupImageStore.currentPage;
    return recievedPostsCount < totalImagesCount;
  };

  return (
    <div className={styles.PaginationWrapper}>
      <Link
        className={`${styles.PaginationPageLink}`}
        onClick={() => PopupImageStore.currentPage <= 1 ? PopupImageStore.currentPage = 1 : PopupImageStore.currentPage -= 1}
        to={PopupImageStore.currentPage <= 1 ? `?page=1` : `/album/${album}/?page=${PopupImageStore.currentPage - 1}`}
      >
        &lt;
      </Link>
      {Array.from(Array(totalPagesCount), (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          to={`/album/${album}/?page=${page}`}
          className={`${styles.PaginationPageLink} ${
            page === PopupImageStore.currentPage ? styles.PaginationActivePage : ''
          }`}
        >
          {page}
        </Link>
      ))}
      <Link
        className={styles.PaginationPageLink}
        to={hasMorePage() ? `/album/${album}/?page=${PopupImageStore.currentPage + 1}` : `/album/${album}/?page=${PopupImageStore.currentPage}`}
      >
        &gt;
      </Link>
    </div>
  );
}

export default PaginationImages;
