import { StyleSheet } from 'react-native';
import { scale, moderateScale } from 'react-native-size-matters';
const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: moderateScale(50),
    paddingHorizontal: scale(10),
    paddingVertical: scale(3),
    zIndex: 1,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    marginHorizontal: scale(10),
  },
  title: {
    fontSize: moderateScale(18),
    color: 'white',
  },
  instance: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    alignSelf: 'stretch',

    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapperForLogout: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTitle: {
    fontSize: scale(12),
    marginTop: scale(2),
    color: 'gray',
    marginBottom: scale(2),
  },
});
export default styles;
