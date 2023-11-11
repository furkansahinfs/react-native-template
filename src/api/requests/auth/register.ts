import api from 'src/api';
import { IResponse, SignupProps } from 'src/interface';

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
  return await api.POST(path, json, {});
};

export default register;
