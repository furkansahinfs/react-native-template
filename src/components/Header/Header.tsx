import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'src/theme';
import styles from './Header.styles';
import { BackButton } from '../Button';

const Left = (colors: any) => {
  return (
    <View>
      <BackButton color={colors.text} />
    </View>
  );
};

interface IRight {
  rightIcon: React.ReactNode;
  onRightIconPress: () => void;
}

const Right = ({ rightIcon, onRightIconPress }: IRight) => {
  return (
    <TouchableOpacity
      activeOpacity={rightIcon ? 0.5 : 1}
      style={styles.iconWrapper}
      onPress={() => (rightIcon ? onRightIconPress : null)}>
      {rightIcon}
    </TouchableOpacity>
  );
};

interface IHeader {
  back?: boolean;
  title?: string;
  subtitle?: string;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
}

const Header = ({ back, title, subtitle, rightIcon, onRightIconPress }: IHeader) => {
  const { colors } = useTheme();

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
        {rightIcon && <Right onRightIconPress={() => onRightIconPress} rightIcon={rightIcon} />}
      </View>
    </View>
  );
};

export default Header;
