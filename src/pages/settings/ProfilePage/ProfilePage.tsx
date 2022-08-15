import React, { useState } from 'react';
import { View } from 'react-native';
import { FileProps } from '../../../interface';
import { Button, CustomSafeAreaView, ImageSelector } from '../../../components';
import { I18N } from '../../../locales';
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
              text={I18N.t('pages.profilePage.sendPhoto')}
              onPressFunction={async () => {
                await sendPhoto(files);
              }}
              mode={'contained'}
              hasMarginVertical={true}
            />
          )}
        </View>
      }
    />
  );
};
export default ProfilePage;
