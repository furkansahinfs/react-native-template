import { IResponse } from '../../../interface';
import api from '../../index';

const getLocations = async (id: number) => {
  const path = '/locations?id=' + id;

  return await api.GET(path, {}).then((result: IResponse) => {
    if (result.success) {
      return result.data;
    } else {
      return null;
    }
  });
};

export default getLocations;
