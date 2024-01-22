import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {colors, styles} from '../../themes';
import CHeader from '../../components/common/CHeader';
import KeyBoardAvoidWrapper from '../../components/common/KeyBoardAvoidWrapper';
import CText from '../../components/common/CText';
import strings from '../../i18n/strings';
import {moderateScale} from '../../common/constants';
import typography from '../../themes/typography';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CButton from '../../components/common/CButton';
import {AuthNav, StackNav} from '../../navigation/NavigationKeys';
import {setAuthToken} from '../../utils/asyncstorage';

export default function OtpVerificationScreen(props) {
  let {navigation, route} = props;
  let come_from = route.params.come_from;
  const [otp, setOtp] = useState('');

  const onPressResend = () => {
    console.log('on press resend');
  };

  const onPressConfirm = async () => {
    if (come_from === 'forgot_password') {
      navigation.navigate(AuthNav.CreatePasswordScreen);
    } else {
      await setAuthToken(true);
      navigation.reset({
        index: 0,
        routes: [{name: StackNav.TabNavigation}],
      });
    }
  };

  const onOtpChange = otp => setOtp(otp);

  return (
    <View style={styles.mainContainerSurface}>
      <CHeader
        title={
          come_from === 'forgot_password'
            ? strings.ForgotPassword
            : strings.Verification
        }
      />
      <KeyBoardAvoidWrapper contentContainerStyle={styles.flexGrow1}>
        <View style={styles.mainContainerWithRadius}>
          <View style={localStyles.topContainer}>
            <CText color={colors.white} type={'R16'} align={'center'}>
              {come_from === 'forgot_password'
                ? strings.forgotPasswordVerificationText
                : strings.sendCodeText}
            </CText>
          </View>
          <View style={localStyles.mainContainerWithRadius}>
            <View style={styles.flex}>
              <OTPInputView
                style={localStyles.otpInputStyle}
                pinCount={6}
                code={otp}
                onCodeChanged={onOtpChange}
                autoFocusOnLoad={false}
                codeInputFieldStyle={localStyles.underlineStyleBase}
                codeInputHighlightStyle={localStyles.underlineStyleHighLighted}
              />
              <View style={localStyles.resendContainer}>
                <CText type={'R14'} color={colors.grayText}>
                  {strings.dontReciveCode}
                </CText>
                <TouchableOpacity onPress={onPressResend}>
                  <CText style={styles.ml5} type={'B16'} color={colors.primary}>
                    {strings.resendCode}
                  </CText>
                </TouchableOpacity>
              </View>
            </View>
            <CButton
              title={strings.send}
              type={'m18'}
              color={colors.white}
              onPress={onPressConfirm}
              containerStyle={styles.mb10}
            />
          </View>
        </View>
      </KeyBoardAvoidWrapper>
    </View>
  );
}

const localStyles = StyleSheet.create({
  mainContainerWithRadius: {
    ...styles.mainContainerWithRadius,
    backgroundColor: colors.white,
    ...styles.ph25,
    ...styles.pt10,
  },
  topContainer: {
    ...styles.mv25,
    width: '80%',
    ...styles.selfCenter,
  },
  resendContainer: {
    ...styles.mb20,
    ...styles.mt40,
    ...styles.rowCenter,
  },
  otpInputStyle: {
    height: moderateScale(50),
    ...styles.selfCenter,
    ...styles.mt20,
  },
  underlineStyleBase: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(12),
    borderColor: colors.inputBorder,
    ...typography.fontWeights.Regular,
    ...typography.fontSizes.f20,
    color: colors.textColor,
  },
  underlineStyleHighLighted: {
    borderColor: colors.primary,
  },
});
