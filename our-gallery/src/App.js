import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1 className="header__title">Our Gallery</h1>
      </header>
      <main>
        <div className="gallery">
          <div className="gallery__image-wrapper">
            <img
              className="image"
              src="http://localhost:8055/assets/2db8579b-0acc-4aec-98a1-86784b6a9c1f"
            />
          </div>
          <div className="gallery__image-wrapper">
            <img
              className="image"
              src="http://localhost:8055/assets/2db8579b-0acc-4aec-98a1-86784b6a9c1f"
            />
          </div>
          <div className="gallery__image-wrapper">
            <img
              className="image"
              src="http://localhost:8055/assets/2db8579b-0acc-4aec-98a1-86784b6a9c1f"
            />
          </div>
          <div className="gallery__image-wrapper">
            <img
              className="image"
              src="http://localhost:8055/assets/2db8579b-0acc-4aec-98a1-86784b6a9c1f"
            />
          </div>
          <div className="gallery__image-wrapper">
            <img
              className="image"
              src="http://localhost:8055/assets/2db8579b-0acc-4aec-98a1-86784b6a9c1f"
            />
          </div>
          <div className="gallery__image-wrapper">
            <img
              className="image"
              src="http://localhost:8055/assets/2db8579b-0acc-4aec-98a1-86784b6a9c1f"
            />
          </div>
          <div className="gallery__image-wrapper">
            <img
              className="image"
              src="http://localhost:8055/assets/2db8579b-0acc-4aec-98a1-86784b6a9c1f"
            />
          </div>
          <div className="gallery__image-wrapper">
            <img
              className="image"
              src="http://localhost:8055/assets/2db8579b-0acc-4aec-98a1-86784b6a9c1f"
            />
          </div>
          <div className="gallery__image-wrapper">
            <img
              className="image"
              src="http://localhost:8055/assets/2db8579b-0acc-4aec-98a1-86784b6a9c1f"
            />
          </div>
        </div>

        <div className="popup">
          <div className="popup-wrapper">
            <img
              className="popup__image"
              src="http://localhost:8055/assets/2db8579b-0acc-4aec-98a1-86784b6a9c1f"
            />
            <div className="popup__info">
              <p className="popup__info-img_number">1/9</p>
              <svg className="popup__info-close-icon" version="1.1" viewBox="0 0 36 36">
                <path
                  d="M6.2,3.5L3.5,6.2c-0.7,0.7-0.7,1.9,0,2.7l9.2,9.2l-9.2,9.2c-0.7,0.7-0.7,1.9,0,2.7l2.6,2.6   c0.7,0.7,1.9,0.7,2.7,0l9.2-9.2l9.2,9.2c0.7,0.7,1.9,0.7,2.7,0l2.6-2.6c0.7-0.7,0.7-1.9,0-2.7L23.3,18l9.2-9.2   c0.7-0.7,0.7-1.9,0-2.7l-2.6-2.6c-0.7-0.7-1.9-0.7-2.7,0L18,12.7L8.8,3.5C8.1,2.8,6.9,2.8,6.2,3.5z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <h2 className="footer__title">© By Vladimir Vishnyakov</h2>
        <p className="footer__text">CaseLab JavaScript 2024</p>
      </footer>
    </div>
  );
}

export default App;
