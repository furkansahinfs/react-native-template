import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  bodyText: {
    fontWeight: '400',
  },

  mainView: {
    height: '100%',
  },

  nextIcon: {
    backgroundColor: 'blue',
    alignSelf: 'flex-end',
    right: '5%',
    textAlign: 'center',
    width: scale(50),
    height: scale(50),
    iconSize: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    padding: scale(15),
    borderRadius: scale(50),
  },

  scrollView: {
    paddingVertical: scale(15),
  },

  textView: {
    width: '85%',
    alignSelf: 'center',
    marginHorizontal: scale(15),
    marginBottom: scale(10),
    marginTop: scale(40),
  },
});

export default styles;
