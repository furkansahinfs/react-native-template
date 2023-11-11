import api from 'src/api';
import { IResponse } from 'src/interface';

const getMarkerWithId = async (id: number, detail: string): Promise<IResponse> => {
  const path = `/markers/${id.toString()}]`;
  const searchParams = new URLSearchParams();

  searchParams.append('detail', detail.toUpperCase());

  return await api.GET(path, {
    params: searchParams,
  });
};

export default getMarkerWithId;
