import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { DropdownMenu } from '../../components';
import { I18N } from '../../locales';
import {
  getCityOfExistingLocation,
  getDistrictOfExistingLocation,
  getLocations,
  getNeighborhoodOfExistingLocation,
} from './SelectLocation.helper';

interface ISelectLocation {
  location: any;
  rentalLocation?: ILocation;
}

interface ILocation {
  name: string;
  id: number;
  parent?: any;
}

//TODO Refactoring

const undefinedLocation: ILocation = { name: '', id: -1 };

const SelectLocation = ({ location, rentalLocation }: ISelectLocation) => {
  const [cities, setCities] = useState<Array<ILocation>>([]);
  const [selectedCity, setSelectedCity] = useState<ILocation>(
    rentalLocation ? getCityOfExistingLocation(rentalLocation) : undefinedLocation,
  );
  const [districts, setDistricts] = useState<Array<ILocation>>([]);
  const [selectedDistrict, setSelectedDistrict] = useState<ILocation>(
    rentalLocation ? getDistrictOfExistingLocation(rentalLocation) : undefinedLocation,
  );
  const [neighborhoods, setNeighborhoods] = useState<Array<ILocation>>([]);
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<ILocation>(
    rentalLocation ? getNeighborhoodOfExistingLocation(rentalLocation) : undefinedLocation,
  );
  const [showLoading, setShowLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      if (location.current !== -1) {
        location.current = rentalLocation?.id !== undefined ? rentalLocation.id : location.current;
      } else {
        location.current = -1;
      }
      await getData(1, setCities);
      if (selectedCity) {
        await getData(selectedCity.id, setDistricts);
      }
      if (selectedDistrict) {
        await getData(selectedDistrict.id, setNeighborhoods);
      }
    })();
  }, []);

  async function getData(id: number, setData: any) {
    setShowLoading(true);
    const gottenData = await getLocations(id);
    setData(gottenData);
    setShowLoading(false);
  }

  const adjustChoices = async (
    type: 'city' | 'district' | 'neighborhood',
    choice: ILocation | null,
  ) => {
    if (choice?.id) {
      setLocation(choice);
    }

    if (type === 'city') {
      setDistricts([]);
      setNeighborhoods([]);
      setSelectedDistrict(undefinedLocation);
      setSelectedNeighborhood(undefinedLocation);
      if (choice?.id) {
        await getData(choice?.id, setDistricts);
      }
    } else if (type === 'district') {
      setNeighborhoods([]);
      setSelectedNeighborhood(undefinedLocation);
      if (choice?.id) {
        await getData(choice?.id, setNeighborhoods);
      }
    }
  };

  function setLocation(choice: ILocation) {
    location.current = choice?.id ? choice.id : -1;
  }

  return (
    <ScrollView>
      <DropdownMenu
        choices={cities}
        currentChoice={selectedCity ? selectedCity : undefinedLocation}
        dropdownTitle={I18N.t('selectLocationHook.selectCity')}
        setChoice={(choice: ILocation) => {
          setSelectedCity(choice);
          adjustChoices('city', choice);
        }}
        itemKey={'id'}
        titleKey={'name'}
        closeOnSelection={true}
        searchBar={true}
        loading={showLoading}
      />
      <DropdownMenu
        choices={districts}
        currentChoice={selectedDistrict ? selectedDistrict : undefinedLocation}
        dropdownTitle={I18N.t('selectLocationHook.selectDistrict')}
        setChoice={(choice: ILocation) => {
          setSelectedDistrict(choice);
          adjustChoices('district', choice);
        }}
        itemKey={'id'}
        titleKey={'name'}
        closeOnSelection={true}
        searchBar={true}
        loading={showLoading}
      />
      <DropdownMenu
        choices={neighborhoods}
        currentChoice={selectedNeighborhood ? selectedNeighborhood : undefinedLocation}
        dropdownTitle={I18N.t('selectLocationHook.selectNeighborhood')}
        setChoice={(choice: ILocation) => {
          setSelectedNeighborhood(choice);
          adjustChoices('neighborhood', choice);
        }}
        itemKey={'id'}
        titleKey={'name'}
        closeOnSelection={true}
        searchBar={true}
        loading={showLoading}
      />
    </ScrollView>
  );
};
export default SelectLocation;
