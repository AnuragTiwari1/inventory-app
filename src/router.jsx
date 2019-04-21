// @flow
import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Header from './component/Header';
import Auth from './screens/Auth';

const defaultHeaderObject = {
  header: ({ scene }) => <Header scene={scene} />,
};
const AppRoute = createAppContainer(
  createStackNavigator(
    {
      Auth: {
        screen: Auth,
        navigationOptions: () => ({
          header: null,
        }),
      },
    },
    {
      defaultNavigationOptions: { ...defaultHeaderObject },
      initialRouteName: 'Auth',
    }
  )
);
export default AppRoute;
