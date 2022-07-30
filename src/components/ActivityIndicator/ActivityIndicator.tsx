import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { useTheme } from '../../theme';
import styles from './ActivityIndicator.styles';

interface IIndicator {
  size?: number;
}
const Indicator = ({ size }: IIndicator) => {
  const { colors } = useTheme();
  return <ActivityIndicator style={styles.loading} color={colors.button} size={size} />;
};
export default Indicator;
