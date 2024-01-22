import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

// custom imports
import CHeader from '../../components/common/CHeader';
import {colors, styles} from '../../themes';
import strings from '../../i18n/strings';
import images from '../../assets/images';
import {moderateScale} from '../../common/constants';
import CText from '../../components/common/CText';
import CButton from '../../components/common/CButton';
import {StackNav} from '../../navigation/NavigationKeys';

export default function Locationtab({navigation}) {
  const onPressFind = () => navigation.navigate(StackNav.CurrentLocation);
  return (
    <View style={styles.mainContainerSurface}>
      <CHeader title={strings.currentLocation} />
      <View style={localStyles.mainContainerWithRadius}>
        <Image
          source={images.locationImage}
          style={localStyles.locationImageStyle}
        />
        <CText style={styles.mb10} align={'center'} type={'S16'}>
          {strings.locationTitle}
        </CText>
        <CText
          style={styles.mv10}
          align={'center'}
          type={'r14'}
          color={colors.grayText}>
          {strings.locationSubTitle}
        </CText>
        <CButton
          title={strings.findSalons}
          type={'S16'}
          color={colors.white}
          containerStyle={localStyles.btnWithBgContainer}
          onPress={onPressFind}
        />
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  mainContainerWithRadius: {
    ...styles.mainContainerWithRadius,
    backgroundColor: colors.white,
    ...styles.ph20,
  },
  locationImageStyle: {
    width: '80%',
    height: moderateScale(230),
    resizeMode: 'contain',
    ...styles.selfCenter,
    ...styles.mv15,
  },
  btnWithBgContainer: {
    ...styles.mv20,
  },
});
