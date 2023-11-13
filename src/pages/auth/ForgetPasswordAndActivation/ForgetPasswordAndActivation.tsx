import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Card } from '@rneui/themed';
import { BackButton, Button, CustomSafeAreaView, TextInput } from '@src/components';
import { i18next } from '@src/locales';
import { stylesGlobal } from '@src/styles';
import { useTheme } from '@src/theme';
import { send } from './ForgetPasswordAndActivation.helper';
import styles from './ForgetPasswordAndActivation.styles';

interface IForgetPassword {
  route: any;
}
const ForgetPassword = ({ route }: IForgetPassword) => {
  const [email, setEmail] = useState('');
  const [selectedTab, setSelectedTab] = useState(route.params.type);

  const { colors } = useTheme();
  const globalStyles = stylesGlobal(colors);

  /**
   * Return the text style according to selected tab
   */
  function getTextStyle(clickedTab: string) {
    if (selectedTab === clickedTab) {
      return globalStyles.titleSelected;
    } else {
      return globalStyles.titleDisabled;
    }
  }

  /**
   *  Return the tab style according to selected tab
   */
  function getTabStyle(clickedTab: string) {
    if (selectedTab === clickedTab) {
      return globalStyles.segmentTextWrapperSelected;
    } else {
      return globalStyles.segmentTextWrapperDisabled;
    }
  }

  return (
    <CustomSafeAreaView>
      <View style={[styles.mainView, { backgroundColor: colors.background }]}>
        <ScrollView nestedScrollEnabled={true} keyboardShouldPersistTaps={'handled'}>
          <BackButton color={colors.icon} />
          <View style={styles.view}>
            {selectedTab === 'ForgetPassword' && (
              <View style={styles.welcomeText}>
                <Text style={globalStyles.headText}>
                  {i18next
                    .t('pages.forgetPasswordAndActiovationPage.forgetPasswordHead')
                    .toUpperCase()}
                </Text>
                <Text style={globalStyles.bodyText}>
                  {i18next.t('pages.forgetPasswordAndActiovationPage.forgetPasswordBody')}
                </Text>
              </View>
            )}

            {selectedTab === 'NewActivationMail' && (
              <View style={styles.welcomeText}>
                <Text style={globalStyles.headText}>
                  {i18next
                    .t('pages.forgetPasswordAndActiovationPage.newActivationHead')
                    .toUpperCase()}
                </Text>
                <Text style={globalStyles.bodyText}>
                  {i18next.t('pages.forgetPasswordAndActiovationPage.newActivationBody')}
                </Text>
              </View>
            )}

            <Card containerStyle={globalStyles.card}>
              <View style={globalStyles.tabStyles}>
                <TouchableOpacity
                  style={getTabStyle('ForgetPassword')}
                  onPress={() => setSelectedTab('ForgetPassword')}>
                  <Text style={getTextStyle('ForgetPassword')}>
                    {i18next.t('pages.forgetPasswordAndActiovationPage.forgetPassword')}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={getTabStyle('NewActivationMail')}
                  onPress={() => setSelectedTab('NewActivationMail')}>
                  <Text style={getTextStyle('NewActivationMail')}>
                    {i18next.t('pages.forgetPasswordAndActiovationPage.newActivation')}
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <TextInput
                  onChangeText={value => setEmail(value)}
                  iconName={'envelope'}
                  keyboardType={'default'}
                  placeholderText={i18next.t('pages.forgetPasswordAndActiovationPage.email')}
                  secureText={false}
                  val={email}
                />

                <View style={globalStyles.smallMarginTop}>
                  <Button
                    type={'solid'}
                    onPress={async () => await send(email, selectedTab)}
                    text={i18next.t('pages.forgetPasswordAndActiovationPage.send')}
                  />
                </View>
              </View>
            </Card>
          </View>
        </ScrollView>
      </View>
    </CustomSafeAreaView>
  );
};

export default ForgetPassword;
