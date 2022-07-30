import { GetLocationsRequest } from '../../api';

export async function getLocations(id: number) {
  const result = await GetLocationsRequest(id);
  return result !== null ? result : [];
}

interface ILocation {
  name: string;
  id: number;
  parent?: any;
}

export function getCityOfExistingLocation(rentalLocation: ILocation) {
  let rentalCityLocation: ILocation = rentalLocation;
  while (rentalCityLocation?.parent?.parent !== undefined) {
    rentalCityLocation = rentalCityLocation.parent;
  }

  if (rentalCityLocation?.parent !== undefined) {
    return rentalCityLocation;
  } else {
    return { name: '', id: -1 };
  }
}

export function getDistrictOfExistingLocation(rentalLocation: ILocation) {
  let rentalDistrictLocation: ILocation = rentalLocation;
  while (rentalDistrictLocation?.parent?.parent?.parent !== undefined) {
    rentalDistrictLocation = rentalDistrictLocation.parent;
  }

  if (rentalDistrictLocation?.parent?.parent !== undefined) {
    return rentalDistrictLocation;
  } else {
    return { name: '', id: -1 };
  }
}

export function getNeighborhoodOfExistingLocation(rentalLocation: ILocation) {
  let rentalNeighborHoodLocation: ILocation = rentalLocation;
  if (rentalNeighborHoodLocation?.parent?.parent?.parent !== undefined) {
    return rentalNeighborHoodLocation;
  } else {
    return { name: '', id: -1 };
  }
}
