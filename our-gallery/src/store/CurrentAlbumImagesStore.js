import {makeAutoObservable} from 'mobx';

class CurrentAlbumStore {
  constructor() {
    makeAutoObservable(this);
  }
}

export default new CurrentAlbumStore();