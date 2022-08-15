import { IResponse } from '../../../interface';
import api from '../../index';

const searchParkings = async (text: string) => {
  const path = '/companies/parkings';
  const searchParam = new URLSearchParams();

  searchParam.append('address', text);
  searchParam.append('name', text);
  searchParam.append('detail', 'LESS');

  return await api
    .GET(path, {
      params: searchParam,
    })
    .then((result: IResponse) => {
      if (result.success) {
        return result.data;
      }
      return result.error;
    });
};

export default searchParkings;
