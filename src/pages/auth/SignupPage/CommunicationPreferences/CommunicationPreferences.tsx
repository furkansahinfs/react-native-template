import React from 'react';
import { View, Text } from 'react-native';
import { CheckBox } from '../../../../components';
import styles from './CommunicationPreferences.styles';
import { useTheme } from '../../../../theme';
import { Controller } from 'react-hook-form';
import { communicationPreferences, InputProp } from './CommunicationPreferences.helper';
import { I18N } from '../../../../locales';

interface CommunicationPreferencesProps {
  control: any;
  errors: any;
}
const CommunicationPreferences = ({ control, errors }: CommunicationPreferencesProps) => {
  const { colors } = useTheme();

  return (
    <View style={styles.mainView}>
      <Text style={[styles.communicationPreferencesHeader, { color: colors.text }]}>
        {I18N.t('pages.signupPage.communicationPreferencesHeader')}
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
                      onPressFunction={() => onChange(!value)}
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
