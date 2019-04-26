// @flow
import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import { Icon } from 'native-base';
import Svg, { Path } from 'react-native-svg';
import Header from './component/Header';
import Auth from './screens/Auth';
import Splash from './screens/splash';
import Landing from './screens/landing';
import TabBar from './Tabbar';

const defaultHeaderObject = {
  header: ({ scene }) => <Header scene={scene} />,
};
const AppRoute = createAppContainer(
  createStackNavigator(
    {
      SplashScreen: {
        screen: Splash,
      },
      Auth: {
        screen: Auth,
        navigationOptions: () => ({
          header: null,
        }),
      },
      Landing: {
        screen: createBottomTabNavigator(
          {
            Home: {
              screen: Landing,
              navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                  <Icon
                    name="home"
                    type="AntDesign"
                    style={{ color: tintColor }}
                  />
                ),
              },
            },
            LineChart: {
              screen: Landing,
              navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                  <Icon
                    name="setting"
                    type="AntDesign"
                    style={{ color: tintColor }}
                  />
                ),
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
            Profile: {
              screen: Landing,
              navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                  <Icon
                    name="user"
                    type="AntDesign"
                    style={{ color: tintColor }}
                  />
                ),
              },
            },
            AddUser: {
              screen: Landing,
              navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="home" style={{ color: tintColor }} />
                ),
              },
            },
            AddOrder: {
              screen: Landing,
              navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="home" style={{ color: tintColor }} />
                ),
              },
            },
            AddLine: {
              screen: Landing,
              navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="home" style={{ color: tintColor }} />
                ),
              },
            },
          },
          {
            tabBarComponent: TabBar,
            tabBarOptions: {
              activeTintColor: '#4F4F4F',
              inactiveTintColor: '#ddd',
            },
          }
        ),
      },
    },
    {
      defaultNavigationOptions: { ...defaultHeaderObject },
      initialRouteName: 'SplashScreen',
    }
  )
);
export default AppRoute;
