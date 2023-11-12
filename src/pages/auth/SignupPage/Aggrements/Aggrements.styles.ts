import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  checboxExtraStyle: {
    borderWidth: 0,
    alignItems: 'flex-end',
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },

  checkboxView: {
    width: '20%',
  },

  description: {
    width: '80%',
    textAlignVertical: 'center',
  },

  errorText: {
    marginBottom: scale(10),
    color: 'red',
  },

  inputContainer: {
    marginVertical: scale(5),
    width: '85%',
    alignSelf: 'center',
  },

  underlinedDescription: {
    textDecorationLine: 'underline',
    color: 'blue',
  },
});

export default styles;
