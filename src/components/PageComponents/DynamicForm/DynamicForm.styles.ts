import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  dateTextInput: {
    borderWidth: 1,
    borderRadius: scale(10),
    width: '100%',
    padding: scale(15),
    paddingVertical: scale(20),
    marginBottom: scale(20),
  },

  errorText: {
    marginBottom: scale(10),
    color: 'red',
  },

  inputLabel: {
    marginLeft: scale(10),
    marginBottom: scale(5),
    fontWeight: 'bold',
  },

  selectboxInput: {
    borderWidth: 1,
    borderRadius: scale(10),
    width: '100%',
    marginBottom: scale(20),
    padding: scale(5),
    paddingVertical: scale(10),
  },

  inputContainer: {
    width: '85%',
    alignSelf: 'center',
  },
});

export default styles;
