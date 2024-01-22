import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

// custom imports
import {colors, styles} from '../../themes';
import strings from '../../i18n/strings';
import CHeader from '../../components/common/CHeader';
import images from '../../assets/images';
import {moderateScale} from '../../common/constants';
import CText from '../../components/common/CText';
import {socialLoginType} from '../../api/constant';

export default function ReferAndEarn() {
  return (
    <View style={styles.mainContainerSurface}>
      <CHeader title={strings.referEarn} />
      <View style={localStyles.mainContainerWithRadius}>
        <Image source={images.referAndEarn} style={localStyles.imageStyle} />
        <CText type={'b20'} align={'center'} style={styles.mb10}>
          {strings.referFriend}
        </CText>
        <CText
          type={'m16'}
          color={colors.grayText}
          align={'center'}
          style={styles.mb10}>
          {strings.referFriendDesc}
        </CText>
        <View style={localStyles.copyContainer}>
          <CText type={'m16'} style={styles.p10} color={colors.grayText}>
            {'AHDJAEL2021RV1'}
          </CText>
          <TouchableOpacity style={localStyles.copyBtnContainer}>
            <Ionicons
              name={'copy'}
              color={colors.white}
              size={moderateScale(24)}
            />
          </TouchableOpacity>
        </View>
        <View style={localStyles.signInWithContainer}>
          <View style={localStyles.lineStyle} />
          <CText style={styles.mh10} type={'M14'} color={colors.grayText}>
            {strings.or}
          </CText>
          <View style={localStyles.lineStyle} />
        </View>
        <View style={[styles.rowSpaceAround, styles.mh30]}>
          {socialLoginType.map((item, index) => {
            return (
              <TouchableOpacity
                key={index.toString()}
                style={localStyles.iconStyles}>
                <Ionicons
                  name={item.icon}
                  size={moderateScale(24)}
                  color={colors.primary}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  mainContainerWithRadius: {
    ...styles.mainContainerWithRadius,
    backgroundColor: colors.white,
    ...styles.pt20,
    ...styles.ph20,
  },
  imageStyle: {
    width: moderateScale(150),
    height: moderateScale(150),
    ...styles.selfCenter,
    ...styles.mv15,
  },
  copyContainer: {
    borderWidth: moderateScale(1),
    borderColor: colors.primaryLight,
    borderRadius: moderateScale(8),
    ...styles.rowSpaceBetween,
  },
  copyBtnContainer: {
    backgroundColor: colors.primary,
    ...styles.p10,
    borderTopRightRadius: moderateScale(8),
    borderBottomRightRadius: moderateScale(8),
  },

  lineStyle: {
    height: moderateScale(2),
    backgroundColor: colors.inputBorder,
    ...styles.flex,
  },
  signInWithContainer: {
    ...styles.rowCenter,
    ...styles.mv25,
  },
  iconStyles: {
    ...styles.p10,
    borderWidth: moderateScale(1),
    borderColor: colors.primary,
    borderRadius: moderateScale(22),
  },
});
