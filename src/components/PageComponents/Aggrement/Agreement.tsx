import React from 'react';
import { Text, View } from 'react-native';
import { Controller } from 'react-hook-form';
import { CheckBox } from '@src/components';
import { AgreementProp } from '@src/interface';
import { useTheme } from '@src/theme';
import styles from './Agreement.styles';

interface AgreementsProps {
  control: any;
  errors: any;
  input: AgreementProp;
}
const Agreement = ({ control, errors, input }: AgreementsProps) => {
  const { colors } = useTheme();

  return (
    <View style={styles.inputContainer} key={input.name}>
      <Controller
        control={control}
        rules={input.rules}
        render={({ field: { onChange, value } }) => (
          <View style={styles.checkboxContainer}>
            <CheckBox checked={value} onPress={() => onChange(!value)} />
            <Text style={[styles.description, { color: colors.text }]}>
              {input.placeHolder}
              <Text style={styles.underlinedDescription}>{input.underlinedPlaceholder}</Text>
            </Text>
          </View>
        )}
        name={input.name}
      />
      {errors[input.name] && <Text style={styles.errorText}>{input.errors}</Text>}
    </View>
  );
};

export default Agreement;
