import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  ImageSections: {
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(5),
    paddingVertical: scale(5),
    justifyContent: 'center',
  },
  images: {
    alignSelf: 'center',
    width: scale(300),
    height: scale(250),
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: scale(3),
  },

  videoStyle: {
    width: scale(350),
    height: scale(250),
    alignSelf: 'center',
  },
});

export default styles;
