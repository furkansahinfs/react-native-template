import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  editIcon: {
    top: scale(20),
  },

  icon: {
    zIndex: 1,
    width: '100%',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: scale(5),
    borderRadius: scale(10),
  },

  image: {
    width: scale(150),
    height: scale(150),
    aspectRatio: 1,
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: scale(5),
    borderRadius: scale(40),
  },

  imageView: {
    alignSelf: 'center',
    marginVertical: scale(20),
  },

  profileDataView: {
    flexGrow: 1,
    borderTopRightRadius: scale(30),
    borderTopLeftRadius: scale(30),
    paddingTop: scale(21),
  },

  rightIcons: {
    position: 'absolute',
    top: scale(10),
    right: scale(10),
  },

  saveIcon: {
    bottom: scale(20),
  },

  scrollView: {
    flex: 1,
    height: '100%',
  },

  textInput: {
    marginHorizontal: '3%',
  },

  theme: {
    flexDirection: 'row',
    alignSelf: 'center',
    borderWidth: 0.5,
    borderRadius: scale(10),
    padding: scale(10),
    marginVertical: scale(20),
  },

  topView: {
    backgroundColor: '#3454fc',
  },

  safeAreaView: {
    flex: 1,
  },
});

export default styles;
