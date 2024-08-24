import { useState, useEffect } from 'react';
import { createDirectus, rest, readItems } from '@directus/sdk';

import GalleryImage from './components/GalleryImage';
import PopupImage from './components/PopupImage';

import PopupImageStore from './store/PopupImageStore';

import './App.css';

function App() {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    async function fetchGalleryImages() {
      const client = createDirectus('http://localhost:8055/').with(rest());
      const result = await client.request(readItems('gallery'));
      setGalleryImages(result);
      PopupImageStore.setTotalImages(result.length);
    }
    fetchGalleryImages();
  }, []);

  return (
    <div>
      <header>
        <h1 className="header__title">Our Gallery</h1>
      </header>
      <main>
        <div className="gallery">
          {galleryImages.map((image, index) => (
            <GalleryImage
              key={image.id}
              id={index + 1}
              imageId={image.image}
              altText={image.imageName}
              popupOnOpen={(imageId, altText, currentImageNumber) => {
                PopupImageStore.setImageId(imageId);
                PopupImageStore.setImageAltText(altText);
                PopupImageStore.setCurrentImageNumber(currentImageNumber);
                PopupImageStore.togglePopup();
              }}
            />
          ))}
        </div>
        <PopupImage />
      </main>
      <footer className="footer">
        <h2 className="footer__title">© By Vladimir Vishnyakov</h2>
        <p className="footer__text">CaseLab JavaScript 2024</p>
      </footer>
    </div>
  );
}

export default App;
