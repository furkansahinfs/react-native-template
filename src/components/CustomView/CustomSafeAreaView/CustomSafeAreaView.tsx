import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { useTheme } from '@src/theme';
import styles from './CustomSafeAreaView.style';

interface CustomSafeAreaViewProps {
  children: React.ReactNode;
  extraStyle?: any;
  secondBackgroundColor?: boolean;
}
const CustomSafeAreaView = ({
  children,
  extraStyle,
  secondBackgroundColor,
}: CustomSafeAreaViewProps) => {
  const { colors, dark } = useTheme();
  const backColor =
    secondBackgroundColor !== undefined && secondBackgroundColor
      ? colors.background2
      : colors.background;
  return (
    <SafeAreaView style={[styles.safeAreaView, { backgroundColor: backColor }, extraStyle]}>
      <StatusBar backgroundColor={backColor} barStyle={dark ? 'light-content' : 'dark-content'} />
      {children}
    </SafeAreaView>
  );
};

export default CustomSafeAreaView;
