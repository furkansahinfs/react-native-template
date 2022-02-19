export {
  ForgetPasswordRequest,
  LoginRequest,
  LogoutRequest,
  GetProfileInfoRequest,
  NewActivationRequest,
  RefreshToken,
  SendImageRequest,
  SetProfilePictureRequest,
  SignupRequest,
  UpdateProfileInfoRequest,
} from './requests';

import { ApiHelper } from './serverConnections/';
import { API_URL } from '@env';

console.log('API_URL : ', API_URL);
const api = new ApiHelper({
  baseURL: API_URL,
  timeout: 3000,
});

export default api;
