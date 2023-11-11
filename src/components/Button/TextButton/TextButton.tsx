import React from 'react';
import { Text } from 'react-native';
import { Button } from '@rneui/base';
import styles from './TextButton.styles';
import { useTheme } from '../../../theme';

interface ButtonProps {
  onPress: () => void;
  text: string;
  hasMarginVertical?: boolean;
  widthFit?: boolean;
}

const TextButton = ({ onPress, text, hasMarginVertical, widthFit }: ButtonProps) => {
  const { colors } = useTheme();
  return (
    <Button
      style={[
        styles.buttonText,
        hasMarginVertical ? styles.marginVertical : {},
        !widthFit ? styles.width : {},
      ]}
      type="outline"
      onPress={onPress}>
      <Text style={{ color: colors.text }}>{text}</Text>
    </Button>
  );
};

export default TextButton;
