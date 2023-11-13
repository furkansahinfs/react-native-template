import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Images, LANGUAGE } from '@src/assets';
import { CustomSafeAreaView } from '@src/components';
import { useTheme } from '@src/theme';
import { adjust } from './LanguagePage.helper';
import styles from './LanguagePage.styles';

interface ILanguagePage {
  route: any;
}
const LanguagePage = ({ route }: ILanguagePage) => {
  const page = route.params.page;
  const navigation = useNavigation();

  const { colors } = useTheme();

  return (
    <CustomSafeAreaView>
      <View style={[styles.view, { backgroundColor: colors.background }]}>
        <TouchableOpacity
          onPress={async () => await adjust(LANGUAGE.TR, navigation, page)}
          style={styles.touchableOpacity}>
          <View>
            <Image source={Images.tr} style={styles.logo} />
            <Text style={[styles.headText, { color: colors.text }]}>Türkçe</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={async () => await adjust(LANGUAGE.EN, navigation, page)}
          style={styles.touchableOpacity}>
          <Image source={Images.en} style={styles.logo} />
          <Text style={[styles.headText, { color: colors.text }]}>English</Text>
        </TouchableOpacity>
      </View>
    </CustomSafeAreaView>
  );
};
export default LanguagePage;
