import React, { useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { Form, Button, Toast } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { SkypeIndicator } from 'react-native-indicators';
import Svg, {
  Ellipse,
  Defs,
  LinearGradient as LG,
  Stop,
} from 'react-native-svg';
import styles from './styles';
import useDimension from '../../hooks/useDimension';
import AppText from '../../common/AppText';
import Theme from '../../Theme';
import { emailTest, passwordTest } from '../../utils/validation';
import ValidationFeild from '../../component/validationFeild';
import useField from '../../hooks/useFeilds';
import Auth from '../../utils/Auth';
import Truck from '../../../assets/img/delivery-truck-with-circular-clock.svg';

export default props => {
  const { heightPercentageToDP, widthPercentageToDP } = useDimension();

  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const emailField = useField('', emailTest);
  const passwordField = useField('', passwordTest);
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      <Svg width={widthPercentageToDP(100)} height={heightPercentageToDP(35)}>
        <Defs>
          <LG id="grad" x1="0" y1="0" x2={widthPercentageToDP(100)} y2="0">
            <Stop offset="0" stopColor={Theme.colors.lg1} stopOpacity="1" />
            <Stop offset="2" stopColor={Theme.colors.lg2} stopOpacity="1" />
          </LG>
        </Defs>
        <Ellipse
          cx={widthPercentageToDP(50)}
          cy={heightPercentageToDP(10)}
          rx={widthPercentageToDP(70)}
          ry={heightPercentageToDP(25)}
          fill="url(#grad)"
        />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            top: '25%',
          }}>
          <Truck height={Math.min(heightPercentageToDP(15), 100)} />
          <AppText
            type="title3"
            style={{
              textAlign: 'center',
              letterSpacing: 0.5,
              marginTop: '2%',
            }}>
            Shipping and Order Review{'\n'}at your Fingertips
          </AppText>
        </View>
      </Svg>

      <Form
        style={{
          width: '90%',
          alignSelf: 'center',
          marginHorizontal: widthPercentageToDP(15),
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
                  () => {
                    setLoading(false);
                    props.navigation.navigate('Landing');
                  },
                  () => {
                    setLoading(false);
                    Toast.show({
                      position: 'top',
                      type: 'danger',
                      text: 'Wrong password!',
                      buttonText: 'Close',
                      duration: 5000,
                    });
                  }
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
