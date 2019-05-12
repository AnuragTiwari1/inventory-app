import React from 'react';
import { ScrollView, View, FlatList } from 'react-native';
import { Card, CardItem } from 'native-base';
import Svg, { Circle, Line, Path, Text } from 'react-native-svg';
import Theme from '../Theme';
import { Job } from './landing';
import AppText from '../common/AppText';

export default () => (
  <ScrollView>
    <JobCard />
    <JobDescription />
    <LineChart />
  </ScrollView>
);

const despData = [
  { name: 'Client', value: 'Cummines' },
  { name: 'Part', value: 'Radiator' },
  { name: 'QTY.', value: '100' },
  { name: 'Due Date', value: '23 may' },
];
const JobCard = () => (
  <View style={{ height: '12%' }}>
    <View
      style={{
        height: '30%',
        backgroundColor: Theme.colors.primary,
        width: '100%',
        paddingTop: '10%',
        paddingHorizontal: '15%',
      }}
    />
    <View
      style={{
        position: 'absolute',
        height: '90%',
        width: '100%',
        left: '5%',
      }}>
      <View>
        <Job
          header="Cummines"
          partNo="rhkfge"
          phase="2"
          extra={[{ phase: 1 }, { phase: 3 }]}
        />
      </View>
    </View>
  </View>
);

const PageFont = props => (
  <AppText {...props} style={{ color: Theme.gray.darker }} />
);

const JobDescription = () => (
  <Card style={{ width: '90%', alignSelf: 'center' }}>
    <CardItem header style={{ backgroundColor: Theme.gray.lighter }}>
      <PageFont>Description</PageFont>
    </CardItem>
    <CardItem>
      <FlatList
        data={despData}
        renderItem={({ item }) => (
          <Field label={item.name} value={item.value} />
        )}
        numColumns={2}
      />
    </CardItem>
  </Card>
);
const Field = ({ label, value }) => (
  <View style={{ flex: 1, marginVertical: Theme.spacing.xTiny }}>
    <AppText type="caption2" style={{ color: Theme.gray.light }}>
      {label}
    </AppText>
    <AppText type="header" style={{ color: Theme.gray.darker }}>
      {value}
    </AppText>
  </View>
);

const LineChart = () => (
  <Card style={{ width: '90%', alignSelf: 'center', marginBottom: 150 }}>
    <CardItem header style={{ backgroundColor: Theme.gray.lighter }}>
      <PageFont>LineChart</PageFont>
    </CardItem>
    <CardItem style={{ flexDirection: 'column' }}>
      <PageFont>Phase 1</PageFont>
      <ScrollView horizontal>
        <Step name="procurement" completed />
        <Step name="inspection" completed />
        <Step name="fabrication" inProcess={15} />
        <Step name="core-building" last inProcess={15} />
        <Step name="Total" inProcess={30} last />
      </ScrollView>
    </CardItem>
    <CardItem style={{ flexDirection: 'column' }}>
      <PageFont>Phase 2</PageFont>
      <ScrollView horizontal>
        <Step name="assembly" inProcess={25} />
        <Step name="testing" />
        <Step name="painting" last />
        <Step name="Total" inProcess={45} last />
      </ScrollView>
    </CardItem>
    <CardItem style={{ flexDirection: 'column' }}>
      <PageFont>Phase 3</PageFont>
      <ScrollView horizontal>
        <Step name="final-inspection" inProcess={5} />
        <Step name="packaging" inProcess={5} />
        <Step name="dispatched" inProcess={15} last />
        <Step name="Total" inProcess={25} last />
      </ScrollView>
    </CardItem>
  </Card>
);

const Step = ({ name, last = false, completed = false, inProcess = 10 }) => (
  <View
    style={{
      marginTop: Theme.spacing.small,
    }}>
    <Svg height="60" width="100">
      <Circle cx="25" cy="30" r="25" fill="pink" />
      {!last && (
        <Line x1="50" y1="30" x2="110" y2="30" stroke="red" strokeWidth="2" />
      )}
      {completed && (
        <Svg width="50" height="50" viewBox="-12 -15 50 50" fill="#fff">
          <Path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" />
        </Svg>
      )}
      {!completed && (
        <Text
          fill="#fff"
          fontSize="20"
          fontWeight="bold"
          x="25"
          y="35"
          textAnchor="middle">
          {inProcess}
        </Text>
      )}
    </Svg>
    <View style={{ width: 60 }}>
      <AppText style={{ color: Theme.gray.light, textAlign: 'center' }}>
        {name}
      </AppText>
    </View>
  </View>
);
