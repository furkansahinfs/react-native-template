import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import {
  ActivityIndicator,
  BackButton,
  CustomSafeAreaView,
  DefaultIcon,
  Toast,
} from '../../../components';
import { I18N } from '../../../locales';
import styles from './SignupPage.styles';
import { stylesGlobal } from '../../../styles/';
import { useTheme } from '../../../theme';
import { useForm } from 'react-hook-form';
import { register } from './SignupPage.helper';
import { SignupForm } from './SignupForm';
import { CommunicationPreferences } from './CommunicationPreferences';
import { Aggrements } from './Aggrements';

const SignupPage = () => {
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const { colors } = useTheme();
  const globalStyles = stylesGlobal(colors);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      gender: '',
      birthday: '',
      password: '',
      confirmPassword: '',
      sms: false,
      phone: false,
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
      Toast(I18N.t('pages.signupPage.error.passwordNotMatched'), false);
    }
  };

  return (
    <CustomSafeAreaView
      InnerView={
        <View style={[styles.mainView, { backgroundColor: colors.background }]}>
          <ScrollView
            nestedScrollEnabled={true}
            keyboardShouldPersistTaps={'handled'}
            contentContainerStyle={styles.scrollView}
          >
            <BackButton color={colors.icon} />
            <View style={styles.textView}>
              <Text style={globalStyles.headText}>{I18N.t('pages.signupPage.signupHead')}</Text>
              <Text style={[globalStyles.bodyText, styles.bodyText]}>
                {I18N.t('pages.signupPage.signupBody')}
              </Text>
            </View>

            {SignupForm({ control, errors })}
            {CommunicationPreferences({ control, errors })}
            <View>
              <View style={globalStyles.rect} />
              {Aggrements({ control, errors })}
            </View>

            <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.nextIcon}>
              <DefaultIcon
                color="white"
                name="arrow-right"
                onPressFunction={handleSubmit(onSubmit)}
                size={styles.nextIcon.iconSize}
              />
            </TouchableOpacity>
          </ScrollView>

          {showLoading && <ActivityIndicator />}
        </View>
      }
    />
  );
};
export default SignupPage;
