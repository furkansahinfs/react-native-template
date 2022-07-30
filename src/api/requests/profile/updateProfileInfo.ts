import { ChangeableProfileData, IResponse } from '../../../interface';
import api from '../../index';

const updateProfileInfo = async (info: ChangeableProfileData) => {
  const path = '/users/me/update';

  const json = {
    name: info.name,
    surname: info.surname,
    phone: info.phone,
  };
  return await api.POST(path, json, {}).then((result: IResponse) => {
    if (result.success) {
      return true;
    } else {
      return result.error;
    }
  });
};

export default updateProfileInfo;
