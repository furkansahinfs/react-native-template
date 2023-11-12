import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  dateTextInput: {
    borderWidth: 1,
    borderRadius: scale(10),
    width: '100%',
    padding: scale(15),
  },

  errorText: {
    marginBottom: scale(10),
    color: 'red',
  },

  genderInput: {
    borderWidth: 1,
    borderRadius: scale(10),
    width: '100%',
    marginVertical: scale(10),
    padding: scale(5),
  },

  inputContainer: {
    width: '85%',
    alignSelf: 'center',
  },
});

export default styles;
