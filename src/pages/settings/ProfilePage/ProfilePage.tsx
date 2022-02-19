import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, View } from 'react-native';
import { DocumentPickerResponse } from 'react-native-document-picker';
import { ActivityIndicator, DefaultIcon, TextButton, TextInput, Toast } from '../../../components';
import { I18N } from '../../../locales';
import { ChangeableProfileData, FileProps, Images, ProfileData } from '../../../assets';
import { getProfileData, pickImage, updateProfileData, setPicture } from './ProfilePage.helper';
import styles from './ProfilePage.styles';
import { stylesGlobal } from '../../../styles';
import useTheme from '../../../theme/useTheme';
import { navigate } from '../../../navigation';

//TODO NEED BIG REFACTORING
//TODO NEED BIG REFACTORING
//TODO NEED BIG REFACTORING

const ProfilePage = () => {
  const [profilePictureUrl, setProfilePictureUrl] = useState('');
  const [photo, setPhoto] = useState<FileProps>();
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
   * The function gets the picked image by invoking pickImage() of the helper
   * If result is not null, set necessary things
   * setPhoto is necessary to declare file for when you send file to the API
   * setIsChanged adjusts to show save button.
   */
  async function pick() {
    const result: DocumentPickerResponse | null = await pickImage();
    if (result !== null) {
      //ignore errors, type is wrong in node files
      setProfilePictureUrl(result.uri);
      setPhoto({
        uri: result.uri,
        type: result.type,
        name: result.name,
      });
      setIsChanged(true);
    }
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

  return (
    <SafeAreaView style={[styles.safeAreaView, { backgroundColor: colors.background }]}>
      <ScrollView
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps={'handled'}
        style={styles.scrollView}
      >
        <View>
          <View style={styles.topView}>
            <View style={styles.imageView}>
              <View style={[styles.icon, styles.editIcon]}>
                <DefaultIcon color={'black'} name={'camera'} onPressFunction={pick} />
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
                    color={'black'}
                    name={'cloud-upload'}
                    onPressFunction={async () => await setPicture(photo, setIsChanged)}
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
              <View style={globalStyles.rect} />
              <View style={globalStyles.buttonMargin}>
                <TextButton
                  onPressFunction={() => navigate('Address')}
                  text={I18N.t('profilePage.changeLocation')}
                />
              </View>
            </View>

            {showLoading && <ActivityIndicator />}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ProfilePage;
