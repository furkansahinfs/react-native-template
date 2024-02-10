import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  label: {
    fontSize: scale(12),
    marginBottom: scale(5)
  },
  input: {
    fontSize: scale(12),
    alignSelf: 'center',
  },
  inputContainer: {
    margin: 0,
    borderWidth: 1,
    paddingHorizontal: scale(10),
    paddingVertical: scale(5),
    borderRadius: scale(10),
    width: '105%',
    right: '10%',
  },
  iconStyle: {
    paddingRight: scale(7),
  },
  iconSize: {
    height: scale(13),
  },
});

export default styles;
