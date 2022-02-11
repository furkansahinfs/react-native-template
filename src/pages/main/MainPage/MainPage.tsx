import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { FileProps } from '../../../assets';
import { Button, ImageSelector } from '../../../components';
import { I18N } from '../../../locales';
import { useTheme } from '../../../theme';
import { sendPhoto } from './MainPage.helper';
import styles from './MainPage.styles';

const MainPage = () => {
  const [file, setFile] = useState<FileProps | null>(null);
  const { colors } = useTheme();
  //TODO address control
  return (
    <SafeAreaView style={[styles.safeAreaView, { backgroundColor: colors.background }]}>
      <ScrollView style={styles.safeAreaView} contentContainerStyle={styles.scrollView}>
        <View style={styles.view}>
          <ImageSelector
            file={file}
            setFile={(selectedFile: FileProps | null) => setFile(selectedFile)}
          />
          {file && (
            <Button
              text={I18N.t('mainPage.sendPhoto')}
              onPressFunction={async () => {
                await sendPhoto(file);
              }}
              mode={'contained'}
              hasMarginVertical={true}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default MainPage;
