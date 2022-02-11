import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: { width: '90%' },
  todoStyle: {
    marginVertical: scale(8),
  },
  categoryHeaderStyle: {
    borderBottomWidth: scale(1),
    margin: scale(7),
    flexDirection: 'row',
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
});
