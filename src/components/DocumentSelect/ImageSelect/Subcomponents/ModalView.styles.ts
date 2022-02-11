import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  iconStyle: {
    margin: '5%',
    alignItems: 'center',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContainerView: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'lightslategrey',
    padding: verticalScale(30),
    borderRadius: scale(50),
  },
});

export default styles;
