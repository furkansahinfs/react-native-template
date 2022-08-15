import React from 'react';
import { View, Text } from 'react-native';
import { Marker } from 'react-native-maps';
import { Images } from '../../../../assets';
import { MarkerLessDetailedProps } from '../../../../interface';
import styles from './MarkerView.styles';
import { stylesGlobal } from '../../../../styles/';
import { useTheme } from '../../../../theme';

interface Props {
  markers: Array<MarkerLessDetailedProps>;
  click: (parkMarker: MarkerLessDetailedProps) => void;
  callout: (markerId: number) => void;
}

const MarkerView = ({ markers, click, callout }: Props) => {
  const parks: Array<MarkerLessDetailedProps> = markers;
  const handleClick = (marker: MarkerLessDetailedProps) => click(marker);
  const handleCallout = (markerId: number) => callout(markerId);

  const { colors } = useTheme();
  const globalStyles = stylesGlobal(colors);

  return parks.map((park: MarkerLessDetailedProps, index: number) => (
    <Marker
      key={index}
      coordinate={{
        latitude: park.point.lat,
        longitude: park.point.lng,
      }}
      title={park.name}
      onCalloutPress={() => {
        handleCallout(park.id);
      }}
      onPress={() => {
        handleClick(park);
      }}
      children={
        <View style={globalStyles.row}>
          <View style={styles.parkIcon} />
          <Text style={styles.slotText}>{park.name}</Text>
        </View>
      }
      tracksViewChanges={false}
      image={Images.nodata}
    />
  ));
};

export default MarkerView;
