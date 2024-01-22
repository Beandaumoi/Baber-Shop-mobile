import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';

// custom imports
import CHeader from '../../components/common/CHeader';
import {colors, styles} from '../../themes';
import MyAppointmentBookingComponents from '../../components/MyAppointmentBookingComponents';
import CText from '../../components/common/CText';
import strings from '../../i18n/strings';
import {moderateScale} from '../../common/constants';
import CButton from '../../components/common/CButton';
import WriteReview from '../../components/modals/WriteReview';

export default function MyBookingDetail({route}) {
  const item = route.params?.item;
  const reviewSheerRef = React.useRef('');

  const onPressReview = () => reviewSheerRef.current?.show();

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
    <View style={styles.mainContainerSurface}>
      <CHeader title={strings.myAppointmentBooking} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={localStyles.mainContainerWithRadius}>
        <MyAppointmentBookingComponents itm={item} />
        <SubContainer title={strings.dateAndTime} value={item.time} />
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
        <SubTextContainer title={'Total Time'} value={'55 Minutes'} />
        <SubTextContainer title={'Subtotal'} value={'$85.00'} />
        <SubTextContainer title={'Coupon Discount'} value={'-$15.00'} />
        <View style={localStyles.dividerStyle} />
        <SubTextContainer
          title={'Total'}
          value={'$70.00'}
          color={colors.textColor}
        />
        <View style={localStyles.btnContainer}>
          <CButton
            title={strings.rebook}
            type={'S16'}
            color={colors.primary}
            containerStyle={localStyles.transparentBtnContainer}
          />
          <CButton
            title={strings.review}
            type={'S16'}
            color={colors.white}
            containerStyle={localStyles.btnWithBgContainer}
            onPress={onPressReview}
          />
        </View>
      </ScrollView>
      <WriteReview SheetRef={reviewSheerRef} />
    </View>
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
    ...styles.flex,
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
    ...styles.flex,
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
    ...styles.rowSpaceAround,
  },
  btnWithBgContainer: {
    width: '45%',
  },
  transparentBtnContainer: {
    width: '45%',
    backgroundColor: colors.transparent,
    borderWidth: moderateScale(1),
    borderColor: colors.primary,
  },
});
