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
// colors={['#4568DC', '#B06AB3']}
// const userProfile = () => (
//   <Profile width={widthPercentageToDP(30)} height={widthPercentageToDP(30)} />
// );

export default props => {
  const { heightPercentageToDP, widthPercentageToDP } = useDimension();

  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const emailField = useField('', emailTest);
  const passwordField = useField('', passwordTest);
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Theme.colors.lg1, Theme.colors.lg2]}
        useAngle
        angle={40}
        angleCenter={{ x: 0.5, y: 0.5 }}
        style={{
          top: -widthPercentageToDP(30),
          width: '100%',
          height: widthPercentageToDP(100),
          borderRadius: widthPercentageToDP(50),
          transform: [{ scaleX: 2 }],
          alignItems: 'center',
          position: 'absolute',
        }}>
        <View
          style={{
            top: '45%',
            alignItems: 'center',
            transform: [{ scaleX: 0.5 }],
          }}>
          <Truck height={heightPercentageToDP(12)} />
          <AppText
            type="title2"
            style={{
              textAlign: 'center',
              letterSpacing: 0.5,
              marginTop: '2%',
            }}>
            A complete order and line review{'\n'}at your fingertips
          </AppText>
        </View>
      </LinearGradient>

      <Form
        style={{
          width: '90%',
          alignSelf: 'center',
          marginHorizontal: widthPercentageToDP(15),
          top: widthPercentageToDP(80),
        }}>
        <ValidationFeild
          field={emailField}
          placeholder="Email"
          leftIcon={<Icon name="newsletter" type="entypo" color="#D72638" />}
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
          leftIcon={<Icon name="lock" type="entypo" color="#D72638" />}
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
          colors={[Theme.colors.lg1, Theme.colors.lg2]}
          useAngle
          angle={140}
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
              {
                position: 'absolute',
                backgroundColor: 'rgba(0,0,0,0.75)',
                top: 0,
              },
            ]}
          />
        )}
      </Button>
      {loading && (
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              position: 'absolute',
              backgroundColor: 'rgba(0,0,0,0.75)',
              top: 0,
            },
          ]}>
          <SkypeIndicator color={Theme.colors.lg1} />
        </View>
      )}
    </View>
  );
};
