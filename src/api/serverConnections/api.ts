import { API_URL } from '@env';
import ApiHelper from './apiHelper';

console.log('API_URL : ', API_URL);
const api = new ApiHelper({
  baseURL: API_URL,
  timeout: 3000,
});

export default api;
