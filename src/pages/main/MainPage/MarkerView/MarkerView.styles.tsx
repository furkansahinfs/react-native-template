import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  parkIcon: {
    height: Math.sqrt(window.width * window.fontScale) * 2,
    width: Math.sqrt(window.width * window.fontScale),
    resizeMode: 'contain',
  },

  slotText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'flex-end',
    marginLeft: 1,
    paddingVertical: 1,
    paddingHorizontal: 5,
    fontSize: 11,
    fontWeight: 'bold',
    backgroundColor: 'orange',
  },
});

export default styles;
