import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    left: scale(20),
    top: scale(20),
    zIndex: 1,
  },
  iconSize: {
    height: scale(30),
  },
});

export default styles;
