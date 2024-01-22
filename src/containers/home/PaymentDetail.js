import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';

// custom imports
import CHeader from '../../components/common/CHeader';
import {colors, styles} from '../../themes';
import strings from '../../i18n/strings';
import {moderateScale} from '../../common/constants';
import CButton from '../../components/common/CButton';
import SalonSubDetail from '../../components/homeTab/SalonSubDetail';
import SubDetailComponent from '../../components/homeTab/SubDetailComponent';
import {TabNav} from '../../navigation/NavigationKeys';
import CancelOrderModal from '../../components/modals/CancelOrderModal';

export default function PaymentDetail({navigation}) {
  const [visible, setVisible] = React.useState(false);

  const onPressCancel = () => setVisible(!visible);
  const onPressHome = () => navigation.navigate(TabNav.Home);

  return (
    <View style={styles.mainContainerSurface}>
      <CHeader title={strings.details} />
      <View style={styles.mainContainerWithRadius}>
        <SalonSubDetail />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={localStyles.mainContainerWithRadius}>
          <SubDetailComponent />
        </ScrollView>
      </View>
      <View style={localStyles.btnContainer}>
        <CButton
          title={strings.cancel}
          type={'S16'}
          color={colors.red}
          containerStyle={localStyles.transparentBtnContainer}
          onPress={onPressCancel}
        />
        <CButton
          title={strings.backToHome}
          type={'S16'}
          color={colors.white}
          containerStyle={localStyles.btnWithBgContainer}
          onPress={onPressHome}
        />
      </View>
      <CancelOrderModal visible={visible} onPressClose={onPressCancel} />
    </View>
  );
}

const localStyles = StyleSheet.create({
  mainContainerWithRadius: {
    ...styles.mainContainerWithRadius,
    backgroundColor: colors.white,
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
    borderColor: colors.red,
  },
});
