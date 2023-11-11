import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import styles from './BackButton.styles';

interface BackButtonProps {
  color: string;
}

const BackButton = ({ color }: BackButtonProps) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
      <Icon name="angle-left" size={styles.iconSize.height} color={color} />
    </TouchableOpacity>
  );
};
export default BackButton;
