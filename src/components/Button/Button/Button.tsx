import React from 'react';
import { Button as UIButton } from '@rneui/base';
import styles from './Button.styles';
import { useTheme } from '../../../theme';

interface ButtonProps {
  onPress: () => void;
  text: string;
  type: 'solid' | 'clear' | 'outline';
  hasMarginVertical?: boolean;
  widthFit?: boolean;
}

const Button = ({ onPress, text, type, hasMarginVertical, widthFit }: ButtonProps) => {
  const { colors } = useTheme();
  return (
    <UIButton
      style={[
        styles.button,
        hasMarginVertical ? styles.marginVertical : {},
        !widthFit ? styles.width : {},
        type === 'solid'
          ? { backgroundColor: colors.button }
          : { borderWidth: 1, borderColor: colors.border },
      ]}
      type={type}
      onPress={onPress}>
      {text.toLocaleLowerCase('TR')}
    </UIButton>
  );
};

export default Button;
