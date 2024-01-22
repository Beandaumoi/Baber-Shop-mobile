import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

// custom imports
import images from '../../assets/images';
import CText from '../common/CText';
import {colors, styles} from '../../themes';
import {DistanceIcon, LocationIcon} from '../../assets/svg';
import {deviceWidth, hp, moderateScale} from '../../common/constants';

export default function SalonSubDetail() {
  return (
    <View style={localStyles.popularSalonItem}>
      <Image
        source={images.salonImg1}
        style={localStyles.popularSalonImageStyle}
      />
      <View style={localStyles.popularSalonTextContainer}>
        <View style={styles.rowSpaceBetween}>
          <CText numberOfLines={1} color={colors.black} type={'B16'}>
            {'Serenity Salon'}
          </CText>
        </View>
        <View style={localStyles.addressContainer}>
          <LocationIcon />
          <CText
            style={styles.ml5}
            type={'R14'}
            numberOfLines={1}
            color={colors.grayText}>
            {'2464 Royal Ln. Mesa, New ...'}
          </CText>
        </View>
        <View style={[styles.flexRow, styles.itemsCenter]}>
          <DistanceIcon />
          <CText type={'R14'} style={styles.ml5} color={colors.grayText}>
            {'5 Km'}
          </CText>
        </View>
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  popularSalonItem: {
    width: deviceWidth - moderateScale(50),
    ...styles.mv10,
    ...styles.selfCenter,
    borderRadius: moderateScale(14),
    ...styles.rowCenter,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    backgroundColor: colors.white,
  },
  popularSalonImageStyle: {
    width: '35%',
    height: hp(11),
    borderTopLeftRadius: moderateScale(14),
    borderBottomLeftRadius: moderateScale(14),
  },
  popularSalonTextContainer: {
    ...styles.p10,
    ...styles.flex,
  },
  addressContainer: {
    ...styles.flexRow,
    ...styles.itemsCenter,
    ...styles.mv5,
    ...styles.pr10,
  },
});
