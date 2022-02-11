import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'transparent',
    borderRadius: scale(10),
  },
  widthAll: {
    width: '100%',
  },
});

export default styles;
