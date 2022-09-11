import React from 'react';
import { View, Text } from 'react-native';
import { CheckBox } from '../../../../components';
import styles from './Aggrements.styles';
import { useTheme } from '../../../../theme';
import { Controller } from 'react-hook-form';
import { aggrementPreferences, InputProp } from './Aggrements.helper';

interface AggrementsProps {
  control: any;
  errors: any;
}
const Aggrements = ({ control, errors }: AggrementsProps) => {
  const { colors } = useTheme();

  return (
    <View>
      {aggrementPreferences.map((input: InputProp) => {
        return (
          <View style={styles.inputContainer} key={input.name}>
            <Controller
              control={control}
              rules={input.rules}
              render={({ field: { onChange, value } }) => (
                <View style={styles.checkboxContainer}>
                  <Text style={[styles.description, { color: colors.text }]}>
                    {input.placeHolder}{' '}
                    <Text style={styles.underlinedDescription}>{input.underlinedPlaceholder}</Text>
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
export default Aggrements;
