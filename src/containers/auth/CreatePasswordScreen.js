import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {colors, styles} from '../../themes';
import CHeader from '../../components/common/CHeader';
import strings from '../../i18n/strings';
import CText from '../../components/common/CText';
import KeyBoardAvoidWrapper from '../../components/common/KeyBoardAvoidWrapper';
import CTextInput from '../../components/common/CTextInput';
import CButton from '../../components/common/CButton';
import {moderateScale} from '../../common/constants';
import ForgotPasswordConfirmationModal from '../../components/modals/ForgotPasswordConfirmationModal';
import {AuthNav} from '../../navigation/NavigationKeys';

export default function CreatePasswordScreen(props) {
  let {navigation} = props;

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onChangeNewPassword = text => {
    setNewPassword(text);
  };

  const onChangeConfirmPassword = text => {
    setConfirmPassword(text);
  };

  const onPressCloseModal = () => {
    setIsModalVisible(false);
    navigation.navigate(AuthNav.LoginScreen);
  };

  const onPressConfirm = () => {
    setIsModalVisible(true);
  };

  return (
    <View style={styles.mainContainerSurface}>
      <CHeader title={strings.CreateNewPassword} />
      <KeyBoardAvoidWrapper contentContainerStyle={styles.flexGrow1}>
        <View style={styles.mainContainerWithRadius}>
          <View style={localStyles.topContainer}>
            <CText color={colors.white} type={'R16'} align={'center'}>
              {strings.createNewPasswordText}
            </CText>
          </View>
          <View style={localStyles.mainContainerWithRadius}>
            <View style={styles.flex}>
              <CTextInput
                label={strings.newPassword}
                value={newPassword}
                onChangeText={onChangeNewPassword}
                placeHolder={strings.EnterNewPassword}
                isSecure
              />
              <CTextInput
                label={strings.confirmPassword}
                value={confirmPassword}
                onChangeText={onChangeConfirmPassword}
                placeHolder={strings.EnterConfirmPassword}
                isSecure
              />
            </View>

            <CButton
              title={strings.Confirm}
              type={'m18'}
              color={colors.white}
              onPress={onPressConfirm}
              containerStyle={styles.mb10}
            />
          </View>
        </View>
      </KeyBoardAvoidWrapper>
      <ForgotPasswordConfirmationModal
        visible={isModalVisible}
        onPressClose={onPressCloseModal}
      />
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
