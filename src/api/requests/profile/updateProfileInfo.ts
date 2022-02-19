import { ChangeableProfileData, IResponse } from '../../../assets';
import api from '../../index';

const updateProfileInfo = async (info: ChangeableProfileData) => {
  const path = '/userinformation/update';

  const json = {
    name: info.name,
    surname: info.surname,
    phone: info.phone,
  };
  return await api.POST(path, json, {}).then((result: IResponse) => {
    if (result.status === 200) {
      return true;
    } else {
      return result.error;
    }
  });
};

export default updateProfileInfo;
