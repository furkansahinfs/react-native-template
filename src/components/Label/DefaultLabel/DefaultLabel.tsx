import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from '../..';
import { I18N } from '../../../locales';
import { useTheme } from '../../../theme';
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
      onPress={click}
    >
      <View style={styles.labelView}>
        <Text style={[styles.labelHead, { color: colors.text }]}>{labelHead}</Text>
        <Text style={[styles.labelInfo, { color: colors.text }]}>
          {labelInfo ? labelInfo : I18N.t('noInfo')}
        </Text>
      </View>
      {click !== null && (
        <View style={styles.labelIcon}>
          <Icon name={'angle-right'} onPressFunction={click} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default DefaultLabel;
