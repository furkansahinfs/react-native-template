import api from '../index';
import { deleteUserCredentials, tokenRefresher } from '../../helpers/';
import { navigate } from '../../navigation';
import { IResponse } from '../../assets';

const controlResponse = async (response: IResponse) => {
  if (response.status === 200) {
    return {
      data: response.data,
      success: true,
      status: response.status,
    };
  } else if (response.status === 401) {
    console.log('Rerequest delete', response);
    await deleteUserCredentials();
    navigate('Login');
    return {
      data: { error: 'Unauthorized' },
      error: 'Unauthorized',
      success: false,
      status: 401,
    };
  } else {
    return {
      data: response.data,
      error:
        response.data.error.message !== undefined
          ? response.data.error.message
          : response.data.message !== undefined
          ? response.data.message
          : 'Error',
      success: false,
      status: response.status,
    };
  }
};

const refresh = async (config: object) => {
  const isAuth = await tokenRefresher();
  if (isAuth) {
    return api.api
      .request(config)
      .then((response: any) => {
        return controlResponse(response);
      })
      .catch((error: any) => {
        console.log(error);
        return controlResponse(error.response);
      });
  } else {
    return {
      data: { error: 'Unauthorized' },
      error: 'Unauthorized',
      success: false,
      status: 401,
    };
  }
};
export default refresh;
