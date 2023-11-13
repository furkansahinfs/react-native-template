import React from 'react';
import { KeyboardTypeOptions } from 'react-native';
import { Input } from '@rneui/themed';
import { useTheme } from '@src/theme';
import styles from './TextInput.styles';

interface TextInputProps {
  placeholderText: string;
  value: string | undefined;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  secureText?: boolean;
  iconName?: string;
  multiline?: boolean;
}

const TextInput = ({
  placeholderText,
  value,
  onChangeText,
  keyboardType = 'default',
  secureText = false,
  iconName,
  multiline,
}: TextInputProps) => {
  const { colors } = useTheme();
  return (
    <Input
      placeholder={placeholderText}
      value={value}
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
