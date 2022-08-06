import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  mainView: {
    height: '100%',
  },

  map: {
    height: '100%',
  },

  topBar: {
    width: '100%',
    position: 'absolute',
    zIndex: 1,
    elevation: 1,
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
