import {Alert, StyleSheet, Switch, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {colors, styles} from '../../themes';
import CHeader from '../../components/common/CHeader';
import strings from '../../i18n/strings';
import CText from '../../components/common/CText';
import KeyBoardAvoidWrapper from '../../components/common/KeyBoardAvoidWrapper';
import CTextInput from '../../components/common/CTextInput';
import CButton from '../../components/common/CButton';
import {moderateScale} from '../../common/constants';
import {genderDataArr, socialLoginType} from '../../api/constant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthNav} from '../../navigation/NavigationKeys';
import CDropdownInput from '../../components/common/CDropdownInput';

export default function SignUpScreen(props) {
  let {navigation} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [gender, setGender] = useState('');

  const onChangeEmailFied = text => {
    setEmail(text);
  };
  const onChangePasswordFied = text => {
    setPassword(text);
  };
  const onChangeNameFied = text => {
    setName(text);
  };
  const onChangeMobileNumberFied = text => {
    setMobileNumber(text);
  };
  const onChangeGenderFied = ({value}) => {
    setGender(value);
  };

  const onPressSignUpButton = () => {
    navigation.navigate(AuthNav.OtpVerificationScreen, {
      come_from: 'signup',
    });
  };

  const onPressLogin = () => {
    navigation.navigate(AuthNav.LoginScreen);
  };

  return (
    <View style={styles.mainContainerSurface}>
      <CHeader title={strings.SignUp} />
      <KeyBoardAvoidWrapper contentContainerStyle={styles.flexGrow1}>
        <View style={styles.mainContainerWithRadius}>
          <View style={localStyles.topContainer}>
            <CText color={colors.white} type={'R16'} align={'center'}>
              {strings.SignUpPageText}
            </CText>
          </View>
          <View style={localStyles.mainContainerWithRadius}>
            <CTextInput
              label={strings.FullName}
              value={name}
              onChangeText={onChangeNameFied}
              placeHolder={strings.EnterFullName}
              maxLength={50}
            />
            <CTextInput
              label={strings.Email}
              value={email}
              onChangeText={onChangeEmailFied}
              placeHolder={strings.EnterEmail}
              keyBoardType={'email-address'}
              maxLength={50}
            />
            <CTextInput
              label={strings.PhoneNumber}
              value={mobileNumber}
              onChangeText={onChangeMobileNumberFied}
              placeHolder={strings.EnterPhoneNumber}
              maxLength={50}
              keyBoardType={'phone-pad'}
            />
            <CTextInput
              label={strings.Password}
              value={password}
              onChangeText={onChangePasswordFied}
              placeHolder={strings.EnterPassword}
              isSecure
            />
            <CDropdownInput
              label={strings.Gender}
              data={genderDataArr}
              value={gender}
              placeholder={strings.SelectGender}
              onChange={onChangeGenderFied}
            />
            <CButton
              title={strings.SignUp}
              type={'m18'}
              color={colors.white}
              onPress={onPressSignUpButton}
              containerStyle={styles.mt20}
            />
            <View style={localStyles.signInWithContainer}>
              <View style={localStyles.lineStyle} />
              <CText style={styles.mh10} type={'M14'} color={colors.grayText}>
                {strings.OrSignInWith}
              </CText>
              <View style={localStyles.lineStyle} />
            </View>
            <View style={[styles.rowSpaceAround, styles.mh30]}>
              {socialLoginType.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index.toString()}
                    onPress={() => Alert.alert(`${item.name} Login Pressed `)}
                    style={localStyles.iconStyles}>
                    <Ionicons
                      name={item.icon}
                      size={moderateScale(24)}
                      color={colors.primary}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>

            <View style={localStyles.signInWithContainer}>
              <CText type={'R14'} color={colors.grayText}>
                {strings.DontHaveAnAccount}
              </CText>
              <TouchableOpacity onPress={onPressLogin}>
                <CText style={styles.ml5} type={'B16'} color={colors.primary}>
                  {strings.LogIn}
                </CText>
              </TouchableOpacity>
            </View>
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

  lineStyle: {
    height: moderateScale(2),
    backgroundColor: colors.inputBorder,
    ...styles.flex,
  },
  signInWithContainer: {
    ...styles.rowCenter,
    ...styles.mv25,
  },
  iconStyles: {
    ...styles.p10,
    borderWidth: moderateScale(1),
    borderColor: colors.primary,
    borderRadius: moderateScale(22),
  },
});
