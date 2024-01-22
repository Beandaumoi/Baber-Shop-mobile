import {FlatList, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';

// custom imports
import CText from '../common/CText';
import images from '../../assets/images';
import {colors, styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import {saloonReview} from '../../api/constant';

export default function ReviewSaloonDetail() {
  const RenderStar = ({item, index}) => {
    return (
      <Image
        source={item.review < index + 1 ? images.emptyStar : images.fillStar}
        style={localStyles.starContainer}
      />
    );
  };

  const StaffDetails = ({item}) => {
    return (
      <View style={localStyles.rootContainer}>
        <View style={[styles.rowSpaceBetween, styles.mt5]}>
          <View style={styles.rowCenter}>
            <Image source={item.image} style={localStyles.staffImageStyle} />
            <View style={styles.ph10}>
              <CText type={'B14'} style={styles.flex}>
                {item?.name}
              </CText>
              <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={({itm, index}) => (
                  <RenderStar item={item} index={index} />
                )}
                keyExtractor={item => item.toString()}
                horizontal
                bounces={false}
              />
            </View>
          </View>
          <View style={styles.rowCenter}>
            <CText type={'r14'} color={colors.grayText}>
              {item?.time}
            </CText>
          </View>
        </View>
        <CText
          type={'r14'}
          color={colors.grayText}
          style={[styles.flex, styles.mt5]}>
          {item?.reviewText}
        </CText>
      </View>
    );
  };

  return (
    <View>
      <FlashList
        data={saloonReview}
        renderItem={StaffDetails}
        keyExtractor={(item, index) => index.toString()}
        estimatedItemSize={10}
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
  starContainer: {
    width: moderateScale(15),
    height: moderateScale(15),
    resizeMode: 'contain',
    ...styles.mt5,
  },
  rootContainer: {
    ...styles.ph20,
    ...styles.pv10,
    ...styles.mt10,
    borderRadius: moderateScale(12),
    borderWidth: 1,
    borderColor: colors.inputBorder,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 1,
    backgroundColor: colors.white,
  },
});
