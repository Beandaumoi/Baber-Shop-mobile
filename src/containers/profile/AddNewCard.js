import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

// custom imports
import CHeader from '../../components/common/CHeader';
import strings from '../../i18n/strings';
import {colors, styles} from '../../themes';
import images from '../../assets/images';
import {moderateScale} from '../../common/constants';
import KeyBoardAvoidWrapper from '../../components/common/KeyBoardAvoidWrapper';
import CTextInput from '../../components/common/CTextInput';
import {
  validateCardNumber,
  validateCvv,
  validateName,
} from '../../utils/validation';
import CButton from '../../components/common/CButton';

export default function AddNewCard({navigation}) {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardNameError, setCardNameError] = useState('');
  const [cardNumberError, setCardNumberError] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [expiryDateError, setExpiryDateError] = useState('');
  const [cvv, setCvv] = useState('');
  const [cvvError, setCvvError] = useState('');
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (
      !!cardName &&
      !!cardNumber &&
      !!expiryDate &&
      !!cvv &&
      !cardNameError &&
      !cardNumberError &&
      !expiryDateError &&
      !cvvError
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [
    cardName,
    cardNumber,
    expiryDate,
    cvv,
    cardNameError,
    cardNumberError,
    expiryDateError,
    cvvError,
  ]);

  const onChangeCardName = text => {
    const {msg} = validateName(text);
    setCardName(text);
    setCardNameError(msg);
  };

  const onChangeCardNumber = text => {
    const {msg} = validateCardNumber(text);
    setCardNumber(text);
    setCardNumberError(msg);
  };

  const onChangeExpiryDate = text => {
    setExpiryDate(text);
    if (text.length === 0) {
      setExpiryDateError('Expiry Date is required');
    } else {
      setExpiryDateError('');
    }
  };

  const onChangeCvv = text => {
    const {msg} = validateCvv(text);
    setCvv(text);
    setCvvError(msg);
  };

  const onPressCalender = () => setDatePickerVisible(true);

  const handleDateConfirm = date => {
    var expiryDate = date.toISOString().split('T')[0];
    const month = expiryDate.split('-')[1];
    const year = expiryDate.split('-')[0];
    setExpiryDate(month + '/' + year);
    setDatePickerVisible(false);
  };

  const hideDatePicker = () => setDatePickerVisible(false);

  const onPressAddNewCard = () => navigation.goBack();

  return (
    <View style={styles.mainContainerSurface}>
      <CHeader title={strings.paymentMethods} />
      <View style={localStyles.mainContainerWithRadius}>
        <KeyBoardAvoidWrapper>
          <Image source={images.atmCard} style={localStyles.atmCard} />
          <CTextInput
            label={strings.cardName}
            placeholder={strings.cardName}
            keyboardType="default"
            maxLength={16}
            value={cardName}
            errorText={cardNameError}
            autoCapitalize={'none'}
            onChangeText={onChangeCardName}
          />
          <CTextInput
            label={strings.cardNumber}
            placeholder={strings.cardNumber}
            keyboardType="number-pad"
            maxLength={16}
            value={cardNumber}
            errorText={cardNumberError}
            autoCapitalize={'none'}
            onChangeText={onChangeCardNumber}
          />
          <View style={[styles.flexRow, styles.justifyBetween, styles.pb10]}>
            <TouchableOpacity onPress={onPressCalender}>
              <CTextInput
                label={strings.expiryDate}
                placeholder={strings.expiryDate}
                keyboardType="number-pad"
                maxLength={10}
                value={expiryDate}
                errorText={expiryDateError}
                autoCapitalize={'none'}
                onChangeText={onChangeExpiryDate}
                editable={false}
                containerStyle={{width: '85%'}}
              />

              <DateTimePickerModal
                isVisible={datePickerVisible}
                mode="date"
                onConfirm={handleDateConfirm}
                onCancel={hideDatePicker}
                date={new Date()}
                minimumDate={new Date()}
              />
            </TouchableOpacity>
            <CTextInput
              label={strings.cvv}
              placeholder={strings.cvv}
              keyboardType="number-pad"
              maxLength={3}
              value={cvv}
              errorText={cvvError}
              autoCapitalize={'none'}
              onChangeText={onChangeCvv}
            />
          </View>
        </KeyBoardAvoidWrapper>
        <CButton
          title={strings.save}
          type={'S16'}
          color={colors.white}
          containerStyle={localStyles.addNewCardBtn}
          onPress={onPressAddNewCard}
        />
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  mainContainerWithRadius: {
    ...styles.mainContainerWithRadius,
    backgroundColor: colors.white,
    ...styles.pt20,
    ...styles.ph20,
  },
  atmCard: {
    width: '100%',
    height: moderateScale(200),
    resizeMode: 'contain',
  },
  inputContainerStyle: {
    borderRadius: moderateScale(15),
    borderWidth: moderateScale(1),
  },
  inputBoxStyle: {
    ...styles.ph15,
  },
  dateContainer: {
    width: moderateScale(150),
    height: moderateScale(50),
    borderRadius: moderateScale(15),
  },
});
