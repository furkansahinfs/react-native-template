import React from 'react';
import { Button as UIButton } from '@rneui/themed';
import styles from './Button.styles';
import { useTheme } from '../../../theme';

interface ButtonProps {
  onPress: () => void;
  text: string;
  type: 'solid' | 'clear' | 'outline';
  hasMarginVertical?: boolean;
  fit?: boolean;
  iconName?: string;
}

const Button = ({ onPress, text, type, hasMarginVertical, fit, iconName }: ButtonProps) => {
  const { colors } = useTheme();
  return (
    <UIButton
      buttonStyle={[
        styles.button,
        hasMarginVertical && styles.marginVertical,
        !fit && styles.width,
        type === 'solid'
          ? { backgroundColor: colors.button }
          : { borderWidth: 1, borderColor: colors.border },
      ]}
      titleStyle={styles.buttonText}
      type={type}
      icon={iconName ? { name: iconName } : undefined}
      onPress={onPress}>
      {text}
    </UIButton>
  );
};

export default Button;
