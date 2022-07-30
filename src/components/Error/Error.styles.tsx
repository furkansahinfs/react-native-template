import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconSize: {
    height: scale(50),
  },
  textStyle: {
    fontSize: scale(17),
    padding: scale(10),
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  view: {
    alignItems: 'center',
  },
});

export default styles;
