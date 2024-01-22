// Library Imports
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Custom Imports
import CText from '../common/CText';
import {colors, styles} from '../../themes';
import {moderateScale} from '../../common/constants';

const SaloonSubDetailComponent = ({title, description}) => {
  const [isDescShow, setIsDescShow] = useState(false);

  const onPressShow = () => setIsDescShow(!isDescShow);

  return (
    <TouchableOpacity style={localStyles.helperContainer} onPress={onPressShow}>
      <View style={localStyles.helperInnerContainer}>
        <CText type={'S16'}>{title}</CText>
        <Ionicons
          name={!isDescShow ? 'caret-down-outline' : 'caret-up-outline'}
          size={moderateScale(20)}
          color={colors.grayText}
          style={styles.mr5}
        />
      </View>
      {!!isDescShow && (
        <View style={localStyles.textContainer}>
          {!!description && description}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default SaloonSubDetailComponent;

const localStyles = StyleSheet.create({
  helperContainer: {
    ...styles.mt15,
    borderRadius: moderateScale(10),
    backgroundColor: colors.white,
    borderWidth: moderateScale(1),
    borderColor: colors.inputBorder,
  },
  helperInnerContainer: {
    ...styles.rowSpaceBetween,
    ...styles.p15,
  },
  helperDescription: {
    ...styles.p15,
  },
  textContainer: {
    borderTopWidth: moderateScale(1),
    borderTopColor: colors.inputBorder,
    ...styles.pv15,
    ...styles.ph15,
  },
});
