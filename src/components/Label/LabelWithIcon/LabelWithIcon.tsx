import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from '../..';
import { I18N } from '../../../locales';
import { useTheme } from '../../../theme';
import styles from './LabelWithIcon.styles';

interface LabelProps {
  labelHead: string;
  labelInfo: string;
  click: () => void;
  icon: Element;
  extraStyle?: any;
}

const LabelWithIcon = ({ labelHead, labelInfo, click, icon, extraStyle }: LabelProps) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      disabled={click === null}
      style={[styles.entityLabelView, { backgroundColor: colors.card }, extraStyle]}
      onPress={click}
    >
      <View style={styles.labelIcon}>{icon}</View>

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

export default LabelWithIcon;
