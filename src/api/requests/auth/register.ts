import { IResponse, SignupProps } from '../../../interface';
import api from '../../index';

const register = async ({ email, name, password, phone, surname }: SignupProps) => {
  const path = '/auth/register';
  const json = {
    email,
    name,
    password,
    phone,
    surname,
  };
  return await api.POST(path, json, {}).then((result: IResponse) => {
    if (result.success) {
      return result.data;
    } else {
      return result.error;
    }
  });
};

export default register;
