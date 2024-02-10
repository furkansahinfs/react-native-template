import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'transparent',
    borderRadius: scale(10),
    padding: 0,
  },
  widthAll: {
    width: '90%',
  },
});

export default styles;
