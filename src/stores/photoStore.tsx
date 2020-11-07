import { observable, makeObservable } from "mobx";

import { config } from "globals/config";
import { imagesApi } from "api/imagesApi";

class PhotoStore {
  loading: boolean = false;

  relatedTerms: [] = [];

  topics: [] = [];

  searchTerm: string = "";

  images: [] = [];

  constructor() {
    makeObservable(this, {
      loading: observable,
      relatedTerms: observable,
      topics: observable,
      images: observable,
      searchTerm: observable
    });
  }

  getSearchTerm(value) {
    this.searchTerm = value;
  }

  list(data?) {
    this.loading = true;

    const params = {
      ...data,
      query: this.searchTerm,
      per_page: 100,
      client_id: config.apiKey
    };

    return imagesApi
      .photolist(params)
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

  topicList() {
    this.loading = true;

    const params = {
      per_page: 10,
      client_id: config.apiKey
    };

    return imagesApi
      .topicList(params)
      .then((response) => {
        this.topics = response;
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
