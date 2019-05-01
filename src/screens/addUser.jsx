import React from 'react';
import { View } from 'react-native';
import AppText from '../common/AppText';

export default () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
      }}>
      <AppText>Add User</AppText>
      <AppText>Add User</AppText>
    </View>
  );
};
