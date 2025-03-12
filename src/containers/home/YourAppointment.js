import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';

// custom imports
import CHeader from '../../components/common/CHeader';
import {colors, styles} from '../../themes';
import {isIOS, moderateScale} from '../../common/constants';
import CText from '../../components/common/CText';
import CButton from '../../components/common/CButton';
import strings from '../../i18n/strings';
import SubDetailComponent from '../../components/homeTab/SubDetailComponent';
import SalonSubDetail from '../../components/homeTab/SalonSubDetail';
import ChoosePayment from '../../components/modals/ChoosePayment';

export default function YourAppointment({navigation, route}) {
  const {detail, dataBook} = route.params;

  const [totalPrice, setTotalPrice] = useState(null);
  const choosePaymentRef = React.useRef(null);

  const onPressPayNow = () => choosePaymentRef.current.show();

  return (
    <View style={styles.mainContainerSurface}>
      <CHeader title={'Your Appointment'} />
      <View style={styles.mainContainerWithRadius}>
        <SalonSubDetail />
        <KeyboardAvoidingView
          keyboardVerticalOffset={isIOS ? moderateScale(104) : null}
          style={[styles.flex]}
          behavior={isIOS ? 'padding' : null}>
          <SubDetailComponent
            isCoupon={true}
            dataBook={dataBook}
            discount={15}
            onTotalCaculated={setTotalPrice}
          />
        </KeyboardAvoidingView>

        <View style={localStyles.btnContainer}>
          <View>
            <CText type={'R14'} color={colors.grayText}>
              {strings.total}
            </CText>
            <CText type={'B16'}>{totalPrice || '$0.00'}</CText>
          </View>
          <CButton
            title={strings.payNow}
            type={'S16'}
            color={colors.white}
            containerStyle={localStyles.btnWithBgContainer}
            onPress={onPressPayNow}
          />
        </View>
      </View>
      <ChoosePayment
        SheetRef={choosePaymentRef}
        totalPrice={totalPrice}
        dataBook={dataBook}
      />
    </View>
  );
}

const localStyles = StyleSheet.create({
  btnContainer: {
    ...styles.pb10,
    ...styles.pt20,
    ...styles.ph20,
    ...styles.rowSpaceBetween,
    backgroundColor: colors.white,
  },
  btnWithBgContainer: {
    width: '65%',
  },
});
