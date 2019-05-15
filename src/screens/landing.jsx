import React from 'react';
import { ScrollView, View } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import Touchable from 'react-native-platform-touchable';
import AppText from '../common/AppText';
import Theme from '../Theme';

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
    <React.Fragment>
      <Touchable
        style={{
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          borderWidth: 1,
          borderColor: '#eee',
          width: '90%',
          minHeight: '15%',
          elevation: 2,
          padding: '3%',
          flexDirection: 'row',
          backgroundColor: 'white',
        }}
        onPress={onPress}>
        <React.Fragment>
          <Avatar
            size="medium"
            rounded
            title={`${header.slice(0, 2).toUpperCase()}`}
            onPress={onPress}
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
        </React.Fragment>
      </Touchable>
      <View
        style={{
          width: '90%',
          height: 50,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          backgroundColor: Theme.colors.primary,
          marginBottom: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Avatar
          overlayContainerStyle={{ backgroundColor: Theme.colors.phase1 }}
          size="small"
          rounded
          title="10"
        />
        <Avatar
          overlayContainerStyle={{ backgroundColor: Theme.colors.phase2 }}
          size="small"
          rounded
          title="30"
        />
        <Avatar
          overlayContainerStyle={{ backgroundColor: Theme.colors.phase3 }}
          size="small"
          rounded
          title="80"
        />
      </View>
    </React.Fragment>
  );
};
const JobBadge = ({ size, phase }) => {
  let s: number;
  let type: string;
  switch (size) {
    case 'large':
      s = Theme.spacing.large;
      type = 'caption1';
      break;
    case 'base':
      s = Theme.spacing.base;
      type = 'caption2';
      break;
    default:
      s = Theme.spacing.small;
      type = 'caption3';
  }

  return (
    <Badge
      style={{
        width: s,
        height: s,
        borderRadius: s / 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.colors[`phase${phase}`],
        alignSelf: 'center',
      }}>
      <AppText type={type}>{phase}</AppText>
    </Badge>
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
