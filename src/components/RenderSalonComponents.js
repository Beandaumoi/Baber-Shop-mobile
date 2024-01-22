import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {memo, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

// custom imports
import CText from './common/CText';
import {colors, styles} from '../themes';
import {deviceWidth, hp, moderateScale} from '../common/constants';
import {DistanceIcon, LocationIcon} from '../assets/svg';
import {StackNav} from '../navigation/NavigationKeys';

const RenderSalonComponents = ({itm, sheetRef = ''}) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigation = useNavigation();

  const onPressLikeButton = () => setIsLiked(!isLiked);

  const onPressBookNowButton = () => {
    console.log('Book Now');
  };

  const onPressDetailSalon = () => {
    if (sheetRef) {
      sheetRef.current.hide();
    }
    navigation.navigate(StackNav.SalonDetail, {item: itm});
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPressDetailSalon}
      style={localStyles.popularSalonItem}>
      <Image source={itm.image} style={localStyles.popularSalonImageStyle} />
      <TouchableOpacity
        onPress={onPressLikeButton}
        style={localStyles.likeBgContainer}>
        <Ionicons
          name={isLiked ? 'heart' : 'heart-outline'}
          color={colors.primary}
          size={moderateScale(16)}
        />
      </TouchableOpacity>
      <View style={localStyles.popularSalonTextContainer}>
        <View style={styles.rowSpaceBetween}>
          <CText numberOfLines={1} style={styles.flex} type={'B16'}>
            {itm.name}
          </CText>
          <View style={styles.rowCenter}>
            <DistanceIcon />
            <CText type={'R14'} style={styles.ml5} color={colors.grayText}>
              {itm.distance}
            </CText>
          </View>
        </View>
        <View style={localStyles.addressContainer}>
          <LocationIcon />
          <CText
            style={styles.ml5}
            type={'R14'}
            numberOfLines={1}
            color={colors.grayText}>
            {itm.location}
          </CText>
        </View>
        <View style={styles.rowSpaceBetween}>
          <View style={styles.rowStart}>
            <Ionicons
              name={'star'}
              size={moderateScale(16)}
              color={colors.yellow}
              style={styles.mr5}
            />
            <CText type={'R14'}>
              {itm.rating}
              <CText type={'R14'} color={colors.grayText}>
                {` (${itm.noOfPeopleRated})`}
              </CText>
            </CText>
          </View>
          <TouchableOpacity
            style={localStyles.btnContainer}
            onPress={onPressBookNowButton}>
            <CText type={'m14'} color={colors.primary}>
              {strings.BookNow}
            </CText>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const localStyles = StyleSheet.create({
  btnContainer: {
    backgroundColor: colors.primarySurface,
    ...styles.ph10,
    ...styles.pv5,
    borderRadius: moderateScale(30),
  },
  popularSalonItem: {
    width: deviceWidth - moderateScale(50),
    ...styles.mv10,
    ...styles.selfCenter,
    borderRadius: moderateScale(14),
    ...styles.rowCenter,
    borderWidth: 1,
    borderColor: colors.inputBorder,
  },
  popularSalonImageStyle: {
    width: '35%',
    height: hp(13),
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
  },
  likeBgContainer: {
    position: 'absolute',
    top: moderateScale(10),
    left: moderateScale(10),
    backgroundColor: colors.white,
    borderRadius: moderateScale(12),
    height: moderateScale(24),
    width: moderateScale(24),
    ...styles.center,
  },
});

export default memo(RenderSalonComponents);
