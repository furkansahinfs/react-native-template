import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';
import {
  ActivityIndicator,
  Button,
  CustomSafeAreaView,
  TextButton,
  TextInput,
} from '../../../components/';
import { I18N } from '../../../locales';
import { login } from './LoginPage.helper';
import styles from './LoginPage.styles';
import { stylesGlobal } from '../../../styles/';
import { useTheme } from '../../../theme';
import { navigate } from '../../../navigation';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLoading, setShowLoading] = useState(false);

  const { colors } = useTheme();
  const globalStyles = stylesGlobal(colors);

  async function loginClick() {
    setShowLoading(true);
    await login(email, password);
    setShowLoading(false);
  }

  return (
    <CustomSafeAreaView
      InnerView={
        <View style={[styles.mainView, { backgroundColor: colors.background }]}>
          <ScrollView nestedScrollEnabled={true} keyboardShouldPersistTaps={'handled'}>
            <View style={styles.view}>
              <View style={styles.welcomeText}>
                <Text style={globalStyles.headText}>
                  {I18N.t('pages.loginPage.hello').toUpperCase()}
                </Text>
                <Text style={globalStyles.bodyText}>{I18N.t('pages.loginPage.loginBody')}</Text>
              </View>

              <Card containerStyle={globalStyles.card}>
                <View>
                  <TextInput
                    func={(value) => setEmail(value)}
                    iconName={'envelope'}
                    keyboardType={'default'}
                    placeholderText={I18N.t('pages.loginPage.email')}
                    secureText={false}
                    val={email}
                  />

                  <TextInput
                    func={(value) => setPassword(value)}
                    iconName={'key'}
                    keyboardType={'default'}
                    placeholderText={I18N.t('pages.loginPage.password')}
                    secureText={true}
                    val={password}
                  />

                  <Text
                    style={[styles.forgetPasswordAndActivation, { color: colors.text }]}
                    onPress={() =>
                      navigate('ForgetPasswordAndActivation', {
                        type: 'ForgetPassword',
                      })
                    }
                  >
                    {I18N.t('pages.loginPage.forgetPassword')}
                  </Text>

                  <Text
                    style={[styles.forgetPasswordAndActivation, { color: colors.text }]}
                    onPress={() =>
                      navigate('ForgetPasswordAndActivation', {
                        type: 'NewActivationMail',
                      })
                    }
                  >
                    {I18N.t('pages.loginPage.newActivation')}
                  </Text>
                  <View style={globalStyles.buttonMargin}>
                    <Button
                      mode={'contained'}
                      onPressFunction={async () => await loginClick()}
                      text={I18N.t('pages.loginPage.loginButton')}
                    />
                  </View>
                  <View style={globalStyles.buttonMargin}>
                    <TextButton
                      onPressFunction={() => navigate('Signup')}
                      text={I18N.t('pages.loginPage.signupButton')}
                    />
                  </View>
                </View>
              </Card>
            </View>
          </ScrollView>
          {showLoading && <ActivityIndicator />}
        </View>
      }
    />
  );
};

export default LoginPage;
