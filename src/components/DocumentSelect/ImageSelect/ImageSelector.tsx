import React, { useState } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import { ImageLibraryOptions } from 'react-native-image-picker';
import VideoPlayer from 'react-native-video-controls';
import { DefaultIcon } from '@src/components';
import { FileProps } from '@src/interface';
import { useTheme } from '@src/theme';
import { requestCameraPermission } from './ImageSelector.helper';
import styles from './ImageSelector.style';
import ModalView from './Subcomponents/ModalView';

interface ImageSelectorProps {
  files: Array<FileProps>;
  mediaType: 'video' | 'photo';
  multiple: boolean;
  setFiles: (files: Array<FileProps>) => void;
  OpenModalView?: React.ReactNode;
  renderImages?: boolean;
}

const ImageSelector = ({
  files,
  mediaType,
  multiple,
  setFiles,
  OpenModalView,
  renderImages,
}: ImageSelectorProps) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const { colors } = useTheme();

  let options: ImageLibraryOptions = {
    selectionLimit: multiple ? 0 : 1,
    mediaType: mediaType,
  };

  const launchCamera = async () => {
    const isGranted = await requestCameraPermission();
    if (isGranted) {
      const response = await ImagePicker.launchCamera(options);
      const selectedFiles: Array<FileProps> = [];
      if (response.assets !== undefined && response.assets?.length > 0) {
        response.assets.forEach(element => {
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
    const selectedFiles: Array<FileProps> = [];
    if (response.assets !== undefined && response.assets?.length > 0) {
      response.assets.forEach(element => {
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
      <ScrollView
        horizontal={true}
        persistentScrollbar={true}
        pagingEnabled // Enable paging
        decelerationRate={0} // Disable deceleration
        snapToAlignment="center" // Snap to the center
      >
        {files.map((value, index) => {
          if (value.type.includes('video')) {
            return (
              <View style={styles.ImageSections} key={index}>
                <VideoPlayer
                  key={index}
                  source={{ uri: value.uri }}
                  disableBack
                  paused
                  style={styles.videoStyle}
                />
                <DefaultIcon
                  color={colors.icon}
                  name={'times'}
                  onPress={() => deleteImage(value)}
                />
              </View>
            );
          } else {
            return (
              <View style={styles.ImageSections} key={index}>
                <Image source={{ uri: value?.uri }} style={styles.images} />
                <DefaultIcon
                  color={colors.icon}
                  name={'times'}
                  onPress={() => deleteImage(value)}
                />
              </View>
            );
          }
        })}
      </ScrollView>
    );
  };

  return (
    <View>
      <ModalView
        isModalVisible={isModalVisible}
        setModalVisible={setIsModalVisible}
        launchCamera={launchCamera}
        launchImageLibrary={launchImageLibrary}
      />

      {files !== null && renderImages && renderFilesUri()}
      {OpenModalView === undefined && (
        <DefaultIcon name={'camera'} onPress={() => setIsModalVisible(true)} color={colors.icon} />
      )}
      {OpenModalView !== undefined && (
        <TouchableOpacity onPress={() => setIsModalVisible(true)} children={OpenModalView} />
      )}
    </View>
  );
};

export default ImageSelector;
