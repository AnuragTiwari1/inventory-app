// @flow
import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import { Icon } from 'native-base';
import Header from './component/Header';
import Auth from './screens/Auth';
import Splash from './screens/splash';
import Landing from './screens/landing';
import AddUser from './screens/addUser';
import JobDetails from './screens/jobDetails';
import Track from './screens/track';

const defaultHeaderObject = {
  header: ({ scene, navigation }) => (
    <Header scene={scene} navigation={navigation} />
  ),
};
const getCurrentRoute = navigationState => {
  if (!navigationState) {
    return null;
  }
  if (!navigationState.routes) {
    return navigationState;
  }

  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getCurrentRoute(route);
  }

  return route;
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
                  <Icon
                    name="user"
                    type="AntDesign"
                    style={{ color: tintColor }}
                  />
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
              <Icon
                name="menu-fold"
                type="AntDesign"
                style={{ color: 'white' }}
              />
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
      },
      AddUser: {
        screen: AddUser,
        navigationOptions: {
          title: 'Add User',
        },
      },
      JobDetails: {
        screen: JobDetails,
        navigationOptions: {
          title: 'Job Details',
        },
      },
      GreetInvite: {
        screen: AddUser,
        navigationOptions: {
          title: 'Change Password',
          path: 'chat/:user',
        },
      },
    },
    {
      defaultNavigationOptions: { ...defaultHeaderObject },
      initialRouteName: 'Landing',
    }
  )
);
export default () => <AppRoute />;
