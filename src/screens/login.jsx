// @flow
import React from 'react';
import { Text, View } from 'react-native';

const Login = () => {
  return (
    <View style={{ backgroundColor: 'pink', flex: 1 }}>
      <Text>Login</Text>
    </View>
  );
};

// Login.navigationOptions = () => ({
//   tabBarOnPress: ({ navigation }) => {
//     navigation.navigate(navigation.state.routeName);
//   },
// });
export default Login;
