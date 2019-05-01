// @flow
import React, { useRef } from 'react';
import { View, Image } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import { Form, Button } from 'native-base';
import styles from './styles';
import useDimension from '../../hooks/useDimension';
import Profile from '../../../assets/img/engineer.svg';
import AppText from '../../common/AppText';
import Theme from '../../Theme';
import { emailTest, passwordTest } from '../../utils/validation';
import ValidationFeild from '../../component/validationFeild';
import useField from '../../hooks/useFeilds';
import Auth from '../../utils/Auth';

const wave = require('../../../assets/img/wave.png');

export default props => {
  const { heightPercentageToDP, widthPercentageToDP } = useDimension();
  const userProfile = () => (
    <Profile width={widthPercentageToDP(30)} height={widthPercentageToDP(30)} />
  );
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
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
          placeholder="Email"
          leftIcon={<Icon name="newsletter" type="entypo" />}
          returnKeyType="next"
          keyboardType="email-address"
          ref={emailRef}
          onSubmitEditing={() => {
            passwordRef.current.focus();
          }}
          blurOnSubmit={false}
          onClear={() => {
            emailRef.current.clear();
            emailRef.current.focus();
          }}
        />
        <ValidationFeild
          field={passwordField}
          placeholder="Password"
          leftIcon={<Icon name="lock" type="entypo" />}
          secureTextEntry
          ref={passwordRef}
          onClear={() => {
            passwordRef.current.clear();
            passwordRef.current.focus();
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
                Auth.login(
                  {
                    email: emailField.value,
                    password: passwordField.value,
                  },
                  () => props.navigation.navigate('Landing')
                );
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
