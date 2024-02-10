import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Control, Controller, FieldErrors, UseFormTrigger } from 'react-hook-form';
import DatePicker from 'react-native-date-picker';
import { DropdownMenu, TextInput } from '@src/components';
import { formatDate } from '@src/helpers';
import { InputProp } from '@src/interface';
import { useTheme } from '@src/theme';
import styles from './DynamicForm.styles';

interface DynamicFormProps {
  control: Control<any, any>;
  errors: FieldErrors<any>;
  trigger: UseFormTrigger<any>;
  inputArray: Array<InputProp>;
}
const DynamicForm = ({ control, errors, trigger, inputArray }: DynamicFormProps) => {
  const [openDateModal, setOpenDateModal] = useState<boolean>(false);
  const maxRegisterDate = new Date(new Date().setFullYear(new Date().getFullYear() - 18));
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
                  label={input?.placeHolder}
                  placeholderText={input.placeHolder}
                  secureText={input?.isSecureTextOnTextInput ?? false}
                  onChangeText={text => {
                    onChange(text);
                    trigger(input.name);
                  }}
                  value={value}
                  editable={input?.editable ?? true}
                  keyboardType={input?.keyboardTypeOnTextInput ?? 'default'}
                  extraInputContainerStyle={{ backgroundColor: colors.textInput }}
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
                  <Text style={styles.inputLabel}>{input?.placeHolder}</Text>
                  <TouchableOpacity
                    style={[
                      styles.dateTextInput,
                      {
                        borderColor: colors.textInputBorder,
                        backgroundColor: colors.textInput,
                      },
                    ]}
                    onPress={() => setOpenDateModal(true)}>
                    <Text style={{ color: colors.text }}>
                      {value ? formatDate(new Date(value)) : input.placeHolder}
                    </Text>
                  </TouchableOpacity>

                  <DatePicker
                    modal
                    open={openDateModal}
                    mode={'date'}
                    locale="tr-TR"
                    date={value ? new Date(value) : maxRegisterDate}
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
                <View>
                  <Text style={styles.inputLabel}>{input?.placeHolder}</Text>
                  <View
                    style={[
                      styles.selectboxInput,
                      {
                        borderColor: colors.textInputBorder,
                        backgroundColor: colors.textInput,
                      },
                    ]}>
                    <DropdownMenu
                      choices={input.choices ? input.choices : []}
                      currentChoice={
                        value
                          ? {
                              title: value.title,
                              value: value.value,
                            }
                          : {
                              title: input.placeHolder,
                              value: '',
                            }
                      }
                      itemKey={'value'}
                      titleKey={'title'}
                      multipleChoice={input?.hasMultipleChoiceOnSelectbox}
                      searchBar={input?.hasSearchOnSelectbox}
                      multipleChoiceDropdownTitle={input.placeHolder}
                      setChoice={choice => onChange(choice)}
                      closeOnSelection={true}
                    />
                  </View>
                </View>
              )}
              name={input.name}
            />
            {errors[input.name] && <Text style={styles.errorText}>{input.errors}</Text>}
          </View>
        );

      default:
        return null;
    }
  });
};
export default DynamicForm;
