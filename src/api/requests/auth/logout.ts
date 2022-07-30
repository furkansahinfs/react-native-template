import api from '../../index';
import store from '../../../store';
import { IResponse } from '../../../interface';

const logout = async () => {
  const path = '/auth/logout';
  const device_id = store.getState().userCredentials.deviceid;
  const searchParams = new URLSearchParams();
  searchParams.append('device_id', device_id);

  return await api.GET(path, { params: searchParams }).then((result: IResponse) => {
    if (result.success) {
      return true;
    } else {
      return result.error;
    }
  });
};

export default logout;
