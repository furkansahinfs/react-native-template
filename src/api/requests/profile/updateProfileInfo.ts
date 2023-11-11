import api from 'src/api';
import { ChangeableProfileData, IResponse } from 'src/interface';

const updateProfileInfo = async (info: ChangeableProfileData): Promise<IResponse> => {
  const path = '/users/me/update';

  const json = {
    name: info.name,
    surname: info.surname,
    phone: info.phone,
  };
  return await api.POST(path, json, {});
};

export default updateProfileInfo;
