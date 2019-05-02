import React from 'react';
import { View, Text, ProgressBarAndroid } from 'react-native';
import Auth from '../utils/Auth';

const Splash = props => (
  <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
    <ProgressBarAndroid
      style={{ width: '100%', paddingTop: 0, marginTop: 0 }}
      styleAttr="Horizontal"
      color="#2196F3"
      indeterminate
    />
    {Auth.init(
      () => setTimeout(() => props.navigation.navigate('Landing'), 2000),
      () => setTimeout(() => props.navigation.navigate('Auth'), 2000)
    )}
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is Splash Screen</Text>
    </View>
  </View>
);
Splash.navigationOptions = ({ navigation }) => ({
  header: null,
});

export default Splash;
