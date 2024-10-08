import { observer } from 'mobx-react-lite';
import { useParams, Link } from 'react-router-dom';
import PopupImageStore from '../../store/PopupImageStore';

import styles from './PopupImage.module.css';

const base_image_url = 'http://localhost:8055/assets/';

const PopupImage = observer(() => {
  const { album, imageId } = useParams();
  console.log('in Popup', album, imageId);

  return (
    <>
      {PopupImageStore.isOpen && (
        <div className={styles.popup}>
          <div className={styles.popup_wrapper}>
            <img
              className={styles.popup__image}
              src={base_image_url + PopupImageStore.imageId}
              alt={PopupImageStore.imageAltText}
            />
            <div className={styles.popup__info}>
              <p className={styles.popup__info_text}>{PopupImageStore.imageAltText}</p>
              <div className={styles.popup__info_number_close_wrapper}>
                <p className={`${styles.popup__info_text} ${styles.popup__info_number_images}`}>
                  {PopupImageStore.currentImageNumber}/{PopupImageStore.totalImages}
                </p>
                <div className={styles.popup__info_switch_image_wrapper}>
                  <Link
                    className={styles.popup__link_switch_image}
                    onClick={() => {
                      if (PopupImageStore.currentImageNumber - 1 > 0) {
                        const currentImage = PopupImageStore.currentAlbom[PopupImageStore.currentImageNumber - 2];
                        PopupImageStore.setCurrentImageNumber(PopupImageStore.currentImageNumber - 1);
                        PopupImageStore.setImageId(currentImage.image);
                        PopupImageStore.setImageAltText(currentImage.imageName);
                      }
                    }}
                    to={`/album/${album}/${Number(imageId) === 0 ? 1 : imageId > 1 ? imageId - 1 : 1}${PopupImageStore.currentPage ? `?page=${PopupImageStore.currentPage}` : ''}`}
                  >
                    &lt;
                  </Link>
                  <Link
                    className={styles.popup__link_switch_image}
                    onClick={() => {
                      if (PopupImageStore.currentImageNumber < PopupImageStore.currentAlbom.length) {
                        const currentImage = PopupImageStore.currentAlbom[PopupImageStore.currentImageNumber];
                        PopupImageStore.setCurrentImageNumber(Number(PopupImageStore.currentImageNumber) + 1);
                        PopupImageStore.setImageId(currentImage.image);
                        PopupImageStore.setImageAltText(currentImage.imageName);
                      }
                    }}
                    to={`/album/${album}/${
                      imageId < PopupImageStore.totalImages
                        ? Number(imageId) + 1
                        : PopupImageStore.totalImages
                    }${PopupImageStore.currentPage ? `?page=${PopupImageStore.currentPage}` : ''}`}
                  >
                    &gt;
                  </Link>
                </div>
                <button
                  onClick={() => PopupImageStore.togglePopup()}
                  className={styles.popup__close_button}
                >
                  <svg className={styles.popup__close_icon} viewBox="0 0 36 36">
                    <path d="M6.2,3.5L3.5,6.2c-0.7,0.7-0.7,1.9,0,2.7l9.2,9.2l-9.2,9.2c-0.7,0.7-0.7,1.9,0,2.7l2.6,2.6   c0.7,0.7,1.9,0.7,2.7,0l9.2-9.2l9.2,9.2c0.7,0.7,1.9,0.7,2.7,0l2.6-2.6c0.7-0.7,0.7-1.9,0-2.7L23.3,18l9.2-9.2   c0.7-0.7,0.7-1.9,0-2.7l-2.6-2.6c-0.7-0.7-1.9-0.7-2.7,0L18,12.7L8.8,3.5C8.1,2.8,6.9,2.8,6.2,3.5z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default PopupImage;
