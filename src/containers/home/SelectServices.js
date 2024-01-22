import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';

// custom imports
import CButton from '../../components/common/CButton';
import {StackNav} from '../../navigation/NavigationKeys';
import {colors, styles} from '../../themes';
import CHeader from '../../components/common/CHeader';
import strings from '../../i18n/strings';
import {moderateScale} from '../../common/constants';
import ServiceSaloonDetail from '../../components/homeTab/ServiceSaloonDetail';

export default function SelectServices({navigation}) {
  const onPressContinue = () => navigation.navigate(StackNav.SelectDateAndTime);

  return (
    <View style={styles.mainContainerSurface}>
      <CHeader title={'Select Services'} />
      <View style={localStyles.mainContainerWithRadius}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ServiceSaloonDetail />
        </ScrollView>
      </View>
      <View style={{backgroundColor: colors.white}}>
        <CButton
          title={strings.continue}
          type={'B18'}
          color={colors.white}
          onPress={onPressContinue}
          containerStyle={localStyles.buttonStyle}
        />
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  mainContainerWithRadius: {
    ...styles.mainContainerWithRadius,
    backgroundColor: colors.white,
    ...styles.pv10,
    ...styles.ph20,
  },
  imageContainer: {
    ...styles.center,
    ...styles.mt20,
    ...styles.mb20,
  },
  imageStyle: {
    width: moderateScale(150),
    height: moderateScale(130),
  },
  nameContainer: {
    ...styles.center,
    ...styles.pv10,
    backgroundColor: colors.primarySurface,
    borderBottomLeftRadius: moderateScale(15),
    borderBottomRightRadius: moderateScale(15),
    width: moderateScale(150),
  },
  radioStyle: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  radiusStyle: {
    borderTopLeftRadius: moderateScale(15),
    borderTopRightRadius: moderateScale(15),
  },
  buttonStyle: {
    ...styles.mb10,
    ...styles.mt10,
    ...styles.mh20,
  },
});
