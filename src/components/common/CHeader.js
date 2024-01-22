import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// custom imports
import {colors, styles} from '../../themes';
import CText from './CText';
import {moderateScale} from '../../common/constants';

export default function CHeader(props) {
  const {title, onPressBack, isHideBack, rightIcon} = props;
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();

  return (
    <View style={[localStyles.container, !!isHideBack && styles.ph10]}>
      {!isHideBack && (
        <TouchableOpacity
          onPress={onPressBack || goBack}
          style={[localStyles.backIconSty, {left: moderateScale(15)}]}>
          <Ionicons
            name="arrow-back-outline"
            size={moderateScale(24)}
            color={colors.textColor}
          />
        </TouchableOpacity>
      )}
      <View style={[styles.flex, styles.mh40]}>
        <CText align={'center'} type={'M18'} numberOfLines={1}>
          {title}
        </CText>
      </View>
      {!!rightIcon && rightIcon}
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {
    ...styles.rowSpaceBetween,
    ...styles.ph20,
    ...styles.pv15,
    height: moderateScale(60),
  },
  backIconSty: {
    backgroundColor: colors.white,
    ...styles.p5,
    borderRadius: moderateScale(20),
    position: 'absolute',
    zIndex: 1,
  },
});
