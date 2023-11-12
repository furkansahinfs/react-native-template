import { API } from '@src/api/serverConnections';
import { IResponse } from '@src/interface';

const searchMarkers = async (text: string): Promise<IResponse> => {
  const path = '/markers';
  const searchParam = new URLSearchParams();

  searchParam.append('address', text);
  searchParam.append('name', text);
  searchParam.append('detail', 'LESS');

  return await API.GET(path, {
    params: searchParam,
  });
};

export default searchMarkers;
