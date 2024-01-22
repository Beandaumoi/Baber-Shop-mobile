import {
  Image,
  SectionList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

// custom imports
import {colors, styles} from '../../themes';
import strings from '../../i18n/strings';
import CHeader from '../../components/common/CHeader';
import {MenuIcon} from '../../assets/svg';
import {notificationData} from '../../api/constant';
import CText from '../../components/common/CText';
import {moderateScale} from '../../common/constants';

export default function Notification() {
  const RightIcon = () => {
    return (
      <TouchableOpacity>
        <MenuIcon />
      </TouchableOpacity>
    );
  };

  const RenderItem = ({item, index}) => {
    return (
      <TouchableOpacity style={localStyles.renderContainer}>
        <View style={localStyles.innerContainer}>
          {item?.svgIcon ? (
            item?.svgIcon
          ) : (
            <Image source={{uri: item?.image}} style={localStyles.iconStyle} />
          )}
          <View style={localStyles.textStyle}>
            <CText numberOfLines={1} type={'s16'}>
              {item?.title}
            </CText>
            <CText
              type={'m14'}
              color={colors.grayText}
              numberOfLines={1}
              style={styles.mt5}>
              {item?.description}
            </CText>
          </View>
        </View>
        <CText
          type={'r12'}
          color={colors.grayText}
          numberOfLines={1}
          style={styles.mt5}>
          {item?.time}
        </CText>
      </TouchableOpacity>
    );
  };

  const RenderSectionHeader = ({section: {title}}) => {
    return (
      <CText numberOfLines={1} style={[styles.ml20, styles.mb10]} type={'b18'}>
        {title}
      </CText>
    );
  };

  return (
    <View style={styles.mainContainerSurface}>
      <CHeader title={strings.notification} rightIcon={<RightIcon />} />
      <View style={localStyles.mainContainerWithRadius}>
        <SectionList
          sections={notificationData}
          keyExtractor={(item, index) => item + index}
          renderItem={RenderItem}
          renderSectionHeader={RenderSectionHeader}
          stickySectionHeadersEnabled={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  mainContainerWithRadius: {
    ...styles.mainContainerWithRadius,
    backgroundColor: colors.white,
    ...styles.pt20,
  },
  renderContainer: {
    ...styles.p15,
    ...styles.pb20,
    ...styles.mb5,
    ...styles.mh20,
    borderRadius: moderateScale(10),
    borderBottomWidth: moderateScale(1),
    borderBottomColor: colors.inputBorder,
  },
  innerContainer: {
    ...styles.flexRow,
    ...styles.alignCenter,
  },
  iconBgContainer: {
    ...styles.center,
    height: moderateScale(50),
    width: moderateScale(50),
    borderRadius: moderateScale(25),
  },
  iconStyle: {
    height: moderateScale(42),
    width: moderateScale(42),
    borderRadius: moderateScale(21),
    resizeMode: 'contain',
  },
  textStyle: {
    ...styles.mh10,
    ...styles.flex,
    ...styles.justifyCenter,
  },
});
