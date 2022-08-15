import * as React from 'react';
import { MainPage, ProfilePage } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './TabNavigation.style';
import { useTheme } from '../theme';
import { I18N } from '../locales';

const Tab = createBottomTabNavigator();

function MainPageTabs() {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: '#95a5a6',
        tabBarHideOnKeyboard: false,
        tabBarShowLabel: false,
        tabBarStyle: [styles.bottomBar, { backgroundColor: colors.background }],
      }}
    >
      <Tab.Screen
        name="Main"
        component={MainPage}
        listeners={({ navigation }) => ({
          blur: () => navigation.setParams({ screen: undefined }),
        })}
        options={{
          unmountOnBlur: true,
          tabBarLabel: I18N.t('navigation.tabbar.main'),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={styles.iconSize.height} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        listeners={({ navigation }) => ({
          blur: () => navigation.setParams({ screen: undefined }),
        })}
        options={{
          unmountOnBlur: true,
          tabBarLabel: I18N.t('navigation.tabbar.profile'),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-settings"
              color={color}
              size={styles.iconSize.height}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainPageTabs;
