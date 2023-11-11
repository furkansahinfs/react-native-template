import { API_CLIENT_ID } from '@env';
import api from 'src/api';
import { updateDeviceId } from 'src/helpers';
import { IResponse } from 'src/interface';
import store from 'src/store';

async function getDeviceId() {
  let deviceId = store.getState().userCredentials.deviceId;
  if (deviceId === '' || deviceId === undefined) {
    deviceId = await updateDeviceId();
  }
  return deviceId;
}

const login = async (email: string, password: string): Promise<IResponse> => {
  const path = '/auth/login';
  const deviceId = await getDeviceId();
  const json = {
    client_id: API_CLIENT_ID,
    client_secret: deviceId,
    grant_type: 'password',
    password: password,
    refresh_token: '',
    username: email,
  };
  const data = new URLSearchParams(json).toString();

  return await api.POST(path, data, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });
};

export default login;
