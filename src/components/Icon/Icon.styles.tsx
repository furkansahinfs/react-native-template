import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  button: {
    padding: scale(2),
    borderRadius: scale(30),
  },
  iconStyle: {
    height: scale(20),
  },
});

export default styles;
