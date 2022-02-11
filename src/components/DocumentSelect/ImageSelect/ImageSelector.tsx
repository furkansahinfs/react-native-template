import React, { Fragment, useState } from 'react';
import * as ImagePicker from 'react-native-image-picker';
import { ImageLibraryOptions } from 'react-native-image-picker';
import { Image, StatusBar, SafeAreaView, ScrollView, View } from 'react-native';
import styles from './ImageSelector.style';
import { requestCameraPermission } from './ImageSelector.helper';
import { Icon, TextButton } from '../..';
import ModalView from './Subcomponents/ModalView';
import { I18N } from '../../../locales';
import { FileProps } from '../../../assets';

interface ImageSelectorProps {
  file: FileProps | null;
  setFile: (file: FileProps | null) => void;
}

const ImageSelector = ({ file, setFile }: ImageSelectorProps) => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  let options: ImageLibraryOptions = {
    selectionLimit: 1,
    mediaType: 'photo',
  };

  const launchCamera = async () => {
    const isGranted = await requestCameraPermission();
    if (isGranted) {
      const response = await ImagePicker.launchCamera(options);
      console.log('launchCamera', response);
      if (response.assets !== undefined && response.assets?.length > 0) {
        setFile(response.assets[0].uri ? getFilePropsObject(response.assets[0]) : null);
      }
    }
  };

  const launchImageLibrary = async () => {
    const response = await ImagePicker.launchImageLibrary(options);
    console.log('launchLibrary', response);
    if (response.assets !== undefined && response.assets?.length > 0) {
      setFile(response.assets[0].uri ? getFilePropsObject(response.assets[0]) : null);
    }
  };

  function getFilePropsObject(selectedFile: any) {
    return {
      uri: selectedFile.uri,
      type: selectedFile.type,
      name: selectedFile.fileName,
    };
  }

  const renderFileUri = () => {
    return (
      <View style={styles.ImageSections}>
        <Image source={{ uri: file?.uri }} style={styles.images} />
        <Icon name={'times'} onPressFunction={() => setFile(null)} />
      </View>
    );
  };

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View style={styles.body}>
            <ModalView
              isModalVisible={isModalVisible}
              setModalVisible={setModalVisible}
              launchCamera={launchCamera}
              launchImageLibrary={launchImageLibrary}
            />

            {file !== null && renderFileUri()}
            <TextButton
              onPressFunction={() => setModalVisible(true)}
              text={I18N.t('imageSelector.selectPhoto')}
              hasMarginVertical={true}
              widthFit={true}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default ImageSelector;
