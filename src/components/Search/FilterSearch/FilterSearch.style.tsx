import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderBottomWidth: scale(1),
    marginBottom: scale(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: scale(12),
    flex: 1,
  },
});
