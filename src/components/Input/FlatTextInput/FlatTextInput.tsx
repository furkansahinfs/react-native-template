import React, { useState } from 'react';
import { KeyboardTypeOptions } from 'react-native';
import { TextInput as NativeTextInput } from 'react-native-paper';
import { useTheme } from '../../../theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './FlatTextInput.styles';

interface FlatTextInputProps {
  placeholderText: string;
  val: string | undefined | null;
  keyboardType: KeyboardTypeOptions;
  func: (text: string) => void;
  secureText: boolean;
  iconName?: string;
  multiline?: boolean;
  length?: number;
}

const FlatTextInput = ({
  placeholderText,
  val,
  keyboardType,
  func,
  secureText,
  iconName,
  multiline,
  length,
}: FlatTextInputProps) => {
  const { colors } = useTheme();
  const [currentValue, setCurrentValue] = useState<string>(val ? val : '');
  return (
    <NativeTextInput
      mode="flat"
      label={placeholderText}
      value={currentValue}
      keyboardType={keyboardType}
      secureTextEntry={secureText}
      maxLength={length !== undefined ? length : 250}
      multiline={multiline !== undefined ? multiline : false}
      theme={{
        colors: {
          background: 'transparent',
          text: colors.text,
          primary: '#7999FD',
          disabled: colors.text,
          placeholder: colors.border,
        },
      }}
      onChangeText={(newValue: string) => setCurrentValue(newValue)}
      onEndEditing={() => func(currentValue)}
      left={
        iconName ? (
          <NativeTextInput.Icon
            name={() => <Icon name={iconName} color={colors.icon} size={styles.iconSize.height} />}
          />
        ) : null
      }
    />
  );
};

export default FlatTextInput;
