import {makeAutoObservable} from 'mobx';

class popupImageStore {
  isOpen = false;
  imageId = '';
  imageAltText = '';
  currentImageNumber = 0;
  totalImages = 0;
  currentAlbom = [];
  currentPage = 0;

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
    if (currentImageNumber < 1) {
      this.currentImageNumber = 1
    } else {
      this.currentImageNumber = currentImageNumber;
    }
  }

  setTotalImages(totalImages) {
    this.totalImages = totalImages;
  }

  setCurrentAlbom(currentAlbom) {
    this.currentAlbom = currentAlbom;
  }

  setCurrentPage(currentPage) {
    this.currentPage = currentPage;
  }
}

const PopupImageStore = new popupImageStore();

export default PopupImageStore;