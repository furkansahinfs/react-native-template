import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DropdownMenu, TextInput } from '../../../../components';
import { I18N } from '../../../../locales';
import styles from './SignupForm.styles';
import { useTheme } from '../../../../theme';
import { Controller } from 'react-hook-form';
import DatePicker from 'react-native-date-picker';
import { inputArray, InputProp } from './SignupForm.helper';

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
                  func={onChange}
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
                    onPress={() => setOpenDateModal(true)}
                  >
                    <Text>{value ? new Date(value).toDateString() : input.placeHolder}</Text>
                  </TouchableOpacity>

                  <DatePicker
                    modal
                    open={openDateModal}
                    mode={'date'}
                    date={value ? new Date(value) : new Date()}
                    onConfirm={(date) => {
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
                            title: I18N.t('pages.signupPage.choice.' + value),
                            value: value,
                          }
                        : {
                            title: input.placeHolder,
                            value: '',
                          }
                    }
                    itemKey={'value'}
                    titleKey={'title'}
                    setChoice={(choice) => onChange(choice.value)}
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
