import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Controller } from 'react-hook-form';
import DatePicker from 'react-native-date-picker';
import { DropdownMenu, TextInput } from '@src/components';
import { i18next } from '@src/locales';
import { useTheme } from '@src/theme';
import { inputArray, InputProp } from './SignupForm.helper';
import styles from './SignupForm.styles';

interface SignupFormProps {
  control: any;
  errors: any;
}
const SignupForm = ({ control, errors }: SignupFormProps) => {
  const [openDateModal, setOpenDateModal] = useState<boolean>(false);
  const { colors } = useTheme();

  return inputArray.map((input: InputProp) => {
    switch (input.type) {
      case 'textinput':
        return (
          <View style={styles.inputContainer} key={input.name}>
            <Controller
              control={control}
              rules={input.rules}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  placeholderText={input.placeHolder}
                  secureText={input?.isSecureText ? input.isSecureText : false}
                  onChangeText={onChange}
                  val={value}
                  keyboardType="default"
                />
              )}
              name={input.name}
            />
            {errors[input.name] && <Text style={styles.errorText}>{input.errors}</Text>}
          </View>
        );

      case 'calendar':
        return (
          <View style={styles.inputContainer} key={input.name}>
            <Controller
              control={control}
              rules={input.rules}
              render={({ field: { onChange, value } }) => (
                <>
                  <TouchableOpacity
                    style={[styles.dateTextInput, { borderColor: colors.border }]}
                    onPress={() => setOpenDateModal(true)}>
                    <Text style={{ color: colors.text }}>
                      {value ? new Date(value).toDateString() : input.placeHolder}
                    </Text>
                  </TouchableOpacity>

                  <DatePicker
                    modal
                    open={openDateModal}
                    mode={'date'}
                    date={value ? new Date(value) : new Date()}
                    onConfirm={date => {
                      setOpenDateModal(false);
                      onChange(date);
                    }}
                    onCancel={() => {
                      setOpenDateModal(false);
                    }}
                  />
                </>
              )}
              name={input.name}
            />
            {errors[input.name] && <Text style={styles.errorText}>{input.errors}</Text>}
          </View>
        );

      case 'selectbox':
        return (
          <View style={styles.inputContainer} key={input.name}>
            <Controller
              control={control}
              rules={input.rules}
              render={({ field: { onChange, value } }) => (
                <View style={[styles.genderInput, { borderColor: colors.border }]}>
                  <DropdownMenu
                    choices={input.choices ? input.choices : []}
                    currentChoice={
                      value
                        ? {
                            title: i18next.t('pages.signupPage.choice.' + value),
                            value: value,
                          }
                        : {
                            title: input.placeHolder,
                            value: '',
                          }
                    }
                    itemKey={'value'}
                    titleKey={'title'}
                    setChoice={choice => onChange(choice.value)}
                    closeOnSelection={true}
                  />
                </View>
              )}
              name={input.name}
            />
            {errors[input.name] && <Text style={styles.errorText}>{input.errors}</Text>}
          </View>
        );

      default:
        return <></>;
    }
  });
};
export default SignupForm;
