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
  files: Array<FileProps>;
  mediaType: 'video' | 'photo';
  multiple: boolean;
  setFiles: (files: Array<FileProps>) => void;
}

const ImageSelector = ({ files, mediaType, multiple, setFiles }: ImageSelectorProps) => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  let options: ImageLibraryOptions = {
    selectionLimit: multiple ? 0 : 1,
    mediaType: mediaType,
  };

  const launchCamera = async () => {
    const isGranted = await requestCameraPermission();
    if (isGranted) {
      const response = await ImagePicker.launchCamera(options);
      console.log('launchCamera', response);
      const selectedFiles: Array<FileProps> = [];
      if (response.assets !== undefined && response.assets?.length > 0) {
        response.assets.forEach((element) => {
          if (element.uri) {
            const elementFile = getFilePropsObject(element);
            files.push(elementFile);
          }
        });
        setFiles(selectedFiles.concat(files));
      }
    }
  };

  const launchImageLibrary = async () => {
    const response = await ImagePicker.launchImageLibrary(options);
    console.log('launchLibrary', response);
    const selectedFiles: Array<FileProps> = [];
    if (response.assets !== undefined && response.assets?.length > 0) {
      response.assets.forEach((element) => {
        if (element.uri) {
          const elementFile = getFilePropsObject(element);
          selectedFiles.push(elementFile);
        }
      });
      setFiles(selectedFiles.concat(files));
    }
  };

  function getFilePropsObject(selectedFile: any) {
    return {
      uri: selectedFile.uri,
      type: selectedFile.type,
      name:
        mediaType === 'video'
          ? selectedFile.fileName + '.' + selectedFile.type.split('/')[1]
          : selectedFile.fileName,
    };
  }

  function deleteImage(deletedFile: FileProps) {
    const filteredFiles: Array<FileProps> = files.filter(function (value) {
      return value.uri !== deletedFile.uri;
    });

    setFiles(filteredFiles);
  }

  const renderFilesUri = () => {
    return (
      <ScrollView horizontal={true}>
        {files.map((value, index) => {
          return (
            <View style={styles.ImageSections} key={index}>
              <Image source={{ uri: value?.uri }} style={styles.images} />
              <Icon name={'times'} onPressFunction={() => deleteImage(value)} />
            </View>
          );
        })}
      </ScrollView>
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

            {files !== null && renderFilesUri()}
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
