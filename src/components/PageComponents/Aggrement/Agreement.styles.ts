import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
  },

  description: {
    flex: 1,
    flexWrap: 'wrap',
    alignSelf: 'center',
  },

  errorText: {
    marginBottom: scale(10),
    color: 'red',
  },

  inputContainer: {
    marginVertical: scale(5),
  },

  underlinedDescription: {
    textDecorationLine: 'underline',
    color: 'blue',
  },
});

export default styles;
