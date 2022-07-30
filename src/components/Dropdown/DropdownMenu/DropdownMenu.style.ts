import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  categoryHeaderStyle: {
    borderBottomWidth: scale(1),
    margin: scale(7),
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  categoryNameStyle: {
    marginTop: scale(5),
    fontSize: scale(17),
    fontWeight: 'bold',
    alignItems: 'flex-start',
    flex: 1,
  },

  choiceStyle: {
    fontSize: scale(16),
    marginHorizontal: scale(20),
    borderBottomWidth: 1,
    marginVertical: scale(2),
    paddingVertical: scale(2),
    borderColor: 'white',
  },

  multipleChoiceContainer: {
    flexDirection: 'row',
    marginVertical: scale(2),
    paddingVertical: scale(2),
  },

  searchBarContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: scale(20),
  },
  searchBarText: {
    fontSize: scale(14),
    flex: 1,
  },

  titleView: {
    flexDirection: 'row',
  },
});
