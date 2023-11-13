import React from 'react';
import { Input } from '@rneui/themed';
import { useTheme } from '@src/theme';
import styles from './BigTextInput.styles';

interface BigTextInputProps {
  placeholderText: string;
  value: string | undefined;
  maxLength?: number;
  onChangeText: (text: string) => void;
}

const BigTextInput = ({ placeholderText, value, onChangeText, maxLength }: BigTextInputProps) => {
  const { colors } = useTheme();
  return (
    <Input
      label={placeholderText}
      value={value}
      style={styles.input}
      maxLength={maxLength ?? 500}
      multiline={true}
      onChangeText={onChangeText}
    />
  );
};

export default BigTextInput;
