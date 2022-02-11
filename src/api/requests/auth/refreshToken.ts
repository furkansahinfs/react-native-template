import api from '../../index';
import store from '../../../store';
import { updateDeviceId } from '../../../helpers';

async function getDeviceId() {
  let device_id = store.getState().userCredentials.deviceid;
  if (device_id === '' || device_id === undefined) {
    device_id = await updateDeviceId();
  }
  return device_id;
}

const refreshToken = async (access_token: string) => {
  const path = '/refreshtoken';
  //const deviceid = await getDeviceId();
  const json = {
    token: access_token,
  };

  return await api.POST(path, json, {}).then((result: any) => {
    console.log(result);
    if (result.status === 200) {
      return result.data;
    } else {
      return result.error;
    }
  });
};

export default refreshToken;
