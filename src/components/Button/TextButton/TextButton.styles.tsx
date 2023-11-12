import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: scale(10),
  },
  buttonText: {
    fontSize: scale(14),
  },
  marginVertical: {
    marginVertical: scale(2),
  },
  width: {
    width: '80%',
  },
});

export default styles;
