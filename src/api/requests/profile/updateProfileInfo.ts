import { API } from '@src/api/serverConnections';
import { ChangeableProfileData, IResponse } from '@src/interface';

const updateProfileInfo = async (info: ChangeableProfileData): Promise<IResponse> => {
  const path = '/users/me/update';

  const json = {
    name: info.name,
    surname: info.surname,
    phone: info.phone,
  };
  return await API.POST(path, json, {});
};

export default updateProfileInfo;
