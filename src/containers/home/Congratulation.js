import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';

// custom imports
import CHeader from '../../components/common/CHeader';
import strings from '../../i18n/strings';
import {colors, styles} from '../../themes';
import {ContatulationIcon} from '../../assets/svg';
import CText from '../../components/common/CText';
import SubDetailComponent from '../../components/homeTab/SubDetailComponent';
import CButton from '../../components/common/CButton';
import {moderateScale} from '../../common/constants';
import {StackNav, TabNav} from '../../navigation/NavigationKeys';

export default function Congratulation({navigation}) {
  const onPressHome = () => navigation.navigate(TabNav.Home);

  const onPressDetails = () => navigation.navigate(StackNav.PaymentDetail);

  return (
    <View style={styles.mainContainerSurface}>
      <CHeader isHideBack title={strings.congratulation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={localStyles.mainContainerWithRadius}>
        <View style={localStyles.iconContainer}>
          <ContatulationIcon />
          <CText type={'B24'} style={styles.mt20}>
            {'Order Succesfully'}
          </CText>
          <CText type={'R14'} color={colors.grayText} style={styles.mt10}>
            {'Your order has been placed successfully'}
          </CText>
        </View>
        <SubDetailComponent />
      </ScrollView>
      <View style={localStyles.btnContainer}>
        <CButton
          title={strings.backToHome}
          type={'S16'}
          color={colors.primary}
          containerStyle={localStyles.transparentBtnContainer}
          onPress={onPressHome}
        />
        <CButton
          title={strings.viewDetails}
          type={'S16'}
          color={colors.white}
          containerStyle={localStyles.btnWithBgContainer}
          onPress={onPressDetails}
        />
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  mainContainerWithRadius: {
    ...styles.mainContainerWithRadius,
    backgroundColor: colors.white,
  },
  iconContainer: {
    ...styles.mv20,
    ...styles.itemsCenter,
  },
  btnContainer: {
    ...styles.pb10,
    ...styles.pt20,
    ...styles.ph20,
    ...styles.rowSpaceAround,
    backgroundColor: colors.white,
  },
  btnWithBgContainer: {
    width: '45%',
  },
  transparentBtnContainer: {
    width: '45%',
    backgroundColor: colors.transparent,
    borderWidth: moderateScale(1),
    borderColor: colors.primary,
  },
});
