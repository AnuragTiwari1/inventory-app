// @flow
import React, { useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { Form, Button } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { SkypeIndicator } from 'react-native-indicators';
import styles from './styles';
import useDimension from '../../hooks/useDimension';
import Profile from '../../../assets/img/engineer.svg';
import AppText from '../../common/AppText';
import Theme from '../../Theme';
import { emailTest, passwordTest } from '../../utils/validation';
import ValidationFeild from '../../component/validationFeild';
import useField from '../../hooks/useFeilds';
import Auth from '../../utils/Auth';
import Truck from '../../../assets/img/delivery-truck-with-circular-clock.svg';

export default props => {
  const { heightPercentageToDP, widthPercentageToDP } = useDimension();
  const userProfile = () => (
    <Profile width={widthPercentageToDP(30)} height={widthPercentageToDP(30)} />
  );
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const emailField = useField('', emailTest);
  const passwordField = useField('', passwordTest);
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FAB892', '#F46B54', '#DF4A67']}
        useAngle
        angle={135 + 90}
        angleCenter={{ x: 0.5, y: 0.5 }}
        style={{
          height: heightPercentageToDP(35.55),
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomLeftRadius: widthPercentageToDP(35),
        }}>
        <View style={{ alignItems: 'center' }}>
          <Truck
            width={widthPercentageToDP(15)}
            height={heightPercentageToDP(17)}
          />
          <AppText style={{ textAlign: 'center' }}>
            A complete order and line review{'\n'}at your fingertips
          </AppText>
        </View>
      </LinearGradient>
      <Form
        style={{
          width: '90%',
          alignSelf: 'center',
          marginHorizontal: widthPercentageToDP(15),
        }}>
        <ValidationFeild
          field={emailField}
          placeholder="Email"
          leftIcon={<Icon name="newsletter" type="entypo" color="#DF4A67" />}
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
          leftIcon={<Icon name="lock" type="entypo" color="#DF4A67" />}
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
          setLoading(true);
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
              } else setLoading(false);
            }
          );
        }}>
        <LinearGradient
          colors={['#FAB892', '#F46B54', '#DF4A67']}
          useAngle
          angle={135 + 90}
          angleCenter={{ x: 0.5, y: 0.5 }}
          style={[
            StyleSheet.absoluteFillObject,
            { justifyContent: 'center', alignItems: 'center' },
          ]}>
          <AppText>Login</AppText>
        </LinearGradient>
        {loading && (
          <View
            style={[
              StyleSheet.absoluteFill,
              { position: 'absolute', backgroundColor: 'rgba(0,0,0,0.75)' },
            ]}>
            <SkypeIndicator color="#F46B54" />
          </View>
        )}
      </Button>
    </View>
  );
};
