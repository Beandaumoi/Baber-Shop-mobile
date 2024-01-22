// Library import
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';

// Local import
import {colors, styles} from '../../themes';
import CText from '../common/CText';
import strings from '../../i18n/strings';
import {DeleteIcon, EditIcon} from '../../assets/svg';
import {moderateScale} from '../../common/constants';
import DeleteConfirmation from '../../containers/profile/DeleteConfirmation';

export default function PaymentMethodModal(props) {
  const {SheetRef, onPressCancel} = props;
  const [modalVisible, setModalVisible] = useState(false);

  const onPressShowModal = () => setModalVisible(!modalVisible);

  const RenderItem = ({text, icon, onPress}) => {
    return (
      <TouchableOpacity style={localStyles.textStyle} onPress={onPress}>
        {!!icon && icon}
        <CText type={'b16'} style={styles.ph10}>
          {text}
        </CText>
      </TouchableOpacity>
    );
  };

  return (
    <ActionSheet
      ref={SheetRef}
      gestureEnabled={true}
      indicatorStyle={styles.actionSheetIndicator}
      containerStyle={[
        localStyles.actionSheetContainer,
        {backgroundColor: colors.backgroundColor},
      ]}>
      <View style={localStyles.bottomContainer}>
        <RenderItem
          text={strings.edit}
          icon={<EditIcon />}
          onPress={onPressCancel}
        />
        <View style={localStyles.divider} />

        <RenderItem
          text={strings.delete}
          icon={<DeleteIcon />}
          onPress={onPressShowModal}
        />
      </View>
      <DeleteConfirmation
        visible={modalVisible}
        onPressModalClose={onPressShowModal}
      />
    </ActionSheet>
  );
}

const localStyles = StyleSheet.create({
  actionSheetContainer: {
    ...styles.ph20,
    ...styles.pb30,
  },
  bottomContainer: {
    ...styles.pv10,
    ...styles.pv30,
    ...styles.pb50,
  },
  textStyle: {
    ...styles.flexRow,
    ...styles.itemsCenter,
  },
  divider: {
    height: moderateScale(1),
    ...styles.mv20,
    backgroundColor: colors.inputBorder,
  },
});
