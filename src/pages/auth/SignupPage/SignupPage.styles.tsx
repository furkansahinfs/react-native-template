import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  mainView: {
    height: '100%',
  },

  welcomeText: {
    margin: scale(30),
    marginHorizontal: '6%',
  },

  welcomeTextView: {
    marginVertical: scale(50),
  },
});

export default styles;
