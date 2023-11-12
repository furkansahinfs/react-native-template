import React from 'react';
import { Input } from '@rneui/themed';
import { useTheme } from '@src/theme';
import styles from './DisabledTextInput.styles';

interface TextInputProps {
  placeholderText: string;
  value: string;
  iconName: string;
}

const TextInput = ({ placeholderText, value, iconName }: TextInputProps) => {
  const { colors } = useTheme();
  return (
    <Input
      label={placeholderText}
      value={value}
      disabled={true}
      style={styles.input}
      leftIcon={{ type: 'font-awesome', name: iconName }}
    />
  );
};

export default TextInput;
