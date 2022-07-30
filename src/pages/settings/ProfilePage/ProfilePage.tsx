import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import {
  ActivityIndicator,
  CustomSafeAreaView,
  DefaultIcon,
  ImageSelector,
  TextButton,
  TextInput,
  Toast,
} from '../../../components';
import { I18N } from '../../../locales';
import { Images } from '../../../assets';
import { ChangeableProfileData, FileProps, ProfileData } from '../../../interface';
import { getProfileData, updateProfileData, setPicture } from './ProfilePage.helper';
import styles from './ProfilePage.styles';
import { stylesGlobal } from '../../../styles';
import useTheme from '../../../theme/useTheme';

//TODO NEED BIG REFACTORING

const ProfilePage = () => {
  const [profilePictureUrl, setProfilePictureUrl] = useState('');
  const [photo, setPhoto] = useState<Array<FileProps>>([]);
  const [profileData, setProfileData] = useState<ProfileData>();
  let changeableProfileData: ChangeableProfileData = { name: '', phone: '', surname: '' };
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState<boolean>(false);

  const { colors } = useTheme();
  const globalStyles = stylesGlobal(colors);

  useEffect(() => {
    (async () => {
      await fetchProfile();
    })();
  }, []);

  /**
   * The function gets profile data from API
   * and sets the profilePictureUrl and profileData
   */
  async function fetchProfile() {
    setShowLoading(true);
    const data = await getProfileData();
    setProfileData(data);
    setProfilePictureUrl(data?.profile_picture);
    setShowLoading(false);
  }

  /**
   * The function tries to save the new data to the API
   */
  async function save() {
    setShowLoading(true);
    const result = await updateProfileData(changeableProfileData);

    if (result === true) {
      Toast(I18N.t('profilePage.profileInfoChangedMessage'), false);
      await fetchProfile();
    } else {
      Toast(result, false);
    }
    setShowLoading(false);
  }

  const labelArray = [
    {
      text: I18N.t('profilePage.name'),
      icon: 'user',
      value: profileData?.name,
      func: (val: string) => {
        changeableProfileData.name = val;
      },
      bigText: false,
    },
    {
      text: I18N.t('profilePage.surname'),
      icon: 'user',
      value: profileData?.surname,
      func: (val: string) => {
        changeableProfileData.surname = val;
      },
      bigText: false,
    },
    {
      text: I18N.t('profilePage.phone'),
      icon: 'phone',
      value: profileData?.phone,
      func: (val: string) => {
        changeableProfileData.phone = val;
      },
      bigText: false,
    },
  ];

  const selectPhotoFunction = (selectedFiles: Array<FileProps>) => {
    if (selectedFiles.length > 0) {
      setPhoto(selectedFiles);
      setProfilePictureUrl(selectedFiles[0]?.uri);
      setIsChanged(true);
    }
  };

  return (
    <CustomSafeAreaView
      InnerView={
        <ScrollView
          nestedScrollEnabled={true}
          keyboardShouldPersistTaps={'handled'}
          style={styles.scrollView}
        >
          <View>
            <View style={styles.topView}>
              <View style={styles.imageView}>
                <View style={[styles.icon, styles.editIcon]}>
                  <ImageSelector
                    files={photo}
                    mediaType={'photo'}
                    multiple={false}
                    setFiles={(selectedFiles: Array<FileProps>) =>
                      selectPhotoFunction(selectedFiles)
                    }
                  />
                </View>

                <Image
                  style={styles.image}
                  source={
                    profilePictureUrl
                      ? {
                          uri: profilePictureUrl,
                        }
                      : Images.defaultProfilePicture
                  }
                />
                {isChanged && (
                  <View style={[styles.icon, styles.saveIcon]}>
                    <DefaultIcon
                      color={colors.icon}
                      name={'cloud-upload'}
                      onPressFunction={async () => await setPicture(photo[0], setIsChanged)}
                    />
                  </View>
                )}
              </View>
            </View>

            <View style={[styles.profileDataView, { backgroundColor: colors.background }]}>
              <View>
                {labelArray.map((element, index) => {
                  return (
                    <View key={index} style={styles.textInput}>
                      <TextInput
                        func={(value) => element.func(value)}
                        iconName={element.icon}
                        keyboardType={'default'}
                        placeholderText={element.text}
                        secureText={false}
                        val={element.value}
                      />
                    </View>
                  );
                })}

                <View style={globalStyles.buttonMargin}>
                  <TextButton onPressFunction={save} text={I18N.t('profilePage.saveProfileInfo')} />
                </View>
              </View>

              {showLoading && <ActivityIndicator />}
            </View>
          </View>
        </ScrollView>
      }
    />
  );
};
export default ProfilePage;
