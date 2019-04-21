// @flow
import React, { useEffect, useState } from 'react';
import { Dimensions, PixelRatio } from 'react-native';

export default () => {
  const [width, setWidth] = useState(Dimensions.get('window').width);
  const [height, setHeight] = useState(Dimensions.get('window').height);

  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      setWidth(Dimensions.get('window').width);
      setHeight(Dimensions.get('window').height);
    });
    return () => Dimensions.removeEventListener('change');
  }, []);

  const widthPercentageToDP = (widthPercent: number) => {
    const screenWidth = width;
    const elemWidth = parseFloat(widthPercent);

    return PixelRatio.roundToNearestPixel(screenWidth * (elemWidth / 100));
  };

  const heightPercentageToDP = (heightPercent: number) => {
    const screenHeight = height;
    const elemHeight = parseFloat(heightPercent);

    return PixelRatio.roundToNearestPixel(screenHeight * (elemHeight / 100));
  };

  return {
    widthPercentageToDP,
    heightPercentageToDP,
  };
};
