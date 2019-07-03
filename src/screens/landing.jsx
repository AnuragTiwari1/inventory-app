import React from 'react';
import { ScrollView, View } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import Touchable from 'react-native-platform-touchable';
import AppText from '../common/AppText';
import Theme from '../Theme';
import getRandomColor from '../utils/color';

const PageFont = ({ style, children, ...rest }) => (
  <AppText style={{ color: Theme.gray.darkest, ...style }} {...rest}>
    {children}
  </AppText>
);
export const Job = ({
  header,
  partNo,
  phase,
  extra = [],
  onPress = () => {},
}) => {
  return (
    <Touchable
      style={{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eee',
        width: '90%',
        minHeight: '15%',
        elevation: 2,
        padding: '3%',
        flexDirection: 'row',
        backgroundColor: 'white',
        marginBottom: '5%',
      }}
      onPress={onPress}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: Theme.gray.lighter,
            paddingBottom: '8%',
            borderBottomWidth: 0.7,
          }}>
          <Avatar
            size="medium"
            rounded
            title={`${header.slice(0, 2).toUpperCase()}`}
            onPress={onPress}
            overlayContainerStyle={{ backgroundColor: getRandomColor() }}
            activeOpacity={0.7}
          />
          <AppText style={{ marginStart: '5%' }}>
            <PageFont type="header">{`${header}\n`}</PageFont>
            <AppText type="caption2" style={{ color: Theme.gray.lighter }}>
              #{partNo}
            </AppText>
          </AppText>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'space-between',
            }}>
            <Icon name="share-google" type="evilicon" />
            <AppText type="caption3" style={{ color: 'red' }}>
              DD:23rd may
            </AppText>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 50,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <AppText
            type="caption2"
            style={{ color: Theme.gray.dark, textAlign: 'center' }}>
            {10}
            <AppText type="caption3" style={{ color: Theme.gray.light }}>
              {'\n I'}
            </AppText>
          </AppText>
          <AppText
            type="caption2"
            style={{ color: Theme.gray.dark, textAlign: 'center' }}>
            30
            <AppText type="caption3" style={{ color: Theme.gray.light }}>
              {'\n II'}
            </AppText>
          </AppText>
          <AppText
            type="caption2"
            style={{ color: Theme.gray.dark, textAlign: 'center' }}>
            60
            <AppText type="caption3" style={{ color: Theme.gray.light }}>
              {'\n III'}
            </AppText>
          </AppText>
        </View>
      </View>
    </Touchable>
  );
};

const Landing = ({ navigation }) => (
  <ScrollView
    contentContainerStyle={{
      flexGrow: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingVertical: 15,
      paddingBottom: 50,
    }}>
    <Job
      header="Kirloskar"
      partNo="awsdlv"
      phase="1"
      extra={[{ phase: 2 }, { phase: 3 }]}
      onPress={() => navigation.navigate('JobDetails')}
    />
    <Job
      header="Cummines"
      partNo="rhkfee"
      phase="2"
      extra={[{ phase: 1 }, { phase: 3 }]}
      onPress={() => navigation.navigate('JobDetails')}
    />
    <Job
      header="Ashok Leyland"
      partNo="fbksme"
      phase="1"
      extra={[{ phase: 3 }, { phase: 2 }]}
    />
    <Job
      header="escots"
      partNo="elklow"
      phase="3"
      extra={[{ phase: 2 }, { phase: 1 }]}
    />
  </ScrollView>
);

export default Landing;
