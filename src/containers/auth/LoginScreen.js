import {Alert, StyleSheet, Switch, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {colors, styles} from '../../themes';
import CHeader from '../../components/common/CHeader';
import strings from '../../i18n/strings';
import CText from '../../components/common/CText';
import KeyBoardAvoidWrapper from '../../components/common/KeyBoardAvoidWrapper';
import CTextInput from '../../components/common/CTextInput';
import CButton from '../../components/common/CButton';
import {moderateScale} from '../../common/constants';
import {socialLoginType} from '../../api/constant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthNav, StackNav} from '../../navigation/NavigationKeys';
import {Login} from '../../redux/action/AuthAction';

export default function LoginScreen(props) {
  let {navigation} = props;
  const [phoneNumber, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [saveValue, setSaveValue] = useState(false);

  const dispatch = useDispatch();
  const {isAuthenticated, error, loading} = useSelector(state => state.auth);

  const onChangeEmailFied = text => {
    setEmail(text);
  };
  const onChangePasswordFied = text => {
    setPassword(text);
  };
  const onPressLoginButton = async () => {
    if (!phoneNumber || !password) {
      Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ thông tin đăng nhập');
      return;
    }

    dispatch(Login({phoneNumber, password}))
      .unwrap()
      .catch(error => {
        Alert.alert('Đăng nhập thất bại', error.message || 'Vui lòng thử lại!');
      });
  };

  const onPressForgotPassword = () => {
    navigation.navigate(AuthNav.ForgotPasswordScreen);
  };

  const onPressSignUp = () => {
    navigation.navigate(AuthNav.SignUpScreen);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigation.reset({
        index: 0,
        routes: [{name: StackNav.TabNavigation}],
      });
    }
  }, [isAuthenticated, navigation]);

  return (
    <View style={styles.mainContainerSurface}>
      <CHeader title={strings.LogIn} isHideBack />
      <KeyBoardAvoidWrapper contentContainerStyle={styles.flexGrow1}>
        <View style={styles.mainContainerWithRadius}>
          <View style={localStyles.topContainer}>
            <CText color={colors.white} type={'R16'} align={'center'}>
              {strings.loginPageText}
            </CText>
          </View>
          <View style={localStyles.mainContainerWithRadius}>
            <CTextInput
              label={strings.EmailPhoneNumber}
              value={phoneNumber}
              onChangeText={onChangeEmailFied}
              placeHolder={strings.EnterEmailPhoneNumber}
              keyBoardType={'email-address'}
              maxLength={50}
            />
            <CTextInput
              label={strings.Password}
              value={password}
              onChangeText={onChangePasswordFied}
              placeHolder={strings.EnterPassword}
              isSecure
            />
            <View style={localStyles.forgotPasswordContainer}>
              <View style={styles.rowStart}>
                <Switch
                  value={saveValue}
                  trackColor={{false: colors.grayText, true: colors.primary}}
                  thumbColor={colors.white}
                  style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
                  onChange={() => setSaveValue(!saveValue)}
                />
                <CText style={styles.ml5} type={'r14'} color={colors.grayText}>
                  {strings.SaveMe}
                </CText>
              </View>
              <TouchableOpacity onPress={onPressForgotPassword}>
                <CText type={'M14'} color={colors.primary}>
                  {strings.ForgotPasswordQue}
                </CText>
              </TouchableOpacity>
            </View>
            <CButton
              title={strings.LogIn}
              type={'m18'}
              color={colors.white}
              onPress={onPressLoginButton}
              containerStyle={styles.mt15}
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
              <TouchableOpacity onPress={onPressSignUp}>
                <CText style={styles.ml5} type={'B16'} color={colors.primary}>
                  {strings.SignUp}
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
  forgotPasswordContainer: {
    ...styles.rowSpaceBetween,
    ...styles.mv10,
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
