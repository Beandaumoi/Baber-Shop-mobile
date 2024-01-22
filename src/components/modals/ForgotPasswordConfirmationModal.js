import {Image, Modal, StyleSheet, View} from 'react-native';
import React from 'react';
import CText from '../common/CText';
import {colors, styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import CButton from '../common/CButton';
import images from '../../assets/images';
import strings from '../../i18n/strings';

export default function ForgotPasswordConfirmationModal(props) {
  let {visible, onPressClose} = props;
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={localStyles.modalMainContainer}>
        <View style={localStyles.modalMainView}>
          <Image
            source={images.passwordChnageImg}
            style={localStyles.imageStyle}
            resizeMode={'contain'}
          />
          <CText align={'center'} type={'B20'}>
            {strings.PasswordChanged}
          </CText>
          <CText style={styles.mv10} align={'center'} type={'R16'}>
            {strings.passwordChangedText}
          </CText>

          <CButton
            title={strings.Done}
            type={'B18'}
            color={colors.white}
            onPress={onPressClose}
            containerStyle={localStyles.btnContainerStyle}
          />
        </View>
      </View>
    </Modal>
  );
}

const localStyles = StyleSheet.create({
  modalMainContainer: {
    ...styles.flex,
    ...styles.center,
    backgroundColor: colors.modalBackground,
  },
  modalMainView: {
    backgroundColor: colors.white,
    borderRadius: moderateScale(20),
    width: '90%',
    ...styles.pv30,
    ...styles.ph25,
    ...styles.center,
  },
  imageStyle: {
    height: moderateScale(150),
    width: moderateScale(150),
    ...styles.mb30,
  },
  btnContainerStyle: {
    width: '100%',
    ...styles.mt20,
  },
});
