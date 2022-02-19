import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  headText: {
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: scale(20),
  },

  logo: {
    width: scale(200),
    height: scale(150),
    borderRadius: scale(40),
    alignSelf: 'center',
    justifyContent: 'center',
  },

  safeAreaView: {
    flex: 1,
    display: 'flex',
  },

  touchableOpacity: {
    margin: scale(30),
  },

  view: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    flexWrap: 'wrap',
  },
});

export default styles;
