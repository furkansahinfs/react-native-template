import React from 'react';
import { KeyboardTypeOptions } from 'react-native';
import { Input } from '@rneui/base';
import { useTheme } from 'src/theme';
import styles from './TextInput.styles';

interface TextInputProps {
  placeholderText: string;
  val: string | undefined;
  keyboardType: KeyboardTypeOptions;
  onChangeText: (text: string) => void;
  secureText: boolean;
  iconName?: string;
  multiline?: boolean;
}

const TextInput = ({
  placeholderText,
  val,
  keyboardType,
  onChangeText,
  secureText,
  iconName,
  multiline,
}: TextInputProps) => {
  const { colors } = useTheme();
  return (
    <Input
      label={placeholderText}
      value={val}
      keyboardType={keyboardType}
      secureTextEntry={secureText}
      multiline={multiline !== undefined ? multiline : false}
      style={styles.input}
      onChangeText={onChangeText}
      leftIcon={{ type: 'font-awesome', name: iconName }}
    />
  );
};

export default TextInput;
