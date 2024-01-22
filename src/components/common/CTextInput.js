import React, {useState} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {moderateScale} from '../../common/constants';
import {colors, styles} from '../../themes';
import typography from '../../themes/typography';
import CText from './CText';

export default CTextInput = props => {
  let {
    value,
    label,
    containerStyle,
    inputBoxStyle,
    onChangeText,
    placeHolder,
    keyBoardType,
    onFocus,
    onBlur,
    errorText,
    isSecure,
    maxLength,
    editable = true,
    labelStyle,
    multiline,
    errorStyle,
    showError = true,
    LeftIcon,
    RightIcon,
  } = props;

  const [isSecurePass, setIsSecurePass] = useState(isSecure);

  const onPressSecureIcon = () => {
    setIsSecurePass(!isSecurePass);
  };

  return (
    <View style={styles.mt10}>
      {!!label && (
        <View style={[localStyle.labelContainer, labelStyle]}>
          <CText type={'R14'}>{label}</CText>
        </View>
      )}
      <View
        style={[
          localStyle.inputContainer,
          {
            borderColor: !!errorText ? colors.errorColor : colors.inputBorder,
            height: !!multiline ? moderateScale(75) : moderateScale(50),
          },
          containerStyle,
        ]}>
        {!!LeftIcon && <LeftIcon />}
        <TextInput
          value={value}
          maxLength={maxLength}
          defaultValue={value}
          autoCorrect={false}
          secureTextEntry={isSecurePass}
          placeholderTextColor={colors.grayText}
          onChangeText={onChangeText}
          keyboardType={keyBoardType}
          multiline={multiline}
          editable={editable}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeHolder}
          style={[
            localStyle.inputBox,
            {color: colors.textColor},
            {height: multiline ? moderateScale(75) : moderateScale(50)},
            inputBoxStyle,
            editable == false && {color: colors.placeHolderColor},
          ]}
          {...props}
        />
        {!!RightIcon && <RightIcon />}
        {!!isSecure && (
          <TouchableOpacity onPress={onPressSecureIcon}>
            <Ionicons
              name={!isSecurePass ? 'eye-outline' : 'eye-off-outline'}
              size={moderateScale(24)}
              color={colors.grayText}
              style={styles.mr10}
            />
          </TouchableOpacity>
        )}
      </View>
      {errorText && errorText != '' ? (
        <CText
          style={{
            ...localStyle.errorText,
            ...errorStyle,
            color: colors.alertColor,
          }}>
          {errorText}
        </CText>
      ) : null}

      {maxLength && showError && value?.length > maxLength ? (
        <CText style={{...localStyle.errorText, ...errorStyle}}>
          {`It should be maximum ${maxLength} character`}
        </CText>
      ) : null}
    </View>
  );
};

const localStyle = StyleSheet.create({
  inputBox: {
    ...typography.fontSizes.f16,
    ...typography.fontWeights.Regular,
    ...styles.ph10,
    ...styles.flex,
  },
  inputContainer: {
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(12),
    ...styles.mt5,
    width: '100%',
    ...styles.rowCenter,
  },
  labelContainer: {
    ...styles.mt10,
    ...styles.mb5,
  },
  errorText: {
    textAlign: 'left',
    ...typography.fontSizes.f12,
    ...styles.mt5,
    ...styles.ml10,
  },
});
