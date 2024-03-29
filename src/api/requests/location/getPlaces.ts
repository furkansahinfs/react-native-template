import { API } from '@src/api/serverConnections';
import { IResponse } from '@src/interface';

const GOOGLE_SEARCH_API_KEY = '//GOOGLE_SEARCH_API_KEY_ENV';
const GOOGLE_PLACES_URL = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';
const GOOGLE_PLACES_RADIUS = 5000;

export const getPlaces = async (input: string) => {
  const url =
    GOOGLE_PLACES_URL +
    '?input=' +
    input +
    '&radius=' +
    GOOGLE_PLACES_RADIUS +
    '&key=' +
    GOOGLE_SEARCH_API_KEY;

  return await API.GET(url, {}).then((result: IResponse) => {
    if (result.status === 200) {
      return result.data?.predictions;
    } else {
      return [];
    }
  });
};

export default getPlaces;
