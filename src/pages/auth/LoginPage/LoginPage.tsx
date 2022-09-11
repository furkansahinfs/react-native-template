import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { Controller, useForm } from 'react-hook-form';
import {
  ActivityIndicator,
  Button,
  CustomSafeAreaView,
  TextButton,
  TextInput,
} from '../../../components/';
import { I18N } from '../../../locales';
import { inputArray, InputProp, login } from './LoginPage.helper';
import styles from './LoginPage.styles';
import { stylesGlobal } from '../../../styles/';
import { useTheme } from '../../../theme';
import { navigate } from '../../../navigation';

const LoginPage = () => {
  const [showLoading, setShowLoading] = useState(false);

  const { colors } = useTheme();
  const globalStyles = stylesGlobal(colors);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    setShowLoading(true);
    await login(data.email, data.password);
    setShowLoading(false);
  };

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
                  {inputArray.map((input: InputProp) => {
                    return (
                      <View style={styles.inputContainer} key={input.name}>
                        <Controller
                          control={control}
                          rules={input.rules}
                          render={({ field: { onChange, value } }) => (
                            <TextInput
                              placeholderText={input.placeHolder}
                              secureText={input.isSecureInput}
                              func={onChange}
                              val={value}
                              keyboardType="default"
                              iconName={input.iconName}
                            />
                          )}
                          name={input.name}
                        />
                        {errors[input.name] && <Text style={styles.errorText}>{input.errors}</Text>}
                      </View>
                    );
                  })}

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
                      onPressFunction={handleSubmit(onSubmit)}
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
