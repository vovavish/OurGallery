import { useState, useEffect } from 'react';
import { useSearchParams, useParams, Link } from 'react-router-dom';

import GalleryImage from '../../components/GalleryImage';
import PopupImage from '../../components/PopupImage';
import PaginationImages from '../../components/PaginationImages';

import PopupImageStore from '../../store/PopupImageStore';

import styles from './Album.module.css';

const Album = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [searchParams] = useSearchParams();
  const { album, imageId } = useParams();

  const LIMIT_IMAGES = 9;
  const currentPage = parseInt(searchParams.get('page')) || 1;
  PopupImageStore.setCurrentPage(currentPage);

  useEffect(() => {
    if (!imageId) {
      PopupImageStore.isOpen = false;
    }

    let albomId = 0;
    async function fetchGalleryImages(limit, page) {
      await fetch(`http://localhost:8055/items/albom?filter[albom_name]=${album}`)
        .then((res) => res.json())
        .then((res) => {
          albomId = res.data[0].id;
        });
      await fetch(
        `http://localhost:8055/items/gallery?limit=${limit}&page=${page}&filter[albom_id][_eq]=${albomId}`,
      )
        .then((res) => res.json())
        .then((res) => {
          setGalleryImages(res.data);
          fetch(`http://localhost:8055/items/gallery?filter[albom_id][_eq]=${albomId}`)
            .then(res => res.json())
            .then(res => {
              PopupImageStore.setCurrentAlbom(res.data);
              if (imageId) {
                if (imageId - 1 < res.data.length) {
                  PopupImageStore.setImageId(res.data[imageId - 1].image);
                  PopupImageStore.setImageAltText(res.data[imageId - 1].imageName);
                  PopupImageStore.setCurrentImageNumber(imageId);
                  PopupImageStore.isOpen = true;
                }
              }
            })

        });
    }

    fetchGalleryImages(LIMIT_IMAGES, currentPage);
  }, [searchParams, currentPage, imageId, album]);

  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.header__title}>{album}</h1>
        <Link to="/" className={styles.header__link}>Back to albums</Link>
      </header>
      <main>
        <div className={styles.gallery}>
          {galleryImages.map((image, index) => (
            <GalleryImage
              key={image.id}
              id={(currentPage - 1) * LIMIT_IMAGES + index + 1}
              imageId={image.image}
              altText={image.imageName}
              album={album}
              popupOnOpen={(imageId, altText, currentImageNumber) => {
                PopupImageStore.setImageId(imageId);
                PopupImageStore.setImageAltText(altText);
                PopupImageStore.setCurrentImageNumber(currentImageNumber);
                PopupImageStore.togglePopup();
              }}
            />
          ))}
        </div>
        <PaginationImages album={album} limit={LIMIT_IMAGES} currentPage={currentPage} />
        <PopupImage />
      </main>
      <footer className={styles.footer}>
        <h2 className={styles.footer__title}>© By Vladimir Vishnyakov</h2>
        <p className={styles.footer__text}>CaseLab JavaScript 2024</p>
      </footer>
    </div>
  );
};

export default Album;
