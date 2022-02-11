import api from '../../index';

const forgetPassword = async (email: string) => {
  const path = '/auth/forgot-password';
  const json = {
    email: email,
  };
  return await api.POST(path, json, {}).then((result: any) => {
    if (result.status === 200) {
      return result.data;
    } else {
      return result.error;
    }
  });
};

export default forgetPassword;
