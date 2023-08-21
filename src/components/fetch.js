import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const key = '38201775-25af2f6387845f79e6ba89182';

export const getResponse = async (queryItems, page) => {
  const response = await axios.get(
    `/?q=${queryItems.slice(
      queryItems.indexOf('/') + 1
    )}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response.data;
};
