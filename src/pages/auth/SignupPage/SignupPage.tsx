import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import i18next from 'i18next';
import { useForm } from 'react-hook-form';
import {
  ActivityIndicator,
  BackButton,
  CustomSafeAreaView,
  DefaultIcon,
  DynamicForm,
  Toast,
} from '@src/components';
import { stylesGlobal } from '@src/styles/';
import { useTheme } from '@src/theme';
import { Aggrements } from './Aggrements';
import { inputArray, register } from './SignupPage.helper';
import styles from './SignupPage.styles';

const SignupPage = () => {
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const { colors } = useTheme();
  const globalStyles = stylesGlobal(colors);

  const {
    control,
    handleSubmit,
    formState: { errors },
    trigger
  } = useForm({
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      gender: '',
      birthday: '',
      password: '',
      confirmPassword: '',
      phone: '',
      sms: false,
      membership: false,
      privacy: false,
    },
  });
  const onSubmit = async (data: any) => {
    if (data.password === data.confirmPassword) {
      setShowLoading(true);
      await register(data);
      setShowLoading(false);
    } else {
      Toast(i18next.t('pages.signupPage.error.passwordNotMatched'), false);
    }
  };

  return (
    <CustomSafeAreaView>
      <View style={[styles.mainView, { backgroundColor: colors.background }]}>
        <ScrollView
          nestedScrollEnabled={true}
          keyboardShouldPersistTaps={'handled'}
          contentContainerStyle={styles.scrollView}>
          <BackButton color={colors.icon} />
          <View style={styles.textView}>
            <Text style={globalStyles.headText}>{i18next.t('pages.signupPage.signupHead')}</Text>
            <Text style={[globalStyles.bodyText, styles.bodyText]}>
              {i18next.t('pages.signupPage.signupBody')}
            </Text>
          </View>

          <DynamicForm control={control} errors={errors} trigger={trigger} inputArray={inputArray} />

          <View>
            <View style={[globalStyles.rect, globalStyles.smallMarginTop]} />
            <Aggrements control={control} errors={errors} />
          </View>

          <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.nextIcon}>
            <DefaultIcon
              color="white"
              name="arrow-right"
              onPress={handleSubmit(onSubmit)}
              size={styles.nextIcon.iconSize}
            />
          </TouchableOpacity>
        </ScrollView>

        {showLoading && <ActivityIndicator />}
      </View>
    </CustomSafeAreaView>
  );
};
export default SignupPage;
