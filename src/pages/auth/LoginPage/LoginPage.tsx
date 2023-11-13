import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card } from '@rneui/themed';
import { Controller, useForm } from 'react-hook-form';
import {
  ActivityIndicator,
  Button,
  CustomSafeAreaView,
  TextButton,
  TextInput,
} from '@src/components/';
import { i18next } from '@src/locales';
import { navigate } from '@src/navigation';
import { stylesGlobal } from '@src/styles';
import { useTheme } from '@src/theme';
import { inputArray, InputProp, login } from './LoginPage.helper';
import styles from './LoginPage.styles';

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
    <CustomSafeAreaView>
      <View style={[styles.mainView, { backgroundColor: colors.background }]}>
        <ScrollView nestedScrollEnabled={true} keyboardShouldPersistTaps={'handled'}>
          <View style={styles.view}>
            <View style={styles.welcomeText}>
              <Text style={globalStyles.headText}>{i18next.t('pages.loginPage.loginBody')}</Text>
              <Text style={globalStyles.bodyText}>{i18next.t('pages.loginPage.loginBody')}</Text>
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
                            onChangeText={onChange}
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
                  }>
                  {i18next.t('pages.loginPage.forgetPassword')}
                </Text>

                <Text
                  style={[styles.forgetPasswordAndActivation, { color: colors.text }]}
                  onPress={() =>
                    navigate('ForgetPasswordAndActivation', {
                      type: 'NewActivationMail',
                    })
                  }>
                  {i18next.t('pages.loginPage.newActivation')}
                </Text>
                <View style={globalStyles.smallMarginTop}>
                  <Button
                    type={'solid'}
                    onPress={handleSubmit(onSubmit)}
                    text={i18next.t('pages.loginPage.loginButton')}
                  />
                </View>
                <View style={globalStyles.smallMarginTop}>
                  <TextButton
                    onPress={() => navigate('Signup')}
                    text={i18next.t('pages.loginPage.signupButton')}
                  />
                </View>
              </View>
            </Card>
          </View>
        </ScrollView>
        {showLoading && <ActivityIndicator />}
      </View>
    </CustomSafeAreaView>
  );
};

export default LoginPage;
