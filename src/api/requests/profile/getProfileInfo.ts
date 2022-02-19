import { IResponse } from '../../../assets';
import api from '../../index';

const getProfileInfo = async () => {
  const path = '/users/me';

  return await api.GET(path, {}).then((result: IResponse) => {
    if (result.status === 200) {
      return result.data;
    } else {
      return null;
    }
  });
};

export default getProfileInfo;
