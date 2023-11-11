import api from 'src/api';
import { IResponse } from 'src/interface';

const getLocations = async (id: number): Promise<IResponse> => {
  const path = '/locations?id=' + id;

  return await api.GET(path, {});
};

export default getLocations;
