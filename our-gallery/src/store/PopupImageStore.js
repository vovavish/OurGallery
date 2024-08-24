import {makeAutoObservable} from 'mobx';

class PopupImageStore {
  isOpen = false;
  imageId = '';
  imageAltText = '';
  currentImageNumber = 0;
  totalImages = 0;

  constructor() {
    makeAutoObservable(this);
  }

  togglePopup() {
    this.isOpen = !this.isOpen;
  }

  setImageId(imageId) {
    this.imageId = imageId;
  }

  setImageAltText(altText) {
    this.imageAltText = altText;
  }
  
  setCurrentImageNumber(currentImageNumber) {
    this.currentImageNumber = currentImageNumber;
  }

  setTotalImages(totalImages) {
    this.totalImages = totalImages;
  }
}

export default new PopupImageStore();