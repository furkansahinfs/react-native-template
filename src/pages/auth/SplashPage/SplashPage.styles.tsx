import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  logo: {
    width: '20%',
    height: '20%',
    backgroundColor: 'white',
    borderRadius: scale(30),
    alignSelf: 'center',
    justifyContent: 'center',
  },

  headText: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    paddingTop: '4%',
    fontSize: scale(20),
    color: 'white',
  },

  view: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3454fc',
  },
});

export default styles;
