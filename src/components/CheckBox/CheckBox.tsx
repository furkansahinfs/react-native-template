import React from 'react';
import { CheckBox as NativeCheckBox } from '@rneui/base';
import styles from './CheckBox.styles';
import { useTheme } from '../../theme';

interface CheckboxProps {
  onPress: () => void;
  checked: boolean;
  title?: string;
  widthFit?: boolean;
  extraStyle?: any;
  right?: boolean;
}

const CheckBox = ({ onPress, checked, title, widthFit, extraStyle, right }: CheckboxProps) => {
  const { colors } = useTheme();
  return (
    <NativeCheckBox
      title={title}
      right={right}
      textStyle={{ color: colors.text }}
      containerStyle={[
        styles.box,
        { borderColor: colors.border },
        widthFit ? {} : styles.widthAll,
        extraStyle,
      ]}
      checked={checked}
      onPress={onPress}
    />
  );
};

export default CheckBox;
