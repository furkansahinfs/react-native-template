import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/base';
import { useTheme } from 'src/theme';
import styles from './Icon.styles';

interface IconProps {
  name: string;
  size?: number;
  onPress?: () => void;
}

const IconView = ({ name, onPress, size }: IconProps) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity onPress={onPress !== undefined ? onPress : () => null}>
      <Icon
        name={name}
        size={size ? size : styles.iconStyle.height}
        style={styles.button}
        color={colors.icon}
      />
    </TouchableOpacity>
  );
};

export default IconView;
