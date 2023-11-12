import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';
import styles from './Icon.styles';

interface IconProps {
  name: string;
  size?: number;
  onPress?: () => void;
}

const IconView = ({ name, onPress, size }: IconProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon
        type="font-awesome"
        name={name}
        size={size ?? styles.iconStyle.height}
        style={styles.button}
        color={'white'}
      />
    </TouchableOpacity>
  );
};

export default IconView;
