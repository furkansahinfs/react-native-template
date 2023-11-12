import { API } from '@src/api/serverConnections';
import { IResponse } from '@src/interface';

const getProfileInfo = async (): Promise<IResponse> => {
  const path = '/users/me';

  return await API.GET(path, {});
};

export default getProfileInfo;
