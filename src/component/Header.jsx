import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, StyleSheet, Animated } from 'react-native';
import AppText from '../common/AppText';
import Theme from '../Theme';
import useDimension from '../hooks/useDimension';

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  headerWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    paddingStart: '5%',
  },
  titleContainer: {
    flex: 0,
    maxWidth: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
    height: '100%',
    alignItems: 'center',
    paddingStart: '5%',
  },
});

const Header = props => {
  const { scene, navigation, backgroundStyle } = props;
  // Get properties from static object navigationOptions
  const navigationOptions = scene ? scene.descriptor.options : {};
  const { title, headerLeft, headerRight } = navigationOptions;
  const routeName = '';
  const { widthPercentageToDP, heightPercentageToDP } = useDimension();

  return (
    <View
      style={{
        width: widthPercentageToDP(100),
        height: heightPercentageToDP(10),
        backgroundColor: Theme.colors.primary,
      }}>
      <Animated.View style={[styles.background, backgroundStyle]} />
      <View style={styles.headerWrapper}>
        <View style={styles.leftContainer}>
          {headerLeft ? headerLeft() : null}
        </View>
        <View style={styles.titleContainer}>
          <AppText numberOfLines={1} type="title1">
            {title || routeName}
          </AppText>
        </View>
        <View style={styles.rightContainer}>
          {headerRight ? headerRight() : null}
        </View>
      </View>
    </View>
  );
};

export default withNavigation(Header);
