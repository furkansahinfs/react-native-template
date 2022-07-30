import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  entityLabelView: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    padding: scale(15),
    marginVertical: scale(5),
    borderRadius: scale(20),
    shadowOffset: {
      width: 0,
      height: scale(3),
    },
    elevation: 3,
    zIndex: 1,
    shadowOpacity: 0.27,
  },

  labelHead: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: scale(13),
  },

  labelIcon: {
    width: '10%',
    alignSelf: 'center',
  },

  labelInfo: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: scale(11),
  },

  labelView: {
    flexDirection: 'column',
    width: '90%',
  },

  textBox: {
    marginLeft: '5%',
    marginRight: '2.5%',
    width: '70%',
    alignSelf: 'center',
  },
});

export default styles;
