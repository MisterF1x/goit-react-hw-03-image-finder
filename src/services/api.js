import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
export const fetchImages = async (query, page, perPage) => {
  const AUTH_KEY = '31458632-f974c55b2783a3eb2e44be64a';
  const options = {
    params: {
      key: AUTH_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: perPage,
      page: page,
    },
  };
  const { data } = await axios(options);
  return data;
};
