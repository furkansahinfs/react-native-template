import React from 'react';
import { CheckBox as NativeCheckBox } from '@rneui/themed';
import styles from './CheckBox.styles';
import { useTheme } from '../../theme';

interface CheckboxProps {
  onPress: () => void;
  checked: boolean;
  title?: string;
  fit?: boolean;
  extraStyle?: any;
  right?: boolean;
}

const CheckBox = ({ onPress, checked, title, fit, extraStyle, right }: CheckboxProps) => {
  const { colors } = useTheme();
  return (
    <NativeCheckBox
      title={title}
      right={right}
      textStyle={{ color: colors.text }}
      containerStyle={[
        styles.box,
        { borderColor: colors.border },
        fit ? {} : styles.widthAll,
        extraStyle,
      ]}
      iconType="font-awesome"
      checkedIcon="check-circle"
      uncheckedIcon="check-circle-o"
      checked={checked}
      onPress={onPress}
    />
  );
};

export default CheckBox;
