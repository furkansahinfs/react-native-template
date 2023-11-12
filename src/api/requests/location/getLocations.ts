import { API } from '@src/api/serverConnections';
import { IResponse } from '@src/interface';

const getLocations = async (id: number): Promise<IResponse> => {
  const path = '/locations?id=' + id;

  return await API.GET(path, {});
};

export default getLocations;
