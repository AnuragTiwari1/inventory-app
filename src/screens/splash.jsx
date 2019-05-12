import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, ProgressBarAndroid, StyleSheet } from 'react-native';
import Auth from '../utils/Auth';
import Truck from '../../assets/img/delivery-truck-with-circular-clock.svg';
import useDimension from '../hooks/useDimension';

const Splash = (props: any) => {
  const { widthPercentageToDP, heightPercentageToDP } = useDimension();
  Auth.init(
    () => setTimeout(() => props.navigation.navigate('Landing'), 2000),
    () => setTimeout(() => props.navigation.navigate('Auth'), 2000)
  );
  return (
    <View
      style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      <LinearGradient
        colors={['#E68364', '#C91F37', '#CF3A24']}
        style={StyleSheet.absoluteFill}
      />
      <ProgressBarAndroid
        style={{ width: '100%', height: 20, paddingTop: 0, marginTop: -10 }}
        styleAttr="Horizontal"
        color="#FFFFFF"
        indeterminate
      />
      <Truck
        width={widthPercentageToDP(25)}
        height={heightPercentageToDP(17)}
        style={{ top: '42.5%' }}
      />
    </View>
  );
};
Splash.navigationOptions = ({ navigation }) => ({
  header: null,
});

export default Splash;
