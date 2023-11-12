import React from 'react';
import { Modal, View } from 'react-native';
import { DefaultIcon, TextButton } from '@src/components';
import { i18next } from '@src/locales';
import { stylesGlobal } from '@src/styles';
import { useTheme } from '@src/theme';
import styles from './ModalView.styles';

interface ModalViewProps {
  setModalVisible: (visibility: boolean) => void;
  isModalVisible: boolean;
  launchCamera: () => void;
  launchImageLibrary: () => void;
}

const ModalView = ({
  setModalVisible,
  isModalVisible,
  launchCamera,
  launchImageLibrary,
}: ModalViewProps) => {
  const { colors } = useTheme();
  const globalStyles = stylesGlobal(colors);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      supportedOrientations={['portrait', 'landscape']}
      visible={isModalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}>
      <View style={styles.modalView}>
        <View style={styles.modalContainerView}>
          <View style={[globalStyles.row]}>
            <View style={styles.iconStyle}>
              <DefaultIcon
                name={'camera'}
                color={colors.icon}
                onPress={() => {
                  launchCamera();
                  setModalVisible(!isModalVisible);
                }}
              />
            </View>
            <View style={styles.iconStyle}>
              <DefaultIcon
                name={'photo'}
                color={colors.icon}
                onPress={() => {
                  launchImageLibrary();
                  setModalVisible(!isModalVisible);
                }}
              />
            </View>
          </View>

          <TextButton
            onPress={() => {
              setModalVisible(!isModalVisible);
            }}
            text={i18next.t('components.imageSelector.closeModal')}
            fit={true}
            hasMarginVertical={true}
          />
        </View>
      </View>
    </Modal>
  );
};
export default ModalView;
