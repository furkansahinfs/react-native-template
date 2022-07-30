import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  input: {
    width: '100%',
    fontSize: scale(12),
    paddingHorizontal: scale(5),
    marginBottom: scale(8),
  },
  iconSize: {
    height: scale(13),
  },
});

export default styles;
