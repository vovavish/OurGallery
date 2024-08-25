import styles from './AlbomCover.module.css';
import { Link } from 'react-router-dom';

const base_image_url = 'http://localhost:8055/assets/';

function AlbomCover({ albomName, albomPreviewImage, totalImages }) {
  return (
    <div>
      <div className={styles.albom_wrapper}>
        <Link to={`/album/${albomName}`}>
          <img className={styles.albom} src={`${base_image_url + albomPreviewImage}`} alt={albomName} />
        </Link>
      </div>
      <div className={styles.albom__info}>
        <p>{albomName}</p>
        <p>{totalImages} photo</p>
      </div>
    </div>
  );
}

export default AlbomCover;
