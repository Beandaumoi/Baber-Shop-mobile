import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';

// custom imports
import SaloonSubDetailComponent from './SaloonSubDetailComponent';
import strings from '../../i18n/strings';
import CText from '../common/CText';
import {colors, styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import {saloonContact, saloonStaff, saloonTime} from '../../api/constant';
import images from '../../assets/images';

export default function AboutSaloonDetail() {
  const SaloonAboutUs = () => {
    return (
      <CText type={'r14'} style={styles.flex}>
        {strings.aboutUsDesc}
      </CText>
    );
  };

  const StaffDetails = ({item}) => {
    return (
      <View style={[styles.rowSpaceBetween, styles.mv5]}>
        <View style={styles.rowCenter}>
          <Image source={item.image} style={localStyles.staffImageStyle} />
          <View style={styles.ph10}>
            <CText type={'r14'} style={styles.flex}>
              {item.name}
            </CText>
            <CText type={'r12'} color={colors.grayText} style={styles.flex}>
              {'Barbers'}
            </CText>
          </View>
        </View>
        <View style={styles.rowCenter}>
          <Image source={images.fillStar} style={localStyles.fillStarImage} />
          <CText type={'r14'} color={colors.grayText}>
            {item.review}
          </CText>
        </View>
      </View>
    );
  };

  const OurStaffs = () => {
    return (
      <FlashList
        data={saloonStaff}
        renderItem={({item}) => <StaffDetails item={item} />}
        keyExtractor={(item, index) => index.toString()}
        estimatedItemSize={6}
      />
    );
  };

  const RenderOpenClosed = ({item}) => {
    return (
      <View style={[styles.rowSpaceBetween, styles.mv5]}>
        <CText
          type={'r14'}
          color={item.isClosed ? colors.red : colors.grayText}>
          {item.day}
        </CText>
        <CText type={'r14'} color={item.isClosed ? colors.red : colors.black}>
          {item.time}
        </CText>
      </View>
    );
  };

  const OpenClosed = () => {
    return (
      <FlashList
        data={saloonTime}
        renderItem={RenderOpenClosed}
        keyExtractor={(item, index) => index.toString()}
        estimatedItemSize={7}
      />
    );
  };

  const RenderContactUs = ({item}) => {
    return (
      <View style={styles.mv5}>
        <CText
          type={'r14'}
          color={item.isClosed ? colors.red : colors.grayText}>
          {item.title}
        </CText>
        <CText type={'r14'} color={item.isClosed ? colors.red : colors.black}>
          {item.value}
        </CText>
      </View>
    );
  };

  const ContactUs = () => {
    return (
      <FlashList
        data={saloonContact}
        renderItem={RenderContactUs}
        keyExtractor={(item, index) => index.toString()}
        estimatedItemSize={3}
      />
    );
  };
  return (
    <View>
      <SaloonSubDetailComponent
        title={strings.aboutUs}
        description={<SaloonAboutUs />}
      />
      <SaloonSubDetailComponent
        title={strings.ourStaffs}
        description={<OurStaffs />}
      />
      <SaloonSubDetailComponent
        title={strings.openClosed}
        description={<OpenClosed />}
      />
      <SaloonSubDetailComponent
        title={strings.contactUs}
        description={<ContactUs />}
      />
    </View>
  );
}

const localStyles = StyleSheet.create({
  staffImageStyle: {
    width: moderateScale(44),
    height: moderateScale(44),
    resizeMode: 'cover',
    borderRadius: moderateScale(25),
  },
  fillStarImage: {
    width: moderateScale(15),
    height: moderateScale(15),
    resizeMode: 'contain',
    ...styles.mr5,
  },
});
