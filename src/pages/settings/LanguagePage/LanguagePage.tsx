import React from 'react';
import { Image, Text, TouchableOpacity, SafeAreaView, View } from 'react-native';
import { Images } from '../../../assets';
import { useNavigation } from '@react-navigation/native';
import { adjust } from './LanguagePage.helper';
import styles from './LanguagePage.styles';
import { useTheme } from '../../../theme';

const LanguagePage = ({ route }) => {
  const page = route.params.page;
  const navigation = useNavigation();

  const { colors } = useTheme();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={[styles.view, { backgroundColor: colors.background }]}>
        <TouchableOpacity
          onPress={async () => await adjust('tr-TR', navigation, page)}
          style={styles.touchableOpacity}
        >
          <View>
            <Image source={Images.tr} style={styles.logo} />
            <Text style={[styles.headText, { color: colors.text }]}>Türkçe</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={async () => await adjust('en-US', navigation, page)}
          style={styles.touchableOpacity}
        >
          <Image source={Images.en} style={styles.logo} />
          <Text style={[styles.headText, { color: colors.text }]}>English</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default LanguagePage;
