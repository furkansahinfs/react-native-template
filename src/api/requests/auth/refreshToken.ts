import api from '../../index';
import { API_CLIENT_ID } from '@env';
import store from '../../../store';
import { updateDeviceId } from '../../../helpers';
import { IResponse } from '../../../assets/interfaces';

async function getDeviceId() {
  let device_id = store.getState().userCredentials.deviceid;
  if (device_id === '' || device_id === undefined) {
    device_id = await updateDeviceId();
  }
  return device_id;
}

const refreshToken = async (refresh_token: string) => {
  const path = '/auth/login';
  const deviceid = await getDeviceId();
  const json = {
    client_id: API_CLIENT_ID,
    client_secret: deviceid,
    grant_type: 'refresh_token',
    refresh_token: refresh_token,
    username: '',
    password: '',
  };
  const data = new URLSearchParams(json).toString();
  api.setToken('');
  return await api
    .POST(path, data, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
    .then((result: IResponse) => {
      if (result.status === 200) {
        return result.data;
      } else {
        return result.error;
      }
    });
};

export default refreshToken;
