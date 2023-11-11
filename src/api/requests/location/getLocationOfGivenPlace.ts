import api from 'src/index';
import { IResponse } from 'src/interface';

const GOOGLE_SEARCH_API_KEY = '//GOOGLE_SEARCH_API_KEY_ENV';
const GOOGLE_PLACES_DETAILS_URL = 'https://maps.googleapis.com/maps/api/place/details/json';

const getLocationOfGivenPlace = async (placeId: string) => {
  const url = GOOGLE_PLACES_DETAILS_URL + '?placeid=' + placeId + '&key=' + GOOGLE_SEARCH_API_KEY;

  return await api.GET(url, {}).then((result: IResponse) => {
    if (result.success) {
      const newRegion = {
        latitude: result.data.result.geometry.location.lat,
        longitude: result.data.result.geometry.location.lng,
      };
      return newRegion;
    } else {
      return null;
    }
  });
};

export default getLocationOfGivenPlace;
