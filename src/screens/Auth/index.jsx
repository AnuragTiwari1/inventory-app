// @flow
import React from 'react';
import { Text, View, Image } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Form, Item, Label, Input, Button } from 'native-base';
import styles from './styles';
import useDimension from '../../hooks/useDimension';
import Profile from '../../../assets/img/engineer.svg';
import AppText from '../../common/AppText';
import Theme from '../../Theme';

const wave = require('../../../assets/img/wave.png');

export default () => {
  const { heightPercentageToDP, widthPercentageToDP } = useDimension();
  const userProfile = () => (
    <Profile width={widthPercentageToDP(30)} height={widthPercentageToDP(30)} />
  );
  let secondTextInput;
  return (
    <View style={styles.container}>
      <Image
        source={wave}
        style={{ ...styles.wave, height: widthPercentageToDP(65.55) }}
      />
      <Form
        style={{
          width: '90%',
          alignSelf: 'center',
          marginHorizontal: widthPercentageToDP(15),
        }}>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input
            returnKeyType="next"
            onSubmitEditing={() => {
              secondTextInput._root.focus();
            }}
            blurOnSubmit={false}
          />
        </Item>
        <Item floatingLabel>
          <Label>Password</Label>
          <Input
            getRef={input => {
              secondTextInput = input;
            }}
          />
        </Item>
        <AppText
          style={{
            color: Theme.gray.light,
            marginTop: Theme.spacing.base,
            paddingLeft: Theme.spacing.small,
          }}>
          Forgot Password?
        </AppText>
      </Form>
      <Button full primary>
        <AppText>Login</AppText>
      </Button>
      <Avatar
        rounded
        ImageComponent={userProfile}
        size={widthPercentageToDP(30)}
        containerStyle={{
          ...styles.avatar,
          top: widthPercentageToDP(35),
          left: '65%',
        }}
      />
    </View>
  );
};
