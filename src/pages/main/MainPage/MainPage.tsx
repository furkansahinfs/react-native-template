import React, { useCallback, useRef, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import MapView from 'react-native-map-clustering';
import { useFocusEffect } from '@react-navigation/native';
import { CustomSafeAreaView, Icon } from '../../../components';
import { TestData } from '../../../assets';
import { MarkerLessDetailedProps, PositionProps, RegionProps } from '../../../interface';
import {
  calculateScreenPolygon,
  findCoordinates,
  getMarkers,
  handleMarkerChange,
  handleRegionChange,
} from './MainPage.helper';
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
  const [selectedMarker, setSelectedMarker] = useState<MarkerLessDetailedProps>();

  const { colors } = useTheme();

  useFocusEffect(
    useCallback(() => {
      let isActive = true;
      const fetch = async () => {
        if (isActive) {
          const localPosition = calculateScreenPolygon(region);
          await getData(localPosition);
        }
      };

      fetch();
      return () => {
        isActive = false;
      };
    }, []),
  );

  async function getData(reg: PositionProps) {
    const gottenMarkers = await getMarkers(reg);
    setMarkers(gottenMarkers);
  }

  async function handlePositionChange(reg: RegionProps) {
    handleRegionChange(reg, setPosition);
    const localPosition = calculateScreenPolygon(reg);
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
            {markers.map((park: MarkerLessDetailedProps, index) => (
              <MarkerView
                key={index}
                isSelected={park.id === selectedMarker?.id}
                click={(parkMarker: MarkerLessDetailedProps) => {
                  handleMarkerChange(parkMarker, mapRef);
                  setSelectedMarker(park);
                }}
                park={park}
              />
            ))}
          </MapView>

          <TouchableOpacity
            onPress={async () => await findCoordinates(setRegion, mapRef)}
            style={[styles.userLocationButton, { backgroundColor: colors.background }]}
          >
            <Icon
              name={'map-pin'}
              size={styles.iconSize.height}
              onPressFunction={async () => await findCoordinates(setRegion, mapRef)}
            />
          </TouchableOpacity>
        </View>
      }
    />
  );
}
