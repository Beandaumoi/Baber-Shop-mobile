import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FlashList} from '@shopify/flash-list';
import {useDispatch} from 'react-redux';

// custom imports
import {logout} from '../../redux/reducer/AuthReducer';
import {colors, styles} from '../../themes';
import CText from '../../components/common/CText';
import strings from '../../i18n/strings';
import images from '../../assets/images';
import {moderateScale} from '../../common/constants';
import {profileCategoryData} from '../../api/constant';
import CHeader from '../../components/common/CHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ACCESS_TOKEN} from '../../utils/keys';
import {StackNav} from '../../navigation/NavigationKeys';

export default function ProfileTab({navigation}) {
  // const onPressItem = item => {
  //   if (!!item.route) {
  //     navigation.navigate(item.route);
  //   } else {
  //     AsyncStorage.removeItem(ACCESS_TOKEN).then(
  //       navigation.reset({
  //         index: 0,
  //         routes: [{name: StackNav.AuthNavigation}],
  //       }),
  //     );
  //   }
  // };
  const dispatch = useDispatch();
  const onPressItem = async item => {
    if (!!item.route) {
      navigation.navigate(item.route);
    } else {
      // Gọi action logout từ Redux
      dispatch(logout());

      // Xóa token từ AsyncStorage
      await AsyncStorage.removeItem(ACCESS_TOKEN);

      // Reset navigation về màn hình Auth
      navigation.reset({
        index: 0,
        routes: [{name: StackNav.AuthNavigation}],
      });
    }
  };

  const RenderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => onPressItem(item)}
        style={localStyles.renderItemContainer}>
        <View style={styles.rowCenter}>
          {item.svgICon}
          <CText type={'S14'} style={styles.ml10}>
            {item.name}
          </CText>
        </View>
        <Ionicons
          name={'chevron-forward-outline'}
          size={moderateScale(20)}
          color={colors.textColor}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainerSurface}>
      <CHeader isHideBack title={strings.Profile} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.flexGrow1}>
        <View style={styles.mainContainerWithRadius}>
          <View style={localStyles.topContainer}>
            <ImageBackground
              source={images.userImage}
              style={localStyles.userImageStyle}>
              <Image
                source={images.cameraIcon}
                style={localStyles.cameraIconStyle}
              />
            </ImageBackground>
            <CText type={'M16'} color={colors.white} align={'center'}>
              Viren Radadiya
            </CText>
            <CText
              align={'center'}
              color={colors.white}
              numberOfLines={1}
              style={styles.mb20}
              type={'R14'}>
              {'ibnerieadazz@gmail.com'}
            </CText>
          </View>
          <View style={localStyles.mainContainerWithRadius}>
            <FlashList
              data={profileCategoryData}
              renderItem={RenderItem}
              keyExtractor={(item, index) => index.toString()}
              estimatedItemSize={15}
              showsVerticalScrollIndicator={false}
              bounces={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const localStyles = StyleSheet.create({
  userImageStyle: {
    height: moderateScale(80),
    width: moderateScale(80),
    borderRadius: moderateScale(40),
    alignSelf: 'center',
    ...styles.mt20,
    ...styles.mb10,
  },
  cameraIconStyle: {
    height: moderateScale(30),
    width: moderateScale(30),
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  mainContainerWithRadius: {
    ...styles.mainContainerWithRadius,
    backgroundColor: colors.white,
    ...styles.pt10,
  },
  renderItemContainer: {
    ...styles.rowSpaceBetween,
    ...styles.mh20,
    ...styles.pv15,
    borderBottomWidth: moderateScale(1),
    borderColor: colors.inputBorder,
  },
  iconStyle: {
    height: moderateScale(45),
    width: moderateScale(45),
    ...styles.mr10,
    borderRadius: moderateScale(45) / 2,
  },
  topContainer: {
    ...styles.ph25,
    ...styles.pv15,
  },
});
