import React from 'react';
import { TextInput as NativeTextInput } from 'react-native-paper';
import { useTheme } from '../../../theme';
import styles from './BigTextInput.styles';

interface BigTextInputProps {
  placeholderText: string;
  val: string | undefined;
  maxLength?: number;
  func: (text: string) => void;
}

const BigTextInput = ({ placeholderText, val, func, maxLength }: BigTextInputProps) => {
  const { colors } = useTheme();
  return (
    <NativeTextInput
      mode="outlined"
      label={placeholderText}
      value={val}
      style={styles.input}
      maxLength={maxLength !== undefined ? maxLength : 500}
      multiline={true}
      theme={{
        colors: {
          background: colors.textInput,
          text: colors.text,
          primary: '#7999FD',
          placeholder: colors.border,
        },
        roundness: 8,
      }}
      onChangeText={func}
    />
  );
};

export default BigTextInput;
