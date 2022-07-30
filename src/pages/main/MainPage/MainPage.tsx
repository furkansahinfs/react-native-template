import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { FileProps } from '../../../interface';
import { Button, CustomSafeAreaView, ImageSelector } from '../../../components';
import { I18N } from '../../../locales';
import { useTheme } from '../../../theme';
import { sendPhoto } from './MainPage.helper';
import styles from './MainPage.styles';

const MainPage = () => {
  const [files, setFiles] = useState<Array<FileProps>>([]);
  const { colors } = useTheme();

  return (
    <CustomSafeAreaView InnerView={
      <ScrollView style={styles.safeAreaView} contentContainerStyle={styles.scrollView}>
        <View style={styles.view}>
          <ImageSelector
            files={files}
            mediaType={'photo'}
            multiple={true}
            setFiles={(selectedFile: Array<FileProps>) => setFiles(selectedFile)}
          />
          {files.length > 0 && (
            <Button
              text={I18N.t('mainPage.sendPhoto')}
              onPressFunction={async () => {
                await sendPhoto(files);
              }}
              mode={'contained'}
              hasMarginVertical={true}
            />
          )}
        </View>
      </ScrollView>}
    />
  );
};
export default MainPage;
