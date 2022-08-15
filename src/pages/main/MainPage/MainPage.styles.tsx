import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  iconSize: {
    height: scale(15),
  },

  map: {
    height: '100%',
  },

  userLocationButton: {
    position: 'absolute',
    bottom: '10%',
    right: '5%',
    alignSelf: 'flex-end',
    padding: scale(10),
    borderRadius: scale(20),
  },
});

export default styles;
