import React, { useCallback, useRef, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import MapView from 'react-native-map-clustering';
import { useFocusEffect } from '@react-navigation/native';
import { CustomSafeAreaView, Icon } from '../../../components';
import { TestData } from '../../../assets';
import { MarkerLessDetailedProps, PositionProps, RegionProps } from '../../../interface';
import { findCoordinates, handleMarkerChange, handleRegionChange } from './MainPage.helper';
import { stylesGlobal } from '../../../styles/';
import { MarkerView } from './MarkerView/';
import { useTheme } from '../../../theme';
import styles from './MainPage.styles';

export default function MainPage() {
  const mapRef: any = useRef(); // type is any because I cannot find the exact type
  const [region, setRegion] = useState<RegionProps>(TestData.initialRegion);
  const [position, setPosition] = useState<PositionProps>({
    blat: 0,
    tlat: 0,
    llng: 0,
    rlng: 0,
  });
  const [markers, setMarkers] = useState<Array<MarkerLessDetailedProps>>([]);

  const { colors } = useTheme();
  const globalStyles = stylesGlobal(colors);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;
      const fetch = async () => {
        if (isActive) {
          await getData();
        }
      };

      fetch();
      return () => {
        isActive = false;
      };
    }, []),
  );

  async function getData(reg?: PositionProps) {
    console.log(reg);
  }

  async function handlePositionChange(reg: RegionProps) {
    handleRegionChange(reg, setPosition);
    const localPosition = {
      tlat: reg.latitude + reg.latitudeDelta / 2,
      blat: reg.latitude - reg.latitudeDelta / 2,
      llng: reg.longitude - reg.longitudeDelta / 2,
      rlng: reg.longitude + reg.longitudeDelta / 2,
    };
    setTimeout(async () => {
      await getData(localPosition);
    }, 500);
  }

  return (
    <CustomSafeAreaView
      InnerView={
        <View>
          <MapView
            ref={mapRef}
            initialRegion={region}
            onMapReady={async () => await findCoordinates(setRegion, mapRef)}
            onRegionChangeComplete={handlePositionChange}
            showsUserLocation={true}
            showsMyLocationButton={false}
            zoomEnabled={true}
            style={styles.map}
          >
            {MarkerView({
              //This is not JSX element
              callout: (markerId: number) => console.log(markerId, ' is clicked'),
              click: (parkMarker: MarkerLessDetailedProps) =>
                handleMarkerChange(parkMarker, mapRef),
              markers: markers,
            })}
          </MapView>

          <TouchableOpacity
            onPress={async () => await findCoordinates(setRegion, mapRef)}
            style={[styles.userLocationButton, { backgroundColor: colors.background }]}
          >
            <Icon
              name={'map-pin'}
              size={globalStyles.iconSize.height}
              onPressFunction={async () => await findCoordinates(setRegion, mapRef)}
            />
          </TouchableOpacity>
        </View>
      }
    />
  );
}
