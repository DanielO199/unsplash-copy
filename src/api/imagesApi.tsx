import { api } from "utils/api";

export const imagesApi = {
  list: function (data) {
    return api.get(`/photos`, data);
  },
  relatedSearch: function (data) {
    return api.get(`/collections`, data);
  }
};

// https://api.unsplash.com/search/photos?query=${tagTitle}&per_page=30&client_id=${API_KEY}

// https://api.unsplash.com/search/collections?query=${inputValue}&client_id=${API_KEY}
