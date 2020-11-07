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
