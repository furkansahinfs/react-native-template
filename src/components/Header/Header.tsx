import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Header.styles';
import { BackButtonInHeader } from '..';
import { useTheme } from '../../theme';

interface IHeader {
  back?: boolean;
  title?: string;
  subtitle?: string;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
}

const Header = ({ back, title, subtitle, rightIcon, onRightIconPress }: IHeader) => {
  const { colors } = useTheme();

  const Left = () => {
    return (
      <View>
        <BackButtonInHeader color={colors.text} />
      </View>
    );
  };

  const Right = () => {
    return (
      <TouchableOpacity
        activeOpacity={rightIcon ? 0.5 : 1}
        style={styles.iconWrapper}
        onPress={() => (rightIcon ? onRightIconPress : null)}
      >
        {rightIcon}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.instance}>
        {back && <Left />}
        <View style={styles.body}>
          {title && (
            <Text numberOfLines={1} style={[styles.title, { color: colors.text }]}>
              {title}
            </Text>
          )}
          {subtitle && <Text style={styles.subTitle}> {subtitle} </Text>}
        </View>
        {rightIcon && <Right />}
      </View>
    </View>
  );
};

export default Header;
