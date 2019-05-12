// @flow
import React, { Component } from 'React';
import { View, Text } from 'react-native';

import MapView, { Marker } from 'react-native-maps';

export default class MapScreen extends Component {
  //   constructor(props) {
  //     super(props);
  //     // const key = this.props.navigation.getParam('key');
  //     // this.state = {
  //     //   key,
  //     //   region: {
  //     //     latitude: 18.57,
  //     //     longitude: 73.88,
  //     //     latitudeDelta: 0.001,
  //     //     longitudeDelta: 0.0007,
  //     //   },
  //     //   speed: -1,
  //     // };
  //     // this.update = this.update.bind(this);
  //   }

  //   componentWillMount() {
  //     Services.getLocation(this.state.key, this.update);
  //   }

  // update(obj) {
  //   this.setState(prevState => ({
  //     region: {
  //       ...prevState.region,
  //       latitude: obj.lat,
  //       longitude: obj.long,
  //     },
  //     speed: obj.speed,
  //   }));
  // }

  render() {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'lightgreen',
        }}>
        <MapView style={{ flex: 1 }}>
          {/* <Marker
            coordinate={{
              latitude: this.state.region.latitude,
              longitude: this.state.region.longitude,
            }}
            description="Anurag"
          /> */}
        </MapView>
      </View>
    );
  }
}
