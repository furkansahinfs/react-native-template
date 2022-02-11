import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const makeStyles = (colors: any) =>
  StyleSheet.create({
    bodyText: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: scale(14),
      color: colors.text,
    },

    buttonMargin: {
      marginTop: scale(10),
    },

    card: {
      backgroundColor: colors.card,
      justifyContent: 'center',
      paddingVertical: '10%',
      borderRadius: scale(15),
      shadowColor: 'grey',
      shadowOffset: {
        width: 0,
        height: scale(3),
      },
      elevation: 20,
      zIndex: 1,
      shadowOpacity: 0.27,
    },

    center: {
      alignSelf: 'center',
    },

    centerText: {
      alignSelf: 'center',
      textAlign: 'center',
      color: colors.text,
    },

    entityLabelView: {
      flexDirection: 'row',
      width: '90%',
      alignSelf: 'center',
      padding: '5%',
      marginVertical: '4%',
      borderRadius: scale(30),
      borderWidth: 1,
      borderColor: colors.text,
      shadowOffset: {
        width: 0,
        height: scale(3),
      },
      elevation: 10,
      zIndex: 1,
      shadowOpacity: 0.27,
    },

    flexible: {
      flex: 1,
    },

    headText: {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: scale(20),
      color: colors.text,
    },

    iconSize: {
      height: scale(15),
    },

    labelSmaller: {
      fontStyle: 'italic',
      fontWeight: 'normal',
      fontSize: scale(12),
      color: colors.text,
    },

    labelBigger: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: scale(15),
      color: colors.text,
    },

    modalView: {
      backgroundColor: colors.card,
      padding: scale(5),
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
    },

    rect: {
      marginVertical: '1%',
      height: scale(1),
      backgroundColor: '#C6C6C6',
    },

    row: {
      flexDirection: 'row',
    },

    segmentTextWrapperDisabled: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    segmentTextWrapperSelected: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderColor: '#7999FD',
    },

    tabStyles: {
      flexDirection: 'row',
      marginBottom: scale(15),
    },

    titleDisabled: {
      alignItems: 'center',
      alignContent: 'center',
      fontSize: scale(13),
      color: colors.text,
    },

    titleSelected: {
      alignItems: 'center',
      alignContent: 'center',
      fontWeight: 'bold',
      fontSize: scale(13),
      color: '#7999FD',
    },
  });

export default makeStyles;
