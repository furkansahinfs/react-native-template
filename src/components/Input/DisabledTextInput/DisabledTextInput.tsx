import React from 'react';
import { TextInput as NativeTextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTheme } from '../../../theme';
import styles from './DisabledTextInput.styles';

interface TextInputProps {
  placeholderText: string;
  val: string;
  iconName: string;
}

const TextInput = ({ placeholderText, val, iconName }: TextInputProps) => {
  const { colors } = useTheme();
  return (
    <NativeTextInput
      mode="outlined"
      label={placeholderText}
      value={val}
      disabled={true}
      style={styles.input}
      theme={{
        colors: {
          background: colors.textInput,
          text: colors.text,
          primary: '#7999FD',
          placeholder: '#9297a8',
          disabled: colors.border,
        },
        roundness: 8,
      }}
      left={
        <NativeTextInput.Icon name={() => <Icon name={iconName} color="#7999FD" size={13} />} />
      }
    />
  );
};

export default TextInput;
