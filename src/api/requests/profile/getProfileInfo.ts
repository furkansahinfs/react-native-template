import { IResponse } from '../../../interface';
import api from '../../index';

const getProfileInfo = async () => {
  const path = '/users/me';

  return await api.GET(path, {}).then((result: IResponse) => {
    if (result.success) {
      return result.data;
    } else {
      return null;
    }
  });
};

export default getProfileInfo;
