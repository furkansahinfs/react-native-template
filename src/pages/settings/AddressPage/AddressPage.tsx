import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import MapView from 'react-native-maps';
import { Header } from '../../../components';
import { I18N } from '../../../locales';
import { TestData } from '../../../assets';
import { RegionProps } from '../../../assets/interfaces';
import { fitToMarker, getUserAddress, markerClick, selectLocation } from './AddressPage.helper';
import styles from './AddressPage.styles';
import { MarkerView } from './MarkerView';
import { useTheme } from '../../../theme';

export default function AddressPage() {
  const [initialRegion, setInitialRegion] = useState<RegionProps>(TestData.initialRegion);
  const [selectedLocation, setSelectedLocation] = useState<RegionProps>();
  const mapRef = useRef();
  const { colors } = useTheme();

  useEffect(() => {
    (async () => {
      await init();
    })();
  }, []);

  async function init() {
    const result: RegionProps = await getUserAddress();
    if (result !== null) {
      setSelectedLocation({
        latitude: result.latitude,
        longitude: result.longitude,
        longitudeDelta: 0.5,
        latitudeDelta: 0.5,
      });
      setInitialRegion({
        latitude: result.latitude,
        longitude: result.longitude,
        longitudeDelta: 1,
        latitudeDelta: 1,
      });
    }
  }

  return (
    <SafeAreaView style={{ backgroundColor: colors.background }}>
      <View>
        <Header back={true} title={I18N.t('addressPage.header')} />

        <MapView
          ref={mapRef}
          initialRegion={initialRegion}
          showsUserLocation={true}
          showsMyLocationButton={false}
          style={styles.map}
          onPress={(event) => selectLocation({ event, setSelectedLocation, fitToMarker, mapRef })}
          zoomEnabled={true}
        >
          {selectedLocation && (
            <View>
              {MarkerView({
                location: selectedLocation,
                click: markerClick,
              })}
            </View>
          )}
        </MapView>
      </View>
    </SafeAreaView>
  );
}
