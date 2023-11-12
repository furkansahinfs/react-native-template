import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';
import styles from '../Icon.styles';

interface IconProps {
  onPress?: () => void;
  name: string;
  color: string;
  size?: number;
}

const DefaultIconView = ({ onPress, name, color, size }: IconProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon
        type="font-awesome"
        name={name}
        size={size ?? styles.iconStyle.height}
        color={color}
        onPress={onPress}
      />
    </TouchableOpacity>
  );
};
export default DefaultIconView;
