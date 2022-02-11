import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  input: {
    width: '100%',
    fontSize: scale(12),
    paddingHorizontal: scale(5),
    marginBottom: scale(8),
    alignSelf: 'center',
  },
  iconSize: {
    height: scale(10),
  },
});

export default styles;
