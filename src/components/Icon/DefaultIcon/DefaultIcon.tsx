import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../Icon.styles';

interface IconProps {
  onPressFunction: () => void;
  name: string;
  color: string;
}

const DefaultIconView = ({ onPressFunction, name, color }: IconProps) => {
  return (
    <TouchableOpacity onPress={onPressFunction}>
      <Icon name={name} size={styles.iconStyle.height} color={color} />
    </TouchableOpacity>
  );
};
export default DefaultIconView;
