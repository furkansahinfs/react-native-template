import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { useTheme } from '../../theme';
import styles from './ActivityIndicator.styles';

const Indicator = () => {
  const { colors } = useTheme();
  return <ActivityIndicator style={styles.loading} color={colors.button} />;
};
export default Indicator;
