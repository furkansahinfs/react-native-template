import React from 'react';
import { Modal, View } from 'react-native';
import { Icon } from '../../../../components';
import { stylesGlobal } from '../../../../styles';
import { useTheme } from '../../../../theme';
import styles from './ModalView.styles';
import { Button } from '../../..';
import { I18N } from '../../../../locales';
import { TextButton } from '../../../Button';

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
      }}
    >
      <View style={styles.modalView}>
        <View style={styles.modalContainerView}>
          <View style={[globalStyles.row]}>
            <View style={styles.iconStyle}>
              <Icon
                name={'camera'}
                onPressFunction={() => {
                  launchCamera();
                  setModalVisible(!isModalVisible);
                }}
              />
            </View>
            <View style={styles.iconStyle}>
              <Icon
                name={'photo'}
                onPressFunction={() => {
                  launchImageLibrary();
                  setModalVisible(!isModalVisible);
                }}
              />
            </View>
          </View>

          <TextButton
            onPressFunction={() => {
              setModalVisible(!isModalVisible);
            }}
            text={I18N.t('imageSelector.closeModal')}
            widthFit={true}
            hasMarginVertical={true}
          />
        </View>
      </View>
    </Modal>
  );
};
export default ModalView;
