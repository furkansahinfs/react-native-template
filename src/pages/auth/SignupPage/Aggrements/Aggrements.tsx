import React from 'react';
import { View } from 'react-native';
import { Agreement } from '@src/components';
import { AgreementProp } from '@src/interface';
import { aggrementPreferences } from './Aggrements.helper';
import styles from './Aggrements.styles'

interface AgreementsProps {
  control: any;
  errors: any;
}
const Agreements = ({ control, errors }: AgreementsProps) => {
  return (
    <View style={styles.inputContainer}>
      {aggrementPreferences.map((input: AgreementProp) => {
        return <Agreement control={control} errors={errors} input={input} key={input.name} />;
      })}
    </View>
  );
};
export default Agreements;
