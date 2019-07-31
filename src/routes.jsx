import React from 'react';
import {
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import { Icon } from 'native-base';
import Auth from './screens/Auth';
import Splash from './screens/splash';
import Landing from './screens/landing';

export const SplashScreen = 'SplashScreen';
export const AuthScreen = 'AuthScreen';
export const AppScreen = 'AppScreen';

export const AuthOption = {
  screen: Auth,
  navigationOptions: () => ({
    header: null,
  }),
};

export const SplashScreenOption = {
  screen: Splash,
};

export const LandingScreen = {
  screen: createBottomTabNavigator(
    {
      Home: {
        screen: Landing,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="home" type="AntDesign" style={{ color: tintColor }} />
          ),
          title: 'Home',
          headerLeft: () => <Icon name="menu-fold" type="AntDesign" />,
        },
      },
      History: {
        screen: Landing,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon
              name="clockcircleo"
              type="AntDesign"
              style={{ color: tintColor }}
            />
          ),
        },
      },
      Track: {
        screen: Track,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon
              name="satellite-variant"
              type="MaterialCommunityIcons"
              style={{ color: tintColor }}
            />
          ),
        },
      },
      Profile: {
        screen: Landing,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="user" type="AntDesign" style={{ color: tintColor }} />
          ),
        },
      },
    },
    {
      tabBarOptions: {
        activeTintColor: '#4F4F4F',
        inactiveTintColor: '#666',
      },
    }
  ),
  navigationOptions: ({ navigation }) => {
    const navRoute = getCurrentRoute(navigation.state);
    const route = navRoute && navRoute.routeName;
    const title = route || '';

    return {
      title,
      headerLeft: () => (
        <Icon name="menu-fold" type="AntDesign" style={{ color: 'white' }} />
      ),
      headerRight: () => (
        <Icon
          name="plus"
          type="AntDesign"
          style={{ color: 'white' }}
          onPress={() => navigation.navigate('AddUser')}
        />
      ),
    };
  },
};
