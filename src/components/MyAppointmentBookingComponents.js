import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {memo, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

// custom imports
import CText from './common/CText';
import {colors, styles} from '../themes';
import {deviceWidth, hp, moderateScale} from '../common/constants';
import strings from '../i18n/strings';
import {StackNav} from '../navigation/NavigationKeys';

const MyAppointmentBookingComponents = ({itm}) => {
  const navigation = useNavigation();
  const [isLiked, setIsLiked] = useState(false);

  const onPressLikeButton = () => setIsLiked(!isLiked);

  const onPressBookNowButton = () => {
    console.log('Book Now');
  };

  const onPressItem = () =>
    navigation.navigate(StackNav.MyBookingDetail, {item: itm});

  return (
    <TouchableOpacity
      onPress={onPressItem}
      style={localStyles.popularSalonItem}>
      <Image source={itm?.image} style={localStyles.popularSalonImageStyle} />
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
        <CText numberOfLines={1} type={'B16'}>
          {itm?.name}
        </CText>
        <View style={localStyles.addressContainer}>
          <Ionicons
            name={'time-outline'}
            size={moderateScale(16)}
            color={colors.grayText}
          />
          <CText
            style={styles.ml5}
            type={'R14'}
            numberOfLines={1}
            color={colors.grayText}>
            {itm?.time}
          </CText>
        </View>
        <View style={styles.flexRow}>
          <TouchableOpacity
            style={[localStyles.btnContainer, {backgroundColor: itm?.bgColor}]}
            onPress={onPressBookNowButton}>
            <CText type={'m14'} color={itm?.textColor}>
              {itm?.status}
            </CText>
          </TouchableOpacity>
          {itm?.status == strings.completed && (
            <TouchableOpacity
              style={localStyles.btnContainer}
              onPress={onPressBookNowButton}>
              <CText type={'m14'} color={colors.primary}>
                {strings.rebook}
              </CText>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const localStyles = StyleSheet.create({
  btnContainer: {
    backgroundColor: colors.primarySurface,
    ...styles.ph10,
    ...styles.mr10,
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
    ...styles.pr10,
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

export default memo(MyAppointmentBookingComponents);
