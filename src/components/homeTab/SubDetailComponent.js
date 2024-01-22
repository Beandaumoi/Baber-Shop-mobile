import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

// custom imports
import CText from '../common/CText';
import {colors, styles} from '../../themes';
import strings from '../../i18n/strings';
import {moderateScale} from '../../common/constants';
import typography from '../../themes/typography';
import {PromoCode} from '../../assets/svg';

export default function SubDetailComponent({isCoupon = false}) {
  const SubContainer = ({title, value}) => {
    return (
      <View style={localStyles.subContainer}>
        <CText type={'s14'} color={colors.grayText}>
          {title}
          {': '}
        </CText>
        <CText type={'s14'} color={colors.black}>
          {value}
        </CText>
      </View>
    );
  };

  const SubTextContainer = ({title, value, color}) => {
    return (
      <View style={localStyles.subTextContainer}>
        <CText type={'m14'} color={!!color ? color : colors.grayText}>
          {title}
          {': '}
        </CText>
        <CText type={'m14'} color={colors.black}>
          {value}
        </CText>
      </View>
    );
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={localStyles.mainContainerWithRadius}>
      <SubContainer
        title={strings.dateAndTime}
        value={'Mon,12 Aug - 10:00 AM'}
      />
      <SubContainer title={strings.Gender} value={strings.male} />
      <View style={localStyles.serviceListContainer}>
        <View style={localStyles.serviceListTextStyle}>
          <CText type={'B16'} color={colors.textColor}>
            {strings.serviceList}
          </CText>
        </View>
        <View style={styles.ph15}>
          <SubTextContainer title={'Man’s Short Hair Cut'} value={'$30'} />
          <SubTextContainer title={'Hair Spa'} value={'$15'} />
          <SubTextContainer title={'Oii Treatment'} value={'$25'} />
          <SubTextContainer title={'CGST'} value={'$5'} />
          <SubTextContainer title={'SGST'} value={'$5'} />
        </View>
      </View>
      {!!isCoupon && (
        <View>
          <CText type={'B16'} style={styles.mt10}>
            {'Apply Coupon'}
          </CText>
          <View style={localStyles.promoCodeStyle}>
            <PromoCode style={styles.mh10} />
            <TextInput
              placeholder={'Enter coupon'}
              placeholderTextColor={colors.grayText}
              style={localStyles.promoCodeInputStyle}
            />
            <TouchableOpacity style={localStyles.applyBtnStyle}>
              <CText type={'M14'} color={colors.white}>
                {'Apply'}
              </CText>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <SubTextContainer title={'Total Time'} value={'55 Minutes'} />
      <SubTextContainer title={'Subtotal'} value={'$85.00'} />
      <SubTextContainer title={'Coupon Discount'} value={'-$15.00'} />
      <View style={localStyles.dividerStyle} />
      <SubTextContainer
        title={strings.total}
        value={'$70.00'}
        color={colors.textColor}
      />
    </ScrollView>
  );
}

const localStyles = StyleSheet.create({
  mainContainerWithRadius: {
    ...styles.mainContainerWithRadius,
    backgroundColor: colors.white,
    ...styles.ph25,
  },
  subContainer: {
    ...styles.ph15,
    ...styles.pv10,
    ...styles.flexRow,
    ...styles.itemsCenter,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(10),
    borderColor: colors.inputBorder,
    shadowColor: colors.lightGray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    elevation: 1,
    ...styles.mv10,
  },
  subTextContainer: {
    ...styles.pt10,
    ...styles.flexRow,
    ...styles.itemsCenter,
    ...styles.justifyBetween,
  },
  serviceListContainer: {
    ...styles.pb10,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(10),
    borderColor: colors.inputBorder,
    shadowColor: colors.lightGray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    elevation: 1,
    ...styles.mv10,
  },
  serviceListTextStyle: {
    ...styles.ph15,
    ...styles.pv10,
    borderBottomWidth: moderateScale(1),
    borderBottomColor: colors.inputBorder,
  },
  dividerStyle: {
    borderWidth: moderateScale(1),
    borderColor: colors.textColor,
    borderStyle: 'dashed',
    ...styles.mt10,
  },
  btnContainer: {
    ...styles.pb10,
    ...styles.pt20,
    ...styles.ph20,
    ...styles.rowSpaceBetween,
    backgroundColor: colors.white,
  },
  btnWithBgContainer: {
    width: '65%',
  },
  promoCodeInputStyle: {
    width: '60%',
    ...styles.pv15,
    ...styles.flex,
    ...typography.fontSizes.f14,
    ...typography.fontWeights.Medium,
  },
  promoCodeStyle: {
    ...styles.mv10,
    ...styles.flexRow,
    ...styles.itemsCenter,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(25),
    borderColor: colors.primaryLight,
  },
  applyBtnStyle: {
    ...styles.p15,
    backgroundColor: colors.primary,
    ...styles.center,
    borderTopEndRadius: moderateScale(25),
    borderBottomEndRadius: moderateScale(25),
  },
});
