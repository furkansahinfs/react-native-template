import { API } from '@src/api/serverConnections';
import { IResponse } from '@src/interface';
import store from '@src/store';

const logout = async (): Promise<IResponse> => {
  const path = '/auth/logout';
  const deviceId = store.getState().userCredentials.deviceId;
  const searchParams = new URLSearchParams();
  searchParams.append('deviceId', deviceId);

  return await API.GET(path, { params: searchParams });
};

export default logout;
