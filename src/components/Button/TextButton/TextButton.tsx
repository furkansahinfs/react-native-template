import React from 'react';
import { Text } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './TextButton.styles';
import { useTheme } from '../../../theme';

interface ButtonProps {
  onPressFunction: () => void;
  text: string;
  hasMarginVertical?: boolean;
  widthFit?: boolean;
}

const TextButton = ({ onPressFunction, text, hasMarginVertical, widthFit }: ButtonProps) => {
  const { colors } = useTheme();
  return (
    <Button
      style={[
        styles.buttonText,
        hasMarginVertical ? styles.marginVertical : {},
        !widthFit ? styles.width : {},
      ]}
      mode="text"
      onPress={onPressFunction}
    >
      <Text style={{ color: colors.text }}>{text}</Text>
    </Button>
  );
};

export default TextButton;
