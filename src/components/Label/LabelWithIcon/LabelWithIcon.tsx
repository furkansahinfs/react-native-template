import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import i18next from 'i18next';
import { Icon } from 'src/components';
import { useTheme } from 'src/theme';
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
      onPress={click}>
      <View style={styles.labelIcon}>{icon}</View>

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

export default LabelWithIcon;
