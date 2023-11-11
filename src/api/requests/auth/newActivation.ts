import { API_CLIENT_ID } from '@env';
import api from 'src/api';
import { IResponse } from 'src/interface';

const newActivation = async (email: string): Promise<IResponse> => {
  const path = '/auth/resend-activation-code';
  const json = {
    client_id: API_CLIENT_ID,
    email: email,
  };
  return await api.POST(path, json, {});
};

export default newActivation;
