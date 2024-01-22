import {StyleSheet, View} from 'react-native';
import React from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

// Local import
import CText from '../common/CText';
import {colors, styles} from '../../themes';
import {deviceWidth, moderateScale} from '../../common/constants';

export default function SliderComponent(props) {
  const {startPoint, endPoint, maxValue, title, subTitle1, subTitle2} = props;

  const customMarker = event => {
    return (
      <View style={localStyles.markerContainer}>
        <View style={localStyles.sliderLength} />
        <CText color={colors.primary} type={'r14'} style={styles.mt5}>
          {subTitle1 ? subTitle1 : ''}
          {event.currentValue}
          {subTitle2 ? subTitle2 : ''}
        </CText>
      </View>
    );
  };

  return (
    <View style={styles.mb10}>
      <CText type={'S16'} style={styles.mb10}>
        {title}
      </CText>
      <MultiSlider
        sliderLength={deviceWidth - moderateScale(24) * moderateScale(2)}
        values={[startPoint, endPoint]}
        min={0}
        max={maxValue}
        onValuesChange={values => console.log(values)}
        step={1}
        markerOffsetY={20}
        selectedStyle={{backgroundColor: colors.primary}}
        trackStyle={localStyles.sliderContainer}
        minMarkerOverlapDistance={50}
        customMarker={customMarker}
      />
    </View>
  );
}

const localStyles = StyleSheet.create({
  sliderContainer: {
    height: moderateScale(8),
    borderRadius: moderateScale(8),
    backgroundColor: colors.primarySurface,
  },
  sliderLength: {
    height: moderateScale(24),
    width: moderateScale(24),
    borderRadius: moderateScale(12),
    borderWidth: moderateScale(6),
    backgroundColor: colors.primary,
    borderColor: colors.white,
  },
  markerContainer: {
    height: moderateScale(55),
    ...styles.center,
    ...styles.justifyStart,
  },
});
