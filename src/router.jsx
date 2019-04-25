// @flow
import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Header from './component/Header';
import Auth from './screens/Auth';
import Splash from './screens/splash';
import Landing from './screens/landing';

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
        screen: Landing,
      },
    },
    {
      defaultNavigationOptions: { ...defaultHeaderObject },
      initialRouteName: 'SplashScreen',
    }
  )
);
export default AppRoute;
