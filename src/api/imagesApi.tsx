import { api } from "utils/api";

export const imagesApi = {
  photolist: function (data) {
    return api.get(`/search/photos`, data);
  },
  topicList: function (data) {
    return api.get(`/topics`, data);
  },
  relatedSearch: function (data) {
    return api.get(`/search/collections`, data);
  }
};

// https://api.unsplash.com/search/photos?query=${tagTitle}&per_page=30&client_id=${API_KEY}

// https://api.unsplash.com/search/collections?query=${inputValue}&client_id=${API_KEY}
