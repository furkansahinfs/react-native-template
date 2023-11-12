import { API } from '@src/api/serverConnections';
import { IResponse, PositionProps } from '@src/interface';

function setSearchParams(coordinates: PositionProps, detail: string) {
  const searchParams = new URLSearchParams();

  if (coordinates.llng !== 0) {
    searchParams.append('blat', coordinates.blat.toString());
    searchParams.append('tlat', coordinates.tlat.toString());
    searchParams.append('llng', coordinates.llng.toString());
    searchParams.append('rlng', coordinates.rlng.toString());
  }

  if (detail) {
    searchParams.append('detail', detail.toUpperCase());
  }

  return searchParams;
}

const getMarkers = async (coordinates: PositionProps, detail: string): Promise<IResponse> => {
  const path = '/markers';
  const searchParams = setSearchParams(coordinates, detail);

  return await API.GET(path, {
    params: searchParams,
  });
};

export default getMarkers;
