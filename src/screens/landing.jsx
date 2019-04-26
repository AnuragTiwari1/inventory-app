import React from 'react';
import { Text, View } from 'react-native';
import { Card, Body, CardItem, Badge } from 'native-base';
import AppText from '../common/AppText';
import Theme from '../Theme';
import useDimension from '../hooks/useDimension';

const PageFont = ({ style, children, ...rest }) => (
  <AppText style={{ color: Theme.gray.darkest, ...style }} {...rest}>
    {children}
  </AppText>
);
const Job = ({ header, partNo, phase }) => {
  const { widthPercentageToDP } = useDimension();
  return (
    <Card>
      <CardItem header>
        <PageFont type="header">{header.toUpperCase()}</PageFont>
      </CardItem>
      <CardItem>
        <View
          style={{ width: widthPercentageToDP(80), justifyContent: 'center' }}>
          <PageFont>{`Part no: ${partNo.toUpperCase()}`}</PageFont>
          <Badge
            primary
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              left: widthPercentageToDP(70),
              bottom: '50%',
            }}>
            <AppText type="caption3" style={{ fontSize: 20 }}>
              {phase}
            </AppText>
          </Badge>
        </View>
      </CardItem>
    </Card>
  );
};

const Landing = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingVertical: 15,
    }}>
    <Job header="Kirloskar" partNo="qwsdly" phase="1" />
    <Job header="Cummines" partNo="rhkfge" phase="2" />
    <Job header="Ashok Leyland" partNo="fbksme" phase="1" />
    <Job header="escots" partNo="egklpw" phase="3" />
  </View>
);

export default Landing;
