import React from 'react';
import { Input } from '@rneui/base';
import { useTheme } from 'src/theme';
import styles from './BigTextInput.styles';

interface BigTextInputProps {
  placeholderText: string;
  val: string | undefined;
  maxLength?: number;
  onChangeText: (text: string) => void;
}

const BigTextInput = ({ placeholderText, val, onChangeText, maxLength }: BigTextInputProps) => {
  const { colors } = useTheme();
  return (
    <Input
      label={placeholderText}
      value={val}
      style={styles.input}
      maxLength={maxLength !== undefined ? maxLength : 500}
      multiline={true}
      onChangeText={onChangeText}
    />
  );
};

export default BigTextInput;
