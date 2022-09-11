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

  communicationPreferencesHeader: {
    fontWeight: 'bold',
    width: '85%',
    fontSize: scale(12),
    alignSelf: 'center',
    justifyContent: 'center',
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
    width: '85%',
    alignSelf: 'center',
  },

  mainView: {
    marginTop: scale(10),
  },
});

export default styles;
