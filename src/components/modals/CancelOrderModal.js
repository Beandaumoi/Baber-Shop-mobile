import {
  Keyboard,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

// custom imports
import CText from '../common/CText';
import {colors, styles} from '../../themes';
import {deviceHeight, moderateScale} from '../../common/constants';
import CTextInput from '../common/CTextInput';
import CButton from '../common/CButton';
import strings from '../../i18n/strings';

export default function CancelOrderModal(props) {
  let {visible, onPressClose} = props;

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPressClose}
        style={localStyles.modalMainContainer}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => Keyboard.dismiss()}
          style={localStyles.modalMainView}>
          <View style={localStyles.secondaryContainer}>
            <CText type={'B16'} color={colors.black}>
              {'Why are you Cancel Order'}
            </CText>
            <TouchableOpacity onPress={onPressClose}>
              <Ionicons
                name={'close-sharp'}
                size={moderateScale(24)}
                color={colors.textColor}
              />
            </TouchableOpacity>
          </View>
          <View>
            <CTextInput
              label={'Enter Reason'}
              placeholder={'Write your reason'}
              multiline={true}
              containerStyle={localStyles.inputStyle}
            />
          </View>
          <View style={localStyles.btnContainer}>
            <CButton
              title={strings.cancel}
              type={'S16'}
              color={colors.red}
              containerStyle={localStyles.transparentBtnContainer}
              onPress={onPressClose}
            />
            <CButton
              title={strings.submit}
              type={'S16'}
              color={colors.white}
              containerStyle={localStyles.btnWithBgContainer}
              onPress={onPressClose}
            />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
}

const localStyles = StyleSheet.create({
  modalMainContainer: {
    ...styles.flex,
    ...styles.itemsCenter,
    backgroundColor: colors.modalBackground,
  },
  modalMainView: {
    backgroundColor: colors.white,
    borderRadius: moderateScale(20),
    top: deviceHeight / 2 - moderateScale(250),
    width: '90%',
    ...styles.pv30,
    ...styles.ph25,
  },
  secondaryContainer: {
    ...styles.rowSpaceBetween,
    ...styles.pb15,
    borderBottomWidth: 1,
    borderBottomColor: colors.inputBorder,
    width: '100%',
  },
  btnContainer: {
    ...styles.pt20,
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
