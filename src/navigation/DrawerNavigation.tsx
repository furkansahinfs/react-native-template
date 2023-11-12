import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { changeTheme, getTheme, logout } from '@src/helpers';
import { i18next } from '@src/locales';
import { MainPage, ProfilePage } from '@src/pages';
import { useTheme } from '@src/theme';
import styles from './TabNavigation.style';
import { navigate } from '.';

const Drawer = createDrawerNavigator();

const getThemeLabel = () => {
  const selectedTheme = getTheme();
  const isDark = selectedTheme === 'DARK';
  return isDark
    ? i18next.t('navigation.drawer.lightTheme')
    : i18next.t('navigation.drawer.darkTheme');
};

interface IDrawerItemComponent {
  labelName: string;
  onPress: () => void;
}
const DrawerItemComponent = ({ labelName, onPress }: IDrawerItemComponent) => {
  const { colors } = useTheme();
  return (
    <DrawerItem
      label={labelName}
      activeBackgroundColor={colors.button}
      activeTintColor={colors.text}
      inactiveTintColor={colors.text}
      onPress={onPress}
    />
  );
};

function CustomDrawerContent(props: any) {
  const { colors } = useTheme();
  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: colors.background }}>
      <DrawerItemList {...props} />
      <DrawerItemComponent
        labelName={i18next.t('navigation.drawer.selectLanguage')}
        onPress={() => navigate('Language', { page: 'Main' })}
      />
      <DrawerItemComponent labelName={getThemeLabel()} onPress={async () => await changeTheme()} />
      <DrawerItemComponent
        labelName={i18next.t('navigation.drawer.logout')}
        onPress={async () => await logout()}
      />
    </DrawerContentScrollView>
  );
}

interface IDrawerIcon {
  iconName: string;
}
const DrawerIcon = ({ iconName }: IDrawerIcon) => {
  const { colors } = useTheme();
  return (
    <MaterialCommunityIcons name={iconName} color={colors.icon} size={styles.iconSize.height} />
  );
};

function AppDrawer() {
  const { colors } = useTheme();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerActiveTintColor: colors.text,
        drawerInactiveTintColor: colors.text,
        headerTintColor: colors.text,
        headerStyle: { backgroundColor: colors.background },
        unmountOnBlur: false,
      }}
      drawerContent={(props: any) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={MainPage}
        options={{
          drawerLabel: i18next.t('navigation.tabbar.main'),
          headerTitle: i18next.t('navigation.tabbar.main'),
          drawerIcon: () => <DrawerIcon iconName={'home'} />,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          drawerLabel: i18next.t('navigation.tabbar.profile'),
          headerTitle: i18next.t('navigation.tabbar.profile'),
          drawerIcon: () => <DrawerIcon iconName={'account-settings'} />,
        }}
      />
    </Drawer.Navigator>
  );
}

export default AppDrawer;
