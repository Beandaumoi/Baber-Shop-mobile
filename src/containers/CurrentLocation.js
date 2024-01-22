import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

// custom imports
import {colors, styles} from '../themes';
import {moderateScale} from '../common/constants';
import CText from '../components/common/CText';
import strings from '../i18n/strings';
import {LocationIcon} from '../assets/svg';
import images from '../assets/images';
import RenderSalonComponents from '../components/RenderSalonComponents';
import {salonData} from '../api/constant';
import {StackNav} from '../navigation/NavigationKeys';

export default function CurrentLocation({navigation}) {
  const onPressBack = () => navigation.goBack();

  const onPressSearch = () => navigation.navigate(StackNav.FindNearbySalon);
  return (
    <View style={styles.mainContainerSurface}>
      <View style={localStyles.container}>
        <View style={localStyles.subContainer}>
          <TouchableOpacity
            onPress={onPressBack}
            style={localStyles.backIconSty}>
            <Ionicons
              name="arrow-back-outline"
              size={moderateScale(24)}
              color={colors.textColor}
            />
          </TouchableOpacity>
          <View>
            <CText type={'B16'} numberOfLines={1}>
              {strings.currentLocation}
            </CText>
            <View style={localStyles.addressContainer}>
              <LocationIcon />
              <CText align={'center'} type={'r12'} numberOfLines={1}>
                {'2715 Ash Dr. San Jose, So... '}
              </CText>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={onPressSearch}>
          <Ionicons
            name="search-outline"
            size={moderateScale(24)}
            color={colors.grayText}
          />
        </TouchableOpacity>
      </View>
      <View style={localStyles.mainContainerWithRadius}>
        <Image
          source={images.currentLocation}
          style={localStyles.locationImageStyle}
        />
        <View style={localStyles.actionSheetContainer}>
          <CText type={'B18'} color={colors.black}>
            {strings.sortBy}
          </CText>
          <CText type={'r14'} color={colors.grayText}>
            {'Found 120 Place near san freanclsco city'}
          </CText>
        </View>
        <View style={localStyles.secondaryContainer}>
          <FlatList
            data={salonData}
            renderItem={({item, index}) => (
              <RenderSalonComponents
                itm={item}
                idx={index}
                key={index.toString()}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  mainContainerWithRadius: {
    ...styles.mainContainerWithRadius,
    backgroundColor: colors.white,
  },
  subContainer: {
    ...styles.itemsCenter,
    ...styles.flexRow,
  },
  container: {
    ...styles.p20,
    ...styles.rowSpaceBetween,
    height: moderateScale(60),
  },
  backIconSty: {
    backgroundColor: colors.white,
    height: moderateScale(34),
    width: moderateScale(34),
    ...styles.center,
    ...styles.mr10,
    borderRadius: moderateScale(18),
  },
  addressContainer: {
    ...styles.flexRow,
    ...styles.center,
    ...styles.mt5,
  },
  locationImageStyle: {
    width: '100%',
    height: moderateScale(250),
    resizeMode: 'cover',
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
  },
  actionSheetContainer: {
    ...styles.ph20,
    ...styles.pv15,
    ...styles.pb30,
    top: -moderateScale(20),
    backgroundColor: colors.primarySurface,
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
  },
  secondaryContainer: {
    top: -moderateScale(40),
    ...styles.rowSpaceBetween,
    ...styles.ph20,
    ...styles.pt15,
    ...styles.pb15,
    backgroundColor: colors.white,
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
  },
});
