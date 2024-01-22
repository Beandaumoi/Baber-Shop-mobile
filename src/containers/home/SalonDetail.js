import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FlashList} from '@shopify/flash-list';

// custom imports
import {colors, styles} from '../../themes';
import CHeader from '../../components/common/CHeader';
import {moderateScale} from '../../common/constants';
import CText from '../../components/common/CText';
import strings from '../../i18n/strings';
import {LocationIcon} from '../../assets/svg';
import CButton from '../../components/common/CButton';
import {saloonDetailCategoryData} from '../../api/constant';
import AboutSaloonDetail from '../../components/homeTab/AboutSaloonDetail';
import ServiceSaloonDetail from '../../components/homeTab/ServiceSaloonDetail';
import GallerySaloonDetail from '../../components/homeTab/GallerySaloonDetail';
import ReviewSaloonDetail from '../../components/homeTab/ReviewSaloonDetail';
import {StackNav} from '../../navigation/NavigationKeys';

export default function SalonDetail({route, navigation}) {
  const item = route.params?.item;
  const [isLiked, setIsLiked] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(strings.about);
  const [extraData, setExtraData] = useState(false);

  useEffect(() => {
    setExtraData(!extraData);
  }, [selectedCategory]);

  const onPressLikeButton = () => setIsLiked(!isLiked);

  const onPressSelect = item => {
    setSelectedCategory(item);
  };

  const onPressBookNow = () => navigation.navigate(StackNav.SelectGender);

  const RenderCategory = () => {
    switch (selectedCategory) {
      case strings.about:
        return <AboutSaloonDetail />;
      case strings.services:
        return <ServiceSaloonDetail />;
      case strings.gallery:
        return <GallerySaloonDetail />;
      case strings.review:
        return <ReviewSaloonDetail />;
      default:
        return <AboutSaloonDetail />;
    }
  };

  const RightIcon = () => {
    return (
      <View style={localStyles.rightContainer}>
        <TouchableOpacity
          onPress={onPressLikeButton}
          style={localStyles.likeBgContainer}>
          <Ionicons
            name={isLiked ? 'heart' : 'heart-outline'}
            color={colors.primary}
            size={moderateScale(22)}
          />
        </TouchableOpacity>
        <TouchableOpacity style={localStyles.likeBgContainer}>
          <Ionicons
            name={'share-social-outline'}
            color={colors.primary}
            size={moderateScale(22)}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const RenderCategoryItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressSelect(item)}
        style={[
          localStyles.categoryItm,
          selectedCategory == item && {
            borderBottomWidth: 1,
            borderColor: colors.white,
          },
        ]}>
        <CText
          type={'s16'}
          color={selectedCategory === item ? colors.white : colors.lightGray}>
          {item}
        </CText>
      </TouchableOpacity>
    );
  };

  return (
    <View style={localStyles.root}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.flex}>
        <ImageBackground source={item.image} style={localStyles.mainImageStyle}>
          <CHeader rightIcon={<RightIcon />} />
        </ImageBackground>
        <View style={localStyles.mainContainerWithRadius}>
          <View style={styles.ph20}>
            <View style={styles.rowSpaceBetween}>
              <CText type={'B18'}>{item.name}</CText>
              <TouchableOpacity style={localStyles.btnContainer}>
                <CText type={'m14'} color={colors.primary}>
                  {strings.open}
                </CText>
              </TouchableOpacity>
            </View>
            <View style={localStyles.addressStyle}>
              <LocationIcon />
              <CText
                style={styles.ml5}
                type={'R14'}
                numberOfLines={1}
                color={colors.grayText}>
                {item.location}
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
                  {item.rating}
                  <CText type={'R14'} color={colors.grayText}>
                    {` (${item.noOfPeopleRated})`}
                  </CText>
                </CText>
              </View>
              <View style={styles.rowStart}>
                <Ionicons
                  name={'book-outline'}
                  size={moderateScale(18)}
                  color={colors.primary}
                  style={styles.mr5}
                />
                <CText type={'R14'}>{strings.direction}</CText>
              </View>
            </View>
          </View>
        </View>
        <View style={localStyles.secondContainerWithRadius}>
          <FlashList
            data={saloonDetailCategoryData}
            renderItem={RenderCategoryItem}
            extraData={extraData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            estimatedItemSize={4}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={localStyles.bottomContainer}>
          <RenderCategory />
        </View>
      </ScrollView>
      <CButton
        title={strings.BookNow}
        type={'B18'}
        color={colors.white}
        onPress={onPressBookNow}
        containerStyle={localStyles.buttonStyle}
      />
    </View>
  );
}

const localStyles = StyleSheet.create({
  root: {
    ...styles.flex,
    backgroundColor: colors.white,
  },
  mainImageStyle: {
    width: '100%',
    height: moderateScale(250),
    resizeMode: 'cover',
  },
  rightContainer: {
    ...styles.rowCenter,
  },
  likeBgContainer: {
    backgroundColor: colors.white,
    borderRadius: moderateScale(18),
    height: moderateScale(36),
    width: moderateScale(36),
    ...styles.center,
    ...styles.ml10,
  },
  mainContainerWithRadius: {
    ...styles.mainContainerWithRadius,
    backgroundColor: colors.white,
    ...styles.pt20,
    top: moderateScale(-20),
  },
  secondContainerWithRadius: {
    backgroundColor: colors.primary,
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
    ...styles.pt20,
    ...styles.ph20,
  },
  btnContainer: {
    backgroundColor: colors.primarySurface,
    ...styles.pv5,
    ...styles.ph15,
    borderRadius: moderateScale(30),
  },
  addressStyle: {
    ...styles.flexRow,
    ...styles.itemsCenter,
    ...styles.mt10,
    ...styles.mb5,
  },
  buttonStyle: {
    ...styles.mb10,
    ...styles.mt10,
    ...styles.mh20,
  },
  categoryItm: {
    ...styles.ph10,
    ...styles.pv5,
    ...styles.mr10,
  },
  bottomContainer: {
    ...styles.ph20,
    ...styles.flex,
    backgroundColor: colors.white,
  },
});
