import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { useTheme } from '../../../theme';
import styles from './CustomSafeAreaView.style';

interface CustomSafeAreaViewProps {
  InnerView: React.ReactNode;
  extraStyle?: any;
  secondBackgroundColor?: boolean;
}
const CustomSafeAreaView = ({
  InnerView,
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
      {InnerView}
    </SafeAreaView>
  );
};

export default CustomSafeAreaView;
