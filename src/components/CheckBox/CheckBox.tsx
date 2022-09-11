import React from 'react';
import { CheckBox as NativeCheckBox } from 'react-native-elements';
import { useTheme } from '../../theme';
import styles from './CheckBox.styles';

interface CheckboxProps {
  onPressFunction: () => void;
  checked: boolean;
  title?: string;
  widthFit?: boolean;
  extraStyle?: any;
  right?: boolean;
}

const CheckBox = ({
  onPressFunction,
  checked,
  title,
  widthFit,
  extraStyle,
  right,
}: CheckboxProps) => {
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
      onPress={onPressFunction}
    />
  );
};

export default CheckBox;
