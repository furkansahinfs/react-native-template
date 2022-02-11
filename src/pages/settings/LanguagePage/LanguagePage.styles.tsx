import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  headText: {
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: 'normal',
    paddingTop: '4%',
    fontSize: scale(20),
    color: 'white',
  },

  logo: {
    width: scale(200),
    height: scale(150),
    borderColor: 'white',
    borderWidth: 2,
    marginVertical: scale(50),
    borderRadius: scale(5),
    alignSelf: 'center',
    justifyContent: 'center',
  },

  view: {
    flex: 1,
    backgroundColor: '#3454fc',
  },
});

export default styles;
