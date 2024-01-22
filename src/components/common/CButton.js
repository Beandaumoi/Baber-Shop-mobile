import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {moderateScale} from '../../common/constants';
import {colors, styles} from '../../themes';
import CText from './CText';

export default function CButton({
  title,
  type,
  color,
  onPress,
  containerStyle,
  textStyle,
  children,
  ...props
}) {
  return (
    <TouchableOpacity
      style={[
        localStyle.btnContainer,
        styles.rowCenter,
        {backgroundColor: colors.primary},
        containerStyle,
      ]}
      onPress={onPress}
      {...props}>
      <CText type={type} style={textStyle} color={color}>
        {title}
      </CText>
      {children}
    </TouchableOpacity>
  );
}

const localStyle = StyleSheet.create({
  btnContainer: {
    height: moderateScale(50),
    borderRadius: moderateScale(25),
  },
});
