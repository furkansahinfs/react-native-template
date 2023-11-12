import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DefaultIcon } from '@src/components';
import styles from './BackButton.styles';

interface BackButtonProps {
  color: string;
}

const BackButton = ({ color }: BackButtonProps) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
      <DefaultIcon
        name="angle-left"
        size={styles.iconSize.height}
        color={color}
        onPress={() => navigation.goBack()}
      />
    </TouchableOpacity>
  );
};
export default BackButton;
