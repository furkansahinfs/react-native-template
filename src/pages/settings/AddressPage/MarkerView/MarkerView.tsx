import React from 'react';
import { Marker } from 'react-native-maps';
import { I18N } from '../../../../locales';
import { RegionProps } from '../../../../assets/interfaces';

interface IMarkerView {
  location: RegionProps;
  click: (location: RegionProps) => void;
}

const MarkerView = ({ location, click }: IMarkerView) => {
  return (
    <Marker
      coordinate={{
        latitude: location.latitude,
        longitude: location.longitude,
      }}
      title={I18N.t('addressPage.selectedLocation')}
      onPress={() => click(location)}
      pinColor={'red'}
      tracksViewChanges={false}
    />
  );
};

export default MarkerView;
