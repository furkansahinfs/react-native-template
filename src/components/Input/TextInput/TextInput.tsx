import React from 'react';
import { KeyboardTypeOptions } from 'react-native';
import { Input } from '@rneui/themed';
import { useTheme } from '@src/theme';
import styles from './TextInput.styles';

interface TextInputProps {
  placeholderText: string;
  value: string | undefined;
  onChangeText: (text: string) => void;
  label?: string;
  keyboardType?: KeyboardTypeOptions;
  secureText?: boolean;
  iconName?: string;
  multiline?: boolean;
  editable?: boolean;
  extraInputContainerStyle?: any;
  extraInputStyle?: any;
  extraStyle?: any;
}

const TextInput = ({
  placeholderText,
  value,
  onChangeText,
  label,
  keyboardType = 'default',
  secureText = false,
  iconName,
  multiline,
  editable,
  extraInputContainerStyle,
  extraInputStyle,
  extraStyle,
}: TextInputProps) => {
  const { colors } = useTheme();
  return (
    <Input
      placeholder={placeholderText}
      label={label}
      value={value}
      keyboardType={keyboardType}
      secureTextEntry={secureText}
      editable={editable}
      multiline={multiline ?? false}
      style={[styles.input, extraStyle]}
      labelStyle={[styles.label, { color: colors.text }]}
      inputStyle={[{ color: colors.text }, extraInputStyle]}
      placeholderTextColor={colors.text}
      inputContainerStyle={[
        styles.inputContainer,
        {
          borderColor: colors.textInputBorder,
          backgroundColor: colors.textInput,
        },
        extraInputContainerStyle
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
