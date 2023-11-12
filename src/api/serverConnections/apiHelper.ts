import axios, { AxiosInstance } from 'axios';
import { Toast } from '@src/components';
import { deleteUserCredentials, tokenRefresher } from '@src/helpers';
import { IResponse } from '@src/interface';
import { navigate } from '@src/navigation';

export interface ApiHelperOptions {
  baseURL: string;
  timeout?: number;
}

export default class ApiHelper {
  api: AxiosInstance;
  token: string | null | undefined;
  lang!: string | null;

  constructor(options: ApiHelperOptions) {
    const { baseURL, timeout = 10000 } = options;
    this.api = axios.create({
      baseURL,
      timeout,
      headers: { 'Content-Type': 'application/json' },
    });

    this.api.interceptors.request.use((prevConfig: any) => {
      const { ...config } = prevConfig;

      if (this.lang) {
        config.headers['Accept-Language'] = this.lang;
      }

      if (this.token) {
        config.headers.Authorization = this.token;
      }

      return config;
    });
  }

  // call this after login and application start
  setToken = (token: string, type = 'Bearer'): void => {
    this.token = `${type} ${token}`;
  };

  // call this after the language changed and application start
  setLanguage = (lang: string): void => {
    this.lang = lang;
  };

  POST = (path: string, data: any, config?: {}) => {
    return this.api
      .post(path, data, config)
      .then((response: any) => {
        return this.controlResponse(response);
      })
      .catch((error: any) => {
        return this.catchHandler(error);
      });
  };

  DELETE = (path: string, data: any) => {
    return this.api
      .delete(path, data)
      .then((response: any) => {
        return this.controlResponse(response);
      })
      .catch((error: any) => {
        return this.catchHandler(error);
      });
  };

  GET = (path: string, config?: {}) => {
    return this.api
      .get(path, config)
      .then((response: any) => {
        return this.controlResponse(response);
      })
      .catch((error: any) => {
        return this.catchHandler(error);
      });
  };

  PUT = (path: string, data: any, config?: {}) => {
    return this.api
      .put(path, data, config)
      .then((response: any) => {
        return this.controlResponse(response);
      })
      .catch((error: any) => {
        return this.catchHandler(error);
      });
  };

  PATCH = (path: string, data: any, config?: {}) => {
    return this.api
      .patch(path, data, config)
      .then((response: any) => {
        return this.controlResponse(response);
      })
      .catch((error: any) => {
        return this.catchHandler(error);
      });
  };

  catchHandler = (error: any) => {
    if (error?.response) {
      return this.controlResponse(error.response);
    } else {
      Toast(error.message, false);
      return {
        data: null,
        error: error.message,
        success: false,
        status: 500,
      };
    }
  };

  controlResponse = async (response: any, isRerequest: boolean = false): Promise<IResponse> => {
    if (response.status >= 200 && response.status <= 208) {
      return {
        data: response.data,
        success: true,
        status: response.status,
      };
    } else if (response.status === 401 && response.config.url !== '/auth/login') {
      if (isRerequest) {
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
        return await this.reRequest(response.config);
      }
    } else {
      const error =
        response?.data?.error?.message !== undefined
          ? response.data.error.message
          : response?.data?.message !== undefined
          ? response.data.message
          : 'Error';
      return {
        data: response.data,
        error: typeof error === 'string' ? error : JSON.stringify(error),
        success: false,
        status: response.status,
      };
    }
  };

  reRequest = async (config: object) => {
    const isAuth = await tokenRefresher();
    if (isAuth) {
      return this.api
        .request(config)
        .then((response: any) => {
          return this.controlResponse(response, true);
        })
        .catch((error: any) => {
          console.log(error);
          return this.controlResponse(error.response, true);
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
}
