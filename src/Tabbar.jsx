import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import ActionButton from 'react-native-circular-action-menu';
import { Icon } from 'native-base';
import Theme from './Theme';

const S = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 52,
    elevation: 2,
    backgroundColor: Theme.gray.lightest,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

const TabBar = props => {
  const {
    renderIcon,
    getLabelText,
    activeTintColor,
    inactiveTintColor,
    onTabPress,
    onTabLongPress,
    getAccessibilityLabel,
    navigation,
  } = props;

  const { routes, index: activeRouteIndex } = navigation.state;
  const tabs = routes.filter(({ routeName }) => {
    if (
      routeName === 'AddOrder' ||
      routeName === 'AddLine' ||
      routeName === 'AddUser'
    ) {
      return false;
    }
    return true;
  });

  return (
    <View style={S.container}>
      {tabs.slice(0, 2).map((route, routeIndex) => {
        const isRouteActive = routeIndex === activeRouteIndex;
        const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

        return (
          <Touchable
            key={routeIndex}
            style={S.tabButton}
            onPress={() => {
              onTabPress({ route });
            }}
            onLongPress={() => {
              onTabLongPress({ route });
            }}
            accessibilityLabel={getAccessibilityLabel({ route })}>
            <View>
              {renderIcon({ route, focused: isRouteActive, tintColor })}
            </View>
          </Touchable>
        );
      })}
      <Touchable style={S.fab} onPress={() => {}} onLongPress={() => {}}>
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          startDegree={210}
          endDegree={330}>
          <ActionButton.Item
            buttonColor="#9b59b6"
            title="New Task"
            onPress={() => console.log('notes tapped!')}>
            <Icon name="setting" type="AntDesign" style={S.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#3498db"
            title="Notifications"
            onPress={() => {}}>
            <Icon name="setting" type="AntDesign" style={S.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#1abc9c"
            title="All Tasks"
            onPress={() => {}}>
            <Icon name="setting" type="AntDesign" style={S.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </Touchable>
      {tabs.slice(2, 4).map((route, routeIndex) => {
        const isRouteActive = routeIndex + 2 === activeRouteIndex;
        const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

        return (
          <Touchable
            key={routeIndex}
            style={S.tabButton}
            onPress={() => {
              onTabPress({ route });
            }}
            onLongPress={() => {
              onTabLongPress({ route });
            }}
            accessibilityLabel={getAccessibilityLabel({ route })}>
            <View>
              {renderIcon({ route, focused: isRouteActive, tintColor })}
            </View>
          </Touchable>
        );
      })}
    </View>
  );
};

export default TabBar;
