import api from 'src/api';
import { IResponse } from 'src/interface';

const getProfileInfo = async (): Promise<IResponse> => {
  const path = '/users/me';

  return await api.GET(path, {});
};

export default getProfileInfo;
