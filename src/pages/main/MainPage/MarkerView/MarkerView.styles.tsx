import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  clickedMarker: {
    backgroundColor: 'white',
    padding: scale(15),
    paddingRight: 0,
    alignSelf: 'center',
    borderRadius: scale(100),
    borderWidth: scale(1),
    borderColor: 'orange',
  },

  parkIcon: {
    height: scale(57),
    width: scale(45),
  },

  row: {
    flexDirection: 'row',
    paddingBottom: scale(20),
  },

  slotText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'flex-end',
    left: scale(-10),
    bottom: scale(-10),
    width: scale(30),
    height: scale(30),
    borderRadius: scale(15),
    fontSize: scale(15),
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: 'orange',
  },
});

export default styles;
