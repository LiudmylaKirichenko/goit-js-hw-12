import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50418934-092a9418718642a9f59a6e549';
const PER_PAGE = 15;

export async function getImagesByQuery(query, page) {

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: PER_PAGE,
        page: page,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Request failed:', error.message);
    throw error;
  }
}
