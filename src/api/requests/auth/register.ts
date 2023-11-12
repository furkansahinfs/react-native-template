import { API } from '@src/api/serverConnections';
import { IResponse, SignupProps } from '@src/interface';

const register = async ({
  email,
  name,
  password,
  phone,
  surname,
}: SignupProps): Promise<IResponse> => {
  const path = '/auth/register';
  const json = {
    email,
    name,
    password,
    phone,
    surname,
  };

  return await API.POST(path, json, {});
};

export default register;
