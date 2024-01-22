import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

// Local import
import {colors, styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import CText from '../../components/common/CText';
import CButton from '../../components/common/CButton';

export default function DeleteConfirmation(props) {
  const {visible, onPressModalClose} = props;
  const navigation = useNavigation();
  const onPressYes = () => {
    onPressModalClose();
    setTimeout(() => {
      navigation.goBack();
    }, 500);
  };

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <TouchableOpacity
        style={localStyles.modalMainContainer}
        activeOpacity={1}
        onPress={onPressModalClose}>
        <TouchableOpacity activeOpacity={1} style={localStyles.root}>
          <CText type={'b16'} align={'center'} style={styles.mb20}>
            {strings.deleteConfirmation}
          </CText>
          <View style={localStyles.btnContainer}>
            <CButton
              title={strings.no}
              type={'S16'}
              color={colors.red}
              containerStyle={localStyles.noBtnContainer}
              onPress={onPressYes}
            />
            <CButton
              title={strings.yes}
              type={'S16'}
              color={colors.white}
              containerStyle={localStyles.skipBtnContainer}
              onPress={onPressYes}
            />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
}

const localStyles = StyleSheet.create({
  root: {
    ...styles.p30,
    ...styles.mh30,
    borderRadius: moderateScale(15),
    backgroundColor: colors.white,
  },
  modalMainContainer: {
    ...styles.flex,
    ...styles.center,
    backgroundColor: colors.modalBg,
  },
  btnContainer: {
    ...styles.mb10,
    ...styles.rowSpaceAround,
  },
  skipBtnContainer: {
    height: moderateScale(42),
    width: '45%',
  },
  noBtnContainer: {
    height: moderateScale(42),
    width: '45%',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.red,
  },
});
