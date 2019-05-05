import React from 'react';
import { View } from 'react-native';
import { Card, CardItem, Badge } from 'native-base';
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
    <Card style={{ flexDirection: 'row', width: '90%' }}>
      <CardItem
        style={{
          flex: 2,
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
        button
        onPress={onPress}>
        <PageFont type="header">{header.toUpperCase()}</PageFont>
        <PageFont>{`Part no: ${partNo.toUpperCase()}`}</PageFont>
      </CardItem>
      <CardItem
        style={{
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <JobBadge size="large" phase={phase} />
        <View
          style={{
            height: 64,
            justifyContent: 'space-between',
          }}>
          {Array.isArray(extra) &&
            extra.length > 0 &&
            extra.map((e, i) => (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                key={i}>
                <JobBadge size={i === 0 ? 'base' : 'small'} phase={e.phase} />
              </View>
            ))}
        </View>
      </CardItem>
    </Card>
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
  <View
    style={{
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingVertical: 15,
    }}>
    <Job
      header="Kirloskar"
      partNo="qwsdly"
      phase="1"
      extra={[{ phase: 2 }, { phase: 3 }]}
      onPress={() => navigation.navigate('JobDetails')}
    />
    <Job
      header="Cummines"
      partNo="rhkfge"
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
      partNo="egklpw"
      phase="3"
      extra={[{ phase: 2 }, { phase: 1 }]}
    />
  </View>
);

export default Landing;
