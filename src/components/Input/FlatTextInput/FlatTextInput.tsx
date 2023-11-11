import React, { useState } from 'react';
import { KeyboardTypeOptions } from 'react-native';
import { Input } from '@rneui/base';
import { useTheme } from 'src/theme';
import styles from './FlatTextInput.styles';

interface FlatTextInputProps {
  placeholderText: string;
  val: string | undefined | null;
  keyboardType: KeyboardTypeOptions;
  onChangeText: (text: string) => void;
  secureText: boolean;
  iconName?: string;
  multiline?: boolean;
  length?: number;
}

const FlatTextInput = ({
  placeholderText,
  val,
  keyboardType,
  onChangeText,
  secureText,
  iconName,
  multiline,
  length,
}: FlatTextInputProps) => {
  const { colors } = useTheme();
  const [currentValue, setCurrentValue] = useState<string>(val ? val : '');
  return (
    <Input
      label={placeholderText}
      value={currentValue}
      keyboardType={keyboardType}
      secureTextEntry={secureText}
      maxLength={length !== undefined ? length : 250}
      multiline={multiline !== undefined ? multiline : false}
      onChangeText={(newValue: string) => setCurrentValue(newValue)}
      onEndEditing={() => onChangeText(currentValue)}
      leftIcon={{ type: 'font-awesome', name: iconName }}
    />
  );
};

export default FlatTextInput;
