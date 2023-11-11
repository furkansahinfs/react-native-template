import api from 'src/api';
import { IResponse } from 'src/interface';

const searchMarkers = async (text: string): Promise<IResponse> => {
  const path = '/markers';
  const searchParam = new URLSearchParams();

  searchParam.append('address', text);
  searchParam.append('name', text);
  searchParam.append('detail', 'LESS');

  return await api.GET(path, {
    params: searchParam,
  });
};

export default searchMarkers;
