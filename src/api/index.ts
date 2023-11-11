export * from './requests';
import { API_URL } from '@env';
import { ApiHelper } from './serverConnections/';

console.log('API_URL : ', API_URL);
const api = new ApiHelper({
  baseURL: API_URL,
  timeout: 3000,
});

export default api;
