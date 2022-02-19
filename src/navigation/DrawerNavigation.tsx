import * as React from 'react';
import { MainPage, ProfilePage } from '../pages';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './TabNavigation.style';
import { I18N } from '../locales';
import { useTheme } from '../theme';
import { navigate } from '.';
import { changeTheme, getTheme, logout } from '../helpers';

const Drawer = createDrawerNavigator();

const getThemeLabel = () => {
  const selectedTheme = getTheme();
  const isDark = selectedTheme === 'DARK';
  return isDark ? I18N.t('drawer.lightTheme') : I18N.t('drawer.darkTheme');
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
        labelName={I18N.t('drawer.selectLanguage')}
        onPress={() => navigate('Language', { page: 'Main' })}
      />
      <DrawerItemComponent labelName={getThemeLabel()} onPress={async () => await changeTheme()} />
      <DrawerItemComponent
        labelName={I18N.t('drawer.logout')}
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
      }}
      drawerContent={(props: any) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={MainPage}
        options={{
          drawerLabel: I18N.t('tabbar.main'),
          headerTitle: I18N.t('tabbar.main'),
          drawerIcon: () => <DrawerIcon iconName={'home'} />,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          drawerLabel: I18N.t('tabbar.profile'),
          headerTitle: I18N.t('tabbar.profile'),
          drawerIcon: () => <DrawerIcon iconName={'account-settings'} />,
        }}
      />
    </Drawer.Navigator>
  );
}

export default AppDrawer;
