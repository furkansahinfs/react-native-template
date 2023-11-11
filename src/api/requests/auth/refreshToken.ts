import { API_CLIENT_ID } from '@env';
import api from 'src/api';
import { updateDeviceId } from 'src/helpers';
import { IResponse } from 'src/interface';
import store from 'src/store';

async function getDeviceId() {
  let device_id = store.getState().userCredentials.deviceId;
  if (device_id === '' || device_id === undefined) {
    device_id = await updateDeviceId();
  }
  return device_id;
}

const refreshToken = async (refresh_token: string): Promise<IResponse> => {
  const path = '/auth/login';
  const deviceId = await getDeviceId();
  const json = {
    client_id: API_CLIENT_ID,
    client_secret: deviceId,
    grant_type: 'refresh_token',
    refresh_token: refresh_token,
    username: '',
    password: '',
  };
  const data = new URLSearchParams(json).toString();
  api.setToken('');
  return await api.POST(path, data, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });
};

export default refreshToken;
