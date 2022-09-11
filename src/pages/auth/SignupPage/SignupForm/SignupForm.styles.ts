import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  dateTextInput: {
    borderWidth: 1,
    borderRadius: 15,
    width: '100%',
    alignItems: 'flex-start',
    alignContent: 'center',
    alignSelf: 'center',
    padding: scale(17),
    marginVertical: scale(10),
  },

  errorText: {
    marginBottom: scale(10),
    color: 'red',
  },

  genderInput: {
    borderWidth: 1,
    borderRadius: 15,
    width: '100%',
    padding: scale(4),
    paddingHorizontal: scale(8),
    marginVertical: scale(5),
  },

  inputContainer: {
    width: '85%',
    alignSelf: 'center',
  },
});

export default styles;
