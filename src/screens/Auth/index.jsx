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
import { emailTest, passwordTest } from '../../utils/validation';
import ValidationFeild from '../../component/validationFeild';
import useField from '../../hooks/useFeilds';

const wave = require('../../../assets/img/wave.png');

export default () => {
  const { heightPercentageToDP, widthPercentageToDP } = useDimension();
  const userProfile = () => (
    <Profile width={widthPercentageToDP(30)} height={widthPercentageToDP(30)} />
  );
  let passwordRef;
  let emailRef;
  const emailField = useField('', emailTest);
  const passwordField = useField('', passwordTest);
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
        <ValidationFeild
          field={emailField}
          label="Email"
          returnKeyType="next"
          keyboardType="email-address"
          getRef={input => {
            emailRef = input;
          }}
          onSubmitEditing={() => {
            passwordRef._root.focus();
          }}
          onClear={() => {
            emailRef._root.clear();
            emailRef._root.focus();
          }}
        />
        <ValidationFeild
          field={passwordField}
          label="Password"
          secureTextEntry
          getRef={input => {
            passwordRef = input;
          }}
          onClear={() => {
            passwordRef._root.clear();
            passwordRef._root.focus();
          }}
        />
        <AppText
          style={{
            color: Theme.gray.light,
            marginTop: Theme.spacing.base,
            paddingLeft: Theme.spacing.small,
          }}>
          Forgot Password?
        </AppText>
      </Form>
      <Button
        full
        primary
        onPress={() => {
          Promise.all([emailField.validate(), passwordField.validate()]).then(
            ([isEmailValid, isPasswordValid]) => {
              if (isEmailValid && isPasswordValid) {
                console.log('every thing ok>>>>>>>>>>>>>>>please proceed');
              }
            }
          );
        }}>
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
