import { Link } from 'react-router-dom';

import PopupImageStore from '../../store/PopupImageStore';

import styles from './GalleryImage.module.css';

const base_image_url = 'http://localhost:8055/assets/';

function GalleryImage({ id, imageId, altText, album, popupOnOpen }) {
  return (
    <div className={styles.image_wrapper}>
      <Link to={`/album/${album}/${id}${PopupImageStore.currentPage ? `?page=${PopupImageStore.currentPage}` : ''}`}>
        <img onClick={() => popupOnOpen(imageId, altText, id)} className={styles.image} src={`${base_image_url + imageId}?width=300&height=200&quality=50`} alt={altText} />
      </Link>
    </div>
  );
}

export default GalleryImage;
