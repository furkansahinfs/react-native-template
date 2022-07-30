import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../../theme';
import { DefaultIcon } from '../Icon';
import styles from './Error.styles';

interface ErrorProps {
  errorString: string;
}
const Error = ({ errorString }: ErrorProps) => {
  const { colors } = useTheme();
  return (
    <View style={styles.view}>
      <DefaultIcon name="bug" size={styles.iconSize.height} color={colors.text} />
      <Text style={[styles.textStyle, { color: colors.text }]}> {errorString} </Text>
    </View>
  );
};

export default Error;
