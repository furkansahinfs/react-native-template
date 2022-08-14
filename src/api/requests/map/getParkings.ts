import api from '../../index';
import { IResponse, PositionProps } from '../../../interface';

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

const getParkings = async (coordinates: PositionProps, detail: string) => {
  const path = '/markers';
  const searchParams = setSearchParams(coordinates, detail);

  return await api
    .GET(path, {
      params: searchParams,
    })
    .then((result: IResponse) => {
      if (result.success) {
        return result.data;
      } else {
        return result.error;
      }
    });
};

export default getParkings;
