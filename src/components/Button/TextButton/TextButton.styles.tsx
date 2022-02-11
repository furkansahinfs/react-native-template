import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  buttonText: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  marginVertical: {
    marginVertical: scale(2),
  },
  width: {
    width: '70%',
  },
});

export default styles;
