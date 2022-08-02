import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { BackButton, Button, CustomSafeAreaView, TextInput } from '../../../components';
import { I18N } from '../../../locales';
import { send } from './ForgetPasswordAndActivation.helper';
import styles from './ForgetPasswordAndActivation.styles';
import { stylesGlobal } from '../../../styles/';
import { useTheme } from '../../../theme';

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
    <CustomSafeAreaView
      InnerView={
        <View style={[styles.mainView, { backgroundColor: colors.background }]}>
          <ScrollView nestedScrollEnabled={true} keyboardShouldPersistTaps={'handled'}>
            <BackButton color={colors.icon} />
            <View style={styles.view}>
              {selectedTab === 'ForgetPassword' && (
                <View style={styles.welcomeText}>
                  <Text style={globalStyles.headText}>
                    {I18N.t(
                      'pages.forgetPasswordAndActiovationPage.forgetPasswordHead',
                    ).toUpperCase()}
                  </Text>
                  <Text style={globalStyles.bodyText}>
                    {I18N.t('pages.forgetPasswordAndActiovationPage.forgetPasswordBody')}
                  </Text>
                </View>
              )}

              {selectedTab === 'NewActivationMail' && (
                <View style={styles.welcomeText}>
                  <Text style={globalStyles.headText}>
                    {I18N.t(
                      'pages.forgetPasswordAndActiovationPage.newActivationHead',
                    ).toUpperCase()}
                  </Text>
                  <Text style={globalStyles.bodyText}>
                    {I18N.t('pages.forgetPasswordAndActiovationPage.newActivationBody')}
                  </Text>
                </View>
              )}

              <Card containerStyle={globalStyles.card}>
                <View style={globalStyles.tabStyles}>
                  <TouchableOpacity
                    style={getTabStyle('ForgetPassword')}
                    onPress={() => setSelectedTab('ForgetPassword')}
                  >
                    <Text style={getTextStyle('ForgetPassword')}>
                      {I18N.t('pages.forgetPasswordAndActiovationPage.forgetPassword')}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={getTabStyle('NewActivationMail')}
                    onPress={() => setSelectedTab('NewActivationMail')}
                  >
                    <Text style={getTextStyle('NewActivationMail')}>
                      {I18N.t('pages.forgetPasswordAndActiovationPage.newActivation')}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TextInput
                    func={(value) => setEmail(value)}
                    iconName={'envelope'}
                    keyboardType={'default'}
                    placeholderText={I18N.t('pages.forgetPasswordAndActiovationPage.email')}
                    secureText={false}
                    val={email}
                  />

                  <View style={globalStyles.buttonMargin}>
                    <Button
                      mode={'contained'}
                      onPressFunction={async () => await send(email, selectedTab)}
                      text={I18N.t('pages.forgetPasswordAndActiovationPage.send')}
                    />
                  </View>
                </View>
              </Card>
            </View>
          </ScrollView>
        </View>
      }
    />
  );
};

export default ForgetPassword;
