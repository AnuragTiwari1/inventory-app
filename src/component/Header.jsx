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
    overflow: 'hidden',
    flexDirection: 'row',
  },
  titleContainer: {
    flex: 0,
    maxWidth: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    overflow: 'hidden',
    flexDirection: 'row-reverse',
  },
});

const Header = props => {
  const { scene, navigation, backgroundStyle } = props;
  // Get properties from static object navigationOptions
  const navigationOptions = scene ? scene.descriptor.options : {};
  const { title, headerLeft, headerRight } = navigationOptions;
  const routeName = '';
  const routeIndex = scene ? scene.index : 0;
  const { widthPercentageToDP, heightPercentageToDP } = useDimension();
  console.log('Scene Kya hai>>>>>>>>>>>>>', scene);

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
