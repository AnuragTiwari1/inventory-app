import React from 'react';
import { View, Text } from 'react-native';
import Auth from '../utils/Auth';

export default props => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    {Auth.init(
      () => props.navigation.navigate('Landing'),
      () => props.navigation.navigate('Auth')
    )}
    <Text>This is Splash Screen</Text>
  </View>
);
