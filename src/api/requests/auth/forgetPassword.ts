import { API_CLIENT_ID } from '@env';
import { API } from '@src/api/serverConnections';
import { IResponse } from '@src/interface';

const forgetPassword = async (email: string): Promise<IResponse> => {
  const path = '/auth/forgot-password';
  const json = {
    client_id: API_CLIENT_ID,
    email: email,
  };

  return await API.POST(path, json, {});
};

export default forgetPassword;
