import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {colors, styles} from '../../themes';
import CHeader from '../../components/common/CHeader';
import strings from '../../i18n/strings';
import CText from '../../components/common/CText';
import KeyBoardAvoidWrapper from '../../components/common/KeyBoardAvoidWrapper';
import CTextInput from '../../components/common/CTextInput';
import CButton from '../../components/common/CButton';
import {AuthNav} from '../../navigation/NavigationKeys';

export default function ForgotPasswordScreen(props) {
  let {navigation} = props;
  const [email, setEmail] = useState('');

  const onChangeEmailFied = text => {
    setEmail(text);
  };

  const onPressForgitPassword = () => {
    navigation.navigate(AuthNav.OtpVerificationScreen, {
      come_from: 'forgot_password',
    });
  };

  return (
    <View style={styles.mainContainerSurface}>
      <CHeader title={strings.ForgotPassword} />
      <KeyBoardAvoidWrapper contentContainerStyle={styles.flexGrow1}>
        <View style={styles.mainContainerWithRadius}>
          <View style={localStyles.topContainer}>
            <CText color={colors.white} type={'R16'} align={'center'}>
              {strings.forgotPasswordText}
            </CText>
          </View>
          <View style={localStyles.mainContainerWithRadius}>
            <View style={styles.flex}>
              <CTextInput
                label={strings.EmailPhoneNumber}
                value={email}
                onChangeText={onChangeEmailFied}
                placeHolder={strings.EnterEmailPhoneNumber}
                keyBoardType={'email-address'}
                maxLength={50}
              />
            </View>
            <CButton
              title={strings.ForgotPassword}
              type={'m18'}
              color={colors.white}
              onPress={onPressForgitPassword}
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
    ...styles.ph20,
    ...styles.pt10,
  },
  topContainer: {
    ...styles.mv25,
    width: '80%',
    ...styles.selfCenter,
  },
});
