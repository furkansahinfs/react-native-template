import React from 'react';
import { Image, Text, View } from 'react-native';
import { Marker } from 'react-native-maps';
import { Images } from 'src/assets';
import { MarkerLessDetailedProps } from 'src/interface';
import styles from './MarkerView.styles';

interface Props {
  park: MarkerLessDetailedProps;
  isSelected: boolean;
  click: (parkMarker: MarkerLessDetailedProps) => void;
}

const MarkerView = ({ park, isSelected, click }: Props) => {
  const handleClick = (marker: MarkerLessDetailedProps) => click(marker);

  return (
    <Marker
      key={park.id}
      coordinate={{
        latitude: park.point.lat,
        longitude: park.point.lng,
      }}
      onPress={() => {
        handleClick(park);
      }}
      tracksViewChanges={isSelected}>
      <View style={[styles.row, isSelected ? styles.clickedMarker : {}]}>
        <Image source={Images.marker} style={styles.parkIcon} />
        <Text style={styles.slotText}>{park.count}</Text>
      </View>
    </Marker>
  );
};

export default MarkerView;
