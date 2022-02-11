import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  mainView: {
    height: '100%',
  },

  welcomeText: {
    marginBottom: scale(20),
    marginHorizontal: '6%',
  },

  view: {
    marginVertical: scale(100),
  },
});

export default styles;
