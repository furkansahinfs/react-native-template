import api from 'src/api';
import { IResponse } from 'src/interface';
import store from 'src/store';

const logout = async (): Promise<IResponse> => {
  const path = '/auth/logout';
  const deviceId = store.getState().userCredentials.deviceId;
  const searchParams = new URLSearchParams();
  searchParams.append('deviceId', deviceId);

  return await api.GET(path, { params: searchParams });
};

export default logout;
