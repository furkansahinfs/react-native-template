import React from 'react';
import { KeyboardTypeOptions } from 'react-native';
import { Input } from '@rneui/themed';
import { useTheme } from '@src/theme';
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
      placeholder={placeholderText}
      value={val}
      keyboardType={keyboardType}
      secureTextEntry={secureText}
      multiline={multiline ?? false}
      style={styles.input}
      labelStyle={[styles.label, { color: colors.text }]}
      inputStyle={[{ color: colors.text }]}
      placeholderTextColor={colors.text}
      inputContainerStyle={[
        styles.inputContainer,
        {
          borderColor: colors.textInputBorder,
          backgroundColor: colors.textInput,
        },
      ]}
      onChangeText={onChangeText}
      leftIcon={{
        type: 'font-awesome',
        name: iconName,
        size: styles.iconSize.height,
        color: colors.icon,
        style: styles.iconStyle,
      }}
      underlineColorAndroid={'transparent'}
    />
  );
};

export default TextInput;
