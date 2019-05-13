// @flow
import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import { Icon } from 'native-base';
import { MultiBar, MultiBarToggle } from 'react-native-multibar';
import Header from './component/Header';
import Auth from './screens/Auth';
import Splash from './screens/splash';
import Landing from './screens/landing';
import AddUser from './screens/addUser';
import NewOrder from '../assets/img/addOrder.svg';
import NewProduct from '../assets/img/manufacture.svg';
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
const prefix = 'mychat://';
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
            MultiBar: {
              screen: () => null,
              navigationOptions: ({ navigation }) => ({
                tabBarIcon: () => (
                  <MultiBarToggle
                    navigation={navigation}
                    actionSize={30}
                    routes={[
                      {
                        routeName: 'AddUser',
                        color: '#FF8360',
                        icon: (
                          <Icon
                            name="adduser"
                            type="AntDesign"
                            style={{ color: '#FFFFFF' }}
                          />
                        ),
                      },
                      {
                        routeName: 'AddUser',
                        color: '#E8E288',
                        icon: (
                          <NewOrder
                            style={{
                              width: 35,
                              height: 35,
                            }}
                          />
                        ),
                      },
                      {
                        routeName: 'AddUser',
                        color: '#7DCE82',
                        icon: (
                          <NewProduct
                            style={{
                              width: 30,
                              height: 30,
                            }}
                          />
                        ),
                      },
                    ]}
                    icon={
                      <Icon
                        name="plus"
                        type="AntDesign"
                        style={{ color: '#FFFFFF' }}
                      />
                    }
                  />
                ),
              }),
              params: {
                navigationDisabled: true,
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
            tabBarComponent: props => (
              <MultiBar {...props} style={{ backgroundColor: '#FFF' }} />
            ),
            tabBarOptions: {
              activeTintColor: '#4F4F4F',
              inactiveTintColor: '#ddd',
            },
          }
        ),
        navigationOptions: ({ navigation }) => {
          const navRoute = getCurrentRoute(navigation.state);
          const route = navRoute && navRoute.routeName;
          const title = route || '';

          return { title };
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
      initialRouteName: 'Auth',
    }
  )
);
export default () => <AppRoute uriPrefix={prefix} />;
