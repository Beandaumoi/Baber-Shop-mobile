import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';

// custom imports
import CText from '../common/CText';
import {colors, styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import strings from '../../i18n/strings';
import {FileManager, GalleryIcon} from '../../assets/svg';

export default function ChoosePictureModal(props) {
  let {visible, onPressClose} = props;
  const [selectImage, setSelectImage] = useState(null);

  const onPressCamera = () => {
    ImagePicker.openCamera({
      mediaType: 'photo',
      includeBase64: true,
    }).then(image => {
      setSelectImage(image);
    });
  };

  const onPressGallery = () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      includeBase64: true,
    }).then(images => {
      setSelectImage(images);
    });
  };

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPressClose}
        style={localStyles.modalMainContainer}>
        <TouchableOpacity activeOpacity={1} style={localStyles.modalMainView}>
          <View style={localStyles.secondaryContainer}>
            <CText type={'B18'} color={colors.black}>
              {strings.chooseYourNeed}
            </CText>
            <TouchableOpacity onPress={onPressClose}>
              <Ionicons
                name={'close-sharp'}
                size={moderateScale(24)}
                color={colors.textColor}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.rowSpaceAround}>
            <TouchableOpacity
              onPress={onPressCamera}
              style={localStyles.itmContainer}>
              <GalleryIcon />
              <CText style={styles.mv10} align={'center'} type={'R16'}>
                {strings.openGallery}
              </CText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPressGallery}
              style={localStyles.itmContainer}>
              <FileManager />
              <CText style={styles.mv10} align={'center'} type={'R16'}>
                {strings.openFile}
              </CText>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
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
  secondaryContainer: {
    ...styles.rowSpaceBetween,
    ...styles.pb15,
    width: '100%',
  },
  itmContainer: {
    ...styles.center,
    ...styles.pt15,
    width: '48%',
  },
});
