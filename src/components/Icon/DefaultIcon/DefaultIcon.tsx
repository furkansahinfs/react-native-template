import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../Icon.styles';

interface IconProps {
  onPressFunction?: () => void;
  name: string;
  color: string;
  size?: number;
}

const DefaultIconView = ({ onPressFunction, name, color, size }: IconProps) => {
  return (
    <TouchableOpacity onPress={onPressFunction}>
      <Icon
        name={name}
        size={size ? size : styles.iconStyle.height}
        color={color}
        onPress={onPressFunction}
      />
    </TouchableOpacity>
  );
};
export default DefaultIconView;
