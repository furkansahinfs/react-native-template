import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';
import { i18next } from '@src/locales';
import { MainPage, ProfilePage } from '@src/pages';
import { useTheme } from '@src/theme';
import styles from './TabNavigation.style';

const Tab = createBottomTabNavigator();

function MainPageTabs() {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: '#95a5a6',
        tabBarHideOnKeyboard: false,
        tabBarShowLabel: false,
        tabBarStyle: [styles.bottomBar, { backgroundColor: colors.background }],
      }}>
      <Tab.Screen
        name="Home"
        component={MainPage}
        listeners={({ navigation }) => ({
          blur: () => navigation.setParams({ screen: undefined }),
        })}
        options={{
          unmountOnBlur: true,
          tabBarLabel: i18next.t('navigation.tabbar.main'),
          tabBarIcon: ({ color }) => (
            <Icon type="font-awesome" name="home" color={color} size={styles.iconSize.height} />
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
          tabBarLabel: i18next.t('navigation.tabbar.profile'),
          tabBarIcon: ({ color }) => (
            <Icon type="font-awesome" name="user" color={color} size={styles.iconSize.height} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainPageTabs;
