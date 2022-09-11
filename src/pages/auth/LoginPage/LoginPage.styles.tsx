import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  errorText: {
    marginBottom: scale(10),
    color: 'red',
  },

  forgetPasswordAndActivation: {
    fontStyle: 'normal',
    textDecorationLine: 'underline',
    fontWeight: 'normal',
    alignSelf: 'center',
    textAlign: 'center',
    marginVertical: '1%',
    fontSize: scale(14),
  },

  inputContainer: {
    width: '85%',
    alignSelf: 'center',
  },

  mainView: {
    height: '100%',
  },

  welcomeText: {
    marginVertical: scale(30),
    marginHorizontal: '6%',
  },

  view: {
    marginVertical: scale(50),
  },
});

export default styles;
