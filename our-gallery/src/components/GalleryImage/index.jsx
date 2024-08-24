import styles from './GalleryImage.module.css';

const base_image_url = 'http://localhost:8055/assets/';

function GalleryImage({ id, imageId, altText, popupOnOpen }) {
  return (
    <div className={styles.image_wrapper}>
      <img onClick={() => popupOnOpen(imageId, altText, id)} className={styles.image} src={base_image_url + imageId} alt={altText} />
    </div>
  );
}

export default GalleryImage;
