import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, CustomSafeAreaView, ImageSelector } from '@src/components';
import { FileProps } from '@src/interface';
import { i18next } from '@src/locales';
import { sendPhoto } from './ProfilePage.helper';
import styles from './ProfilePage.styles';

const ProfilePage = () => {
  const [files, setFiles] = useState<Array<FileProps>>([]);

  return (
    <CustomSafeAreaView
      InnerView={
        <View style={styles.view}>
          <ImageSelector
            files={files}
            mediaType={'photo'}
            multiple={true}
            setFiles={(selectedFile: Array<FileProps>) => setFiles(selectedFile)}
            renderImages={true}
          />

          {files.length > 0 && (
            <Button
              text={i18next.t('pages.profilePage.sendPhoto')}
              onPress={async () => {
                await sendPhoto(files);
              }}
              type={'solid'}
              hasMarginVertical={true}
            />
          )}
        </View>
      }
    />
  );
};
export default ProfilePage;
