import { IResponse } from '../../../interface';
import api from '../../index';

const getParkingWithId = async (id: number, detail: string) => {
  const path = '/companies/parkings/' + id.toString();
  const searchParams = new URLSearchParams();

  searchParams.append('detail', detail.toUpperCase());

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

export default getParkingWithId;
