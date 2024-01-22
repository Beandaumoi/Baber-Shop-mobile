import React, {useState, useRef, useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet, FlatList, Image, View} from 'react-native';
import {OnBoardingSlideData} from '../api/constant';
import images from '../assets/images';
import {deviceHeight, deviceWidth, moderateScale} from '../common/constants';
import CText from '../components/common/CText';
// import CButton from '../components/common/CButton';
import strings from '../i18n/strings';
import {StackNav} from '../navigation/NavigationKeys';
import {colors, styles} from '../themes';
import {setOnBoarding} from '../utils/asyncstorage';

export default function OnBoarding({navigation}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  const _onViewableItemsChanged = useCallback(({viewableItems}) => {
    setCurrentIndex(viewableItems[0]?.index);
  }, []);
  const _viewabilityConfig = {itemVisiblePercentThreshold: 50};

  const onPressRightArrow = async () => {
    if (currentIndex === 2) {
      await setOnBoarding(true);
      navigation.reset({
        index: 0,
        routes: [{name: StackNav.AuthNavigation}],
      });
    } else {
      slideRef.current._listRef._scrollRef.scrollTo({
        x: deviceWidth * (currentIndex + 1),
      });
    }
  };

  const RenderOnboardingItem = useCallback(
    ({item, index}) => {
      return (
        <View style={localStyles.rendetItemConatiner}>
          <Image
            source={item.image}
            resizeMode="contain"
            style={localStyles.imageStyle}
          />
          <View style={localStyles.bottomView}>
            <CText align={'center'} type={'B24'}>
              {item.titleText}
            </CText>
            <CText
              color={colors.grayText}
              style={styles.mt10}
              align={'center'}
              type={'R16'}>
              {item.descriptionText}
            </CText>
          </View>
        </View>
      );
    },
    [OnBoardingSlideData],
  );

  return (
    <View style={styles.mainContainerSurface}>
      <FlatList
        data={OnBoardingSlideData}
        ref={slideRef}
        renderItem={({item, index}) => (
          <RenderOnboardingItem item={item} index={index} />
        )}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        horizontal
        onViewableItemsChanged={_onViewableItemsChanged}
        viewabilityConfig={_viewabilityConfig}
        pagingEnabled
      />

      <View style={localStyles.bottomContainer}>
        <View style={styles.rowCenter}>
          {OnBoardingSlideData.map((_, index) => (
            <View
              key={index.toString()}
              style={[
                localStyles.bottomIndicatorStyle,
                {
                  width:
                    index !== currentIndex
                      ? moderateScale(10)
                      : moderateScale(20),
                  backgroundColor: colors.primary,
                },
              ]}
            />
          ))}
        </View>
        <TouchableOpacity onPress={onPressRightArrow}>
          <Image source={images.buttonBg} style={localStyles.btnBgImage} />
          <View style={localStyles.btnTitleStyle}>
            <CText color={colors.white} align={'center'} type={'M18'}>
              {currentIndex === 2 ? strings.start : strings.next}
            </CText>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  rendetItemConatiner: {
    width: deviceWidth,
    ...styles.itemsCenter,
    ...styles.justifyBetween,
  },
  imageStyle: {
    width: deviceWidth - moderateScale(40),
    height: deviceHeight * 0.55,
  },
  bottomIndicatorStyle: {
    height: moderateScale(10),
    borderRadius: moderateScale(10),
    ...styles.mh5,
  },
  bottomView: {
    height: deviceHeight * 0.45,
    backgroundColor: colors.white,
    borderTopRightRadius: moderateScale(30),
    borderTopLeftRadius: moderateScale(30),
    ...styles.pv30,
    ...styles.ph20,
  },
  btnBgImage: {
    width: moderateScale(75),
    height: moderateScale(75),
  },
  bottomContainer: {
    ...styles.rowSpaceBetween,
    position: 'absolute',
    zIndex: 1,
    bottom: moderateScale(20),
    ...styles.ph25,
    width: deviceWidth,
  },
  btnTitleStyle: {
    position: 'absolute',
    width: moderateScale(75),
    height: moderateScale(75),
    ...styles.center,
  },
});
