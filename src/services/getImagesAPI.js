import axios from 'axios';

const API_KEY = '38027572-91d11da1d3faaba73fe89cadf';
const PER_PAGE = 12;

export const getImagesAPI = async (query = '', page = 1) => {
  const res = await axios.get(
    `https://pixabay.com/api/?q=${query}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}&page=${page}`
  );
  return res.data.hits;
};
