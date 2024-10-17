import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

// custom imports
import CText from '../../components/common/CText';
import {colors, styles} from '../../themes';
import strings from '../../i18n/strings';
import images from '../../assets/images';
import {deviceWidth, hp, moderateScale} from '../../common/constants';
import CTextInput from '../../components/common/CTextInput';
import {homeBannerData} from '../../api/constant';
import {StackNav} from '../../navigation/NavigationKeys';
import CategoriesListModal from '../../components/modals/CategoriesListModal';
import NearbySaloonComponent from '../../components/homeTab/NearbySaloonComponent';
import RenderSalonComponents from '../../components/RenderSalonComponents';
import AuthApi from '../../network/AuthApi';
import {Constants} from '../../constants/Constants';

export default function HomeTab(props) {
  let {navigation} = props;
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categoryRef = useRef(null);

  const onPressCategory = item => {
    categoryRef.current.show();
    setSelectedCategory(item);
  };

  const onChangeSearchFied = text => {
    setSearchText(text);
  };

  const onPressCategories = () => {
    navigation.navigate(StackNav.CategoriesScreen);
  };

  const onPressSalons = type => {
    navigation.navigate(StackNav.SalonsListScreen, {type: type});
  };

  const onPressNotification = () => {
    navigation.navigate(StackNav.Notification);
  };

  const CategoryHeader = ({name, onPrees}) => {
    return (
      <View style={styles.ph25}>
        <View style={styles.rowSpaceBetween}>
          <CText type={'M16'}>{name}</CText>
          <TouchableOpacity onPress={onPrees}>
            <CText type={'R14'} color={colors.grayText}>
              {strings.ViewAll}
            </CText>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const [categories, setCategories] = useState([]);
  const [salons, setSalons] = useState([]);

  const getApiCategories = async () => {
    try {
      const response = await AuthApi.categories();
      setCategories(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getApiSalons = async () => {
    try {
      const response = await AuthApi.salons();
      setSalons(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getApiCategories();
    getApiSalons();
  }, []);
  return (
    <View style={styles.mainContainerSurface}>
      <View style={localStyles.topHeaderContainer}>
        <Image
          source={images.profileImage}
          resizeMode={'cover'}
          style={localStyles.profileImageStyle}
        />
        <View style={localStyles.textContainer}>
          <CText type={'M16'}>Viren Radadiya</CText>
          <CText numberOfLines={1} color={colors.grayText} type={'R14'}>
            {'2715 Ash Dr. San Jose, San Jose, CA 95132'}
          </CText>
        </View>
        <TouchableOpacity
          onPress={onPressNotification}
          style={localStyles.notificationIconStyle}>
          <Ionicons
            name={'notifications-outline'}
            size={moderateScale(22)}
            color={colors.grayText}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flexGrow1}>
        <View style={styles.mainContainerWithRadius}>
          <View style={localStyles.topContainer}>
            <CTextInput
              value={searchText}
              onChangeText={onChangeSearchFied}
              placeHolder={strings.search}
              containerStyle={localStyles.ipContainerStyle}
              LeftIcon={() => (
                <Ionicons
                  name={'search-outline'}
                  size={moderateScale(22)}
                  color={colors.grayText}
                  style={styles.ml15}
                />
              )}
              RightIcon={() => (
                <View style={localStyles.inputRightIcnStyle}>
                  <Ionicons
                    name={'filter-outline'}
                    size={moderateScale(22)}
                    color={colors.white}
                  />
                </View>
              )}
            />
          </View>
          <View style={localStyles.mainContainerWithRadius}>
            <View style={styles.mb25}>
              <ScrollView
                contentContainerStyle={styles.ph25}
                showsHorizontalScrollIndicator={false}
                horizontal>
                {homeBannerData.map((itm, idx) => {
                  return (
                    <Image
                      key={idx.toString()}
                      source={itm}
                      style={localStyles.bannerImgesStyle}
                    />
                  );
                })}
              </ScrollView>
            </View>

            {/* -------------------Categories------------------- */}
            <CategoryHeader
              name={strings.Categories}
              onPrees={onPressCategories}
            />
            <View style={localStyles.mt10Mb25}>
              <ScrollView
                contentContainerStyle={styles.ph25}
                showsHorizontalScrollIndicator={false}
                horizontal>
                {categories.map(category => {
                  return (
                    <TouchableOpacity
                      key={category.id}
                      onPress={() => onPressCategory(category.name)}
                      style={[styles.mh10, styles.center]}>
                      <Image
                        source={{
                          uri: Constants.DOMAIN + category.gallery[0].path,
                        }}
                        style={localStyles.categoryImgesStyle}
                      />
                      <CText
                        style={styles.mt5}
                        type={'R14'}
                        color={colors.grayText}>
                        {category.name}
                      </CText>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>

            {/* -------------------Near by Salons------------------- */}
            <CategoryHeader
              name={strings.NearbySalons}
              onPrees={() => onPressSalons('NearBySalons')}
            />
            <View style={localStyles.mt10Mb25}>
              <ScrollView
                contentContainerStyle={styles.ph25}
                showsHorizontalScrollIndicator={false}
                horizontal>
                {salons.map((itm, idx) => (
                  <NearbySaloonComponent
                    key={idx.toString()}
                    itm={itm}
                    idx={idx}
                  />
                ))}
              </ScrollView>
            </View>

            {/* -------------------Popular Salons------------------- */}
            <CategoryHeader
              name={strings.PopularSalons}
              onPrees={() => onPressSalons('PopularSalons')}
            />
            <View style={localStyles.mt10Mb25}>
              <ScrollView
                contentContainerStyle={styles.ph25}
                showsHorizontalScrollIndicator={false}>
                {salons.map((itm, idx) => (
                  <RenderSalonComponents
                    itm={itm}
                    idx={idx}
                    key={idx.toString()}
                  />
                ))}
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
      <CategoriesListModal
        sheetRef={categoryRef}
        selectedCategory={selectedCategory}
      />
    </View>
  );
}

const localStyles = StyleSheet.create({
  profileImageStyle: {
    width: moderateScale(42),
    height: moderateScale(42),
    borderRadius: moderateScale(21),
    borderWidth: 2,
    borderColor: colors.white,
  },
  topHeaderContainer: {
    ...styles.rowSpaceBetween,
    ...styles.pv15,
    ...styles.ph20,
  },
  notificationIconStyle: {
    width: moderateScale(42),
    height: moderateScale(42),
    borderRadius: moderateScale(21),
    borderWidth: moderateScale(2),
    borderColor: colors.inputBorder,
    ...styles.center,
  },
  textContainer: {
    ...styles.flex,
    ...styles.ph15,
  },
  topContainer: {
    ...styles.ph25,
    ...styles.pv15,
  },
  ipContainerStyle: {
    backgroundColor: colors.white,
    borderRadius: moderateScale(30),
  },
  inputRightIcnStyle: {
    ...styles.center,
    ...styles.mr5,
    ...styles.p10,
    backgroundColor: colors.primary,
    borderRadius: moderateScale(30),
  },
  mainContainerWithRadius: {
    ...styles.mainContainerWithRadius,
    backgroundColor: colors.white,
    ...styles.pt25,
  },
  bannerImgesStyle: {
    width: deviceWidth - moderateScale(75),
    height: hp(17),
    ...styles.mh10,
    resizeMode: 'cover',
    borderRadius: moderateScale(14),
  },
  categoryImgesStyle: {
    width: moderateScale(60),
    height: moderateScale(60),
  },
  mt10Mb25: {
    ...styles.mt10,
    ...styles.mb25,
  },
});
