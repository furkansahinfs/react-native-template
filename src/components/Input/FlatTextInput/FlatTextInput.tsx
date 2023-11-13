import React, { useState } from 'react';
import { KeyboardTypeOptions } from 'react-native';
import { Input } from '@rneui/themed';
import { useTheme } from '@src/theme';
import styles from './FlatTextInput.styles';

interface FlatTextInputProps {
  placeholderText: string;
  value: string | undefined | null;
  onChangeText: (text: string) => void;
  secureText: boolean;
  keyboardType: KeyboardTypeOptions;
  iconName?: string;
  multiline?: boolean;
  length?: number;
}

const FlatTextInput = ({
  placeholderText,
  value,
  onChangeText,
  keyboardType = 'default',
  secureText = false,
  iconName,
  multiline,
  length,
}: FlatTextInputProps) => {
  const { colors } = useTheme();
  const [currentValue, setCurrentValue] = useState<string>(value ?? '');
  return (
    <Input
      label={placeholderText}
      value={currentValue}
      keyboardType={keyboardType}
      secureTextEntry={secureText}
      maxLength={length ?? 250}
      multiline={multiline ?? false}
      onChangeText={(newValue: string) => setCurrentValue(newValue)}
      onEndEditing={() => onChangeText(currentValue)}
      leftIcon={{ type: 'font-awesome', name: iconName }}
    />
  );
};

export default FlatTextInput;
