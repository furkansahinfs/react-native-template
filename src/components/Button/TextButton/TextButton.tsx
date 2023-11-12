import React from 'react';
import { Text } from 'react-native';
import { Button } from '@rneui/themed';
import styles from './TextButton.styles';
import { useTheme } from '../../../theme';

interface ButtonProps {
  onPress: () => void;
  text: string;
  hasMarginVertical?: boolean;
  hasBorder?: boolean;
  fit?: boolean;
}

const TextButton = ({ onPress, text, hasMarginVertical, hasBorder = false, fit }: ButtonProps) => {
  const { colors } = useTheme();
  return (
    <Button
      buttonStyle={[
        styles.button,
        hasMarginVertical && styles.marginVertical,
        !fit && styles.width,
        hasBorder && { borderWidth: 1, borderColor: colors.border },
      ]}
      titleStyle={[styles.buttonText, { color: colors.text }]}
      type="outline"
      onPress={onPress}>
      <Text style={{ color: colors.text }}>{text}</Text>
    </Button>
  );
};

export default TextButton;
