import React from 'react';
import { Text, View } from 'react-native';
import i18next from 'i18next';
import { Controller } from 'react-hook-form';
import { CheckBox } from 'src/components';
import { useTheme } from 'src/theme';
import { communicationPreferences, InputProp } from './CommunicationPreferences.helper';
import styles from './CommunicationPreferences.styles';

interface CommunicationPreferencesProps {
  control: any;
  errors: any;
}
const CommunicationPreferences = ({ control, errors }: CommunicationPreferencesProps) => {
  const { colors } = useTheme();

  return (
    <View style={styles.mainView}>
      <Text style={[styles.communicationPreferencesHeader, { color: colors.text }]}>
        {i18next.t('pages.signupPage.communicationPreferencesHeader')}
      </Text>
      {communicationPreferences.map((input: InputProp) => {
        return (
          <View style={styles.inputContainer} key={input.name}>
            <Controller
              control={control}
              rules={input.rules}
              render={({ field: { onChange, value } }) => (
                <View style={styles.checkboxContainer}>
                  <Text style={[styles.description, { color: colors.text }]}>
                    {input.placeHolder}
                  </Text>
                  <View style={styles.checkboxView}>
                    <CheckBox
                      checked={value}
                      onPress={() => onChange(!value)}
                      extraStyle={styles.checboxExtraStyle}
                    />
                  </View>
                </View>
              )}
              name={input.name}
            />
            {errors[input.name] && <Text style={styles.errorText}>{input.errors}</Text>}
          </View>
        );
      })}
    </View>
  );
};
export default CommunicationPreferences;
