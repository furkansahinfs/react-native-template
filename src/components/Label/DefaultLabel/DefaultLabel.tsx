import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from '@src/components';
import { i18next } from '@src/locales';
import { useTheme } from '@src/theme';
import styles from './DefaultLabel.styles';

interface LabelProps {
  labelHead: string;
  labelInfo: string;
  click: () => void;
  extraStyle?: any;
}

const DefaultLabel = ({ labelHead, labelInfo, click, extraStyle }: LabelProps) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      style={[styles.entityLabelView, extraStyle]}
      disabled={click === null}
      onPress={click}>
      <View style={styles.labelView}>
        <Text style={[styles.labelHead, { color: colors.text }]}>{labelHead}</Text>
        <Text style={[styles.labelInfo, { color: colors.text }]}>
          {labelInfo ? labelInfo : i18next.t('noInfo')}
        </Text>
      </View>
      {click !== null && (
        <View style={styles.labelIcon}>
          <Icon name={'angle-right'} onPress={click} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default DefaultLabel;
