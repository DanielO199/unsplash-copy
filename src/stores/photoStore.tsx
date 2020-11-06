import { observable, action, makeObservable } from "mobx";

import { config } from "globals/config";
import { imagesApi } from "api/imagesApi";

class PhotoStore {
  loading: boolean = false;

  relatedTerms: [] = [];

  images: [] = [];

  constructor() {
    makeObservable(this, {
      loading: observable,
      relatedTerms: observable,
      images: observable,
      list: action,
      relatedSearch: action
    });
  }

  list(data) {
    this.loading = true;

    const params = { ...data, client_id: config.apiKey };

    return imagesApi
      .list(params)
      .then((response) => {
        this.images = response.results;
        return response;
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => {
        this.loading = false;
      });
  }

  relatedSearch(data) {
    this.loading = true;

    const params = { ...data, per_page: 5, client_id: config.apiKey };

    return imagesApi
      .relatedSearch(params)
      .then((response) => {
        this.relatedTerms = response.results;
        return response;
      })
      .catch((err) => {
        this.relatedTerms = [];
        throw err;
      })
      .finally(() => {
        this.loading = false;
      });
  }
}

export default new PhotoStore();
