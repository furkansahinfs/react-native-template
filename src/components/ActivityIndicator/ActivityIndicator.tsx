import React from 'react';
import { ActivityIndicator } from 'react-native';
import styles from './ActivityIndicator.styles';
import { useTheme } from '../../theme';

interface IIndicator {
  size?: number;
}
const Indicator = ({ size }: IIndicator) => {
  const { colors } = useTheme();
  return <ActivityIndicator style={styles.loading} color={colors.button} size={size} />;
};
export default Indicator;
