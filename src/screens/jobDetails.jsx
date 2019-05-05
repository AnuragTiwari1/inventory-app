import React from 'react';
import { View, FlatList } from 'react-native';
import { Card, CardItem } from 'native-base';
import Theme from '../Theme';
import { Job } from './landing';
import AppText from '../common/AppText';

export default () => (
  <View style={{ flex: 1, justifyContent: 'flex-start' }}>
    <JobCard />
    <JobDescription />
  </View>
);

const despData = [
  { name: 'client', value: 'Cummines' },
  { name: 'part', value: 'Radiator' },
  { name: 'qty', value: '100' },
  { name: 'due date', value: '23 may' },
];
const JobCard = () => (
  <View style={{ height: '20%' }}>
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
