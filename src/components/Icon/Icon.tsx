import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '../../theme';
import styles from './Icon.styles';

interface IconProps {
  onPressFunction?: () => void;
  name: string;
  size?: number;
}

const IconView = ({ onPressFunction, name, size }: IconProps) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity onPress={onPressFunction !== undefined ? onPressFunction : () => null}>
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
