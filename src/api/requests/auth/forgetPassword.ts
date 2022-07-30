import api from '../../index';
import { API_CLIENT_ID } from '@env';
import { IResponse } from '../../../interface';

const forgetPassword = async (email: string) => {
  const path = '/auth/forgot-password';
  const json = {
    client_id: API_CLIENT_ID,
    email: email,
  };
  return await api.POST(path, json, {}).then((result: IResponse) => {
    if (!result.success) {
      return result.error;
    } else {
      return result.data?.data?.message;
    }
  });
};

export default forgetPassword;
