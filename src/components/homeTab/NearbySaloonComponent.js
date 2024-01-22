import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

// custom imports
import CText from '../common/CText';
import {colors, styles} from '../../themes';
import strings from '../../i18n/strings';
import {deviceWidth, hp, moderateScale} from '../../common/constants';
import {StackNav} from '../../navigation/NavigationKeys';
import {DistanceIcon, LocationIcon} from '../../assets/svg';

const NearbySaloonComponent = ({itm, isVertical = true}) => {
  const navigation = useNavigation();
  const [isLiked, setIsLiked] = React.useState(false);

  const onPressLikeButton = () => setIsLiked(!isLiked);

  const onPressBookNowButton = () => {
    console.log('On Press Book Now Button');
  };

  const onPressDetailSalon = () =>
    navigation.navigate(StackNav.SalonDetail, {item: itm});

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPressDetailSalon}
      style={[
        localStyles.nearbySalonsItem,
        isVertical && [styles.m5, styles.mh10],
        !isVertical && styles.mv10,
        {
          width: isVertical ? deviceWidth - moderateScale(100) : '100%',
        },
      ]}>
      <Image source={itm.image} style={localStyles.nearbySalonsImageStyle} />
      <TouchableOpacity
        onPress={onPressLikeButton}
        style={localStyles.likeBgContainer}>
        <Ionicons
          name={isLiked ? 'heart' : 'heart-outline'}
          color={colors.primary}
          size={moderateScale(16)}
        />
      </TouchableOpacity>
      <View style={localStyles.nearbySalonsTextContainer}>
        <View style={styles.rowSpaceBetween}>
          <CText type={'B16'}>{itm.name}</CText>
          <View style={styles.rowCenter}>
            <DistanceIcon />
            <CText type={'R14'} style={styles.ml5} color={colors.grayText}>
              {itm.distance}
            </CText>
          </View>
        </View>
        <View style={styles.rowCenter}>
          <LocationIcon />
          <CText
            style={[styles.mv5, styles.ml5]}
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

export default memo(NearbySaloonComponent);

const localStyles = StyleSheet.create({
  nearbySalonsItem: {
    backgroundColor: colors.white,
    borderRadius: moderateScale(14),
    borderWidth: 1,
    borderColor: colors.inputBorder,
  },
  nearbySalonsImageStyle: {
    width: '100%',
    height: hp(18),
    borderTopLeftRadius: moderateScale(14),
    borderTopRightRadius: moderateScale(14),
  },
  nearbySalonsTextContainer: {
    ...styles.pt10,
    ...styles.pb15,
    ...styles.ph10,
  },
  btnContainer: {
    backgroundColor: colors.primarySurface,
    ...styles.pv5,
    ...styles.ph10,
    borderRadius: moderateScale(30),
  },
  likeBgContainer: {
    position: 'absolute',
    top: moderateScale(10),
    right: moderateScale(10),
    backgroundColor: colors.white,
    borderRadius: moderateScale(12),
    height: moderateScale(24),
    width: moderateScale(24),
    ...styles.center,
  },
});
