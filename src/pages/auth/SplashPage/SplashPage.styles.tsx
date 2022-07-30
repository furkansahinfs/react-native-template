import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  logo: {
    width: scale(120),
    height: scale(120),
    aspectRatio: 1,
    borderRadius: scale(30),
  },

  headText: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    paddingTop: scale(20),
    fontSize: scale(20),
    color: 'black',
  },

  view: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default styles;
