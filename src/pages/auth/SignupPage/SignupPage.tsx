import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { ActivityIndicator, BackButton, Button, CustomSafeAreaView, TextInput } from '../../../components';
import { I18N } from '../../../locales';
import { register, validateSignupInputs } from './SignupPage.helper';
import styles from './SignupPage.styles';
import { stylesGlobal } from '../../../styles/';
import { useTheme } from '../../../theme';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showLoading, setShowLoading] = useState(false);

  const { colors } = useTheme();
  const globalStyles = stylesGlobal(colors);

  /**
   * If info inputs are validated, connect to the server and signup user
   */
  async function signUp() {
    const areSignupInputsValid = validateSignupInputs(email, password, confirmPassword);
    setShowLoading(true);
    if (areSignupInputsValid) {
      const json = {
        email,
        password,
      };
      await register(json);
    }
    setShowLoading(false);
  }

  return (
    <CustomSafeAreaView InnerView={
      <View style={[styles.mainView, { backgroundColor: colors.background }]}>
        <ScrollView nestedScrollEnabled={true} keyboardShouldPersistTaps={'handled'}>
          <BackButton color={colors.icon} />
          <View style={styles.welcomeTextView}>
            <View style={styles.welcomeText}>
              <Text style={globalStyles.headText}>
                {I18N.t('signupPage.signupHead').toUpperCase()}
              </Text>
              <Text style={globalStyles.bodyText}>{I18N.t('signupPage.signupBody')}</Text>
            </View>

            <Card containerStyle={globalStyles.card}>
              <View>
                <TextInput
                  func={(value) => setEmail(value)}
                  iconName={'envelope'}
                  keyboardType={'default'}
                  placeholderText={I18N.t('signupPage.email')}
                  secureText={false}
                  val={email}
                />

                <TextInput
                  func={(value) => setPassword(value)}
                  iconName={'key'}
                  keyboardType={'default'}
                  placeholderText={I18N.t('signupPage.password')}
                  secureText={true}
                  val={password}
                />

                <TextInput
                  func={(value) => setConfirmPassword(value)}
                  iconName={'key'}
                  keyboardType={'default'}
                  placeholderText={I18N.t('signupPage.confirmPassword')}
                  secureText={true}
                  val={confirmPassword}
                />

                <View style={globalStyles.buttonMargin}>
                  <Button
                    mode={'contained'}
                    text={I18N.t('signupPage.signupButton')}
                    onPressFunction={async () => await signUp()}
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
export default SignupPage;