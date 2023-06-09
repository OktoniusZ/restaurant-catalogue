import CONFIG from './config';

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}`,
  DETAIL: (id) => `${CONFIG.DETAIL}/${id}`,
};

export default API_ENDPOINT;
