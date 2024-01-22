import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';

// Local Imports
import CText from '../../components/common/CText';
import {colors, styles} from '../../themes';
import strings from '../../i18n/strings';
import CHeader from '../../components/common/CHeader';
import images from '../../assets/images';
import {moderateScale} from '../../common/constants';
import CTextInput from '../../components/common/CTextInput';
import CDropdownInput from '../../components/common/CDropdownInput';
import {genderDataArr} from '../../api/constant';
import CButton from '../../components/common/CButton';
import KeyBoardAvoidWrapper from '../../components/common/KeyBoardAvoidWrapper';

export default function EditProfile({navigation}) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [gender, setGender] = useState('');

  const onChangeEmailFied = text => {
    setEmail(text);
  };
  const onChangeMobileNumberFied = text => {
    setMobileNumber(text);
  };

  const onChangeNameFied = text => {
    setName(text);
  };
  const onChangeGenderFied = ({value}) => {
    setGender(value);
  };

  const onPressUpdate = () => navigation.goBack();

  return (
    <View style={styles.mainContainerSurface}>
      <CHeader title={strings.myProfile} />
      <KeyBoardAvoidWrapper contentContainerStyle={styles.flexGrow1}>
        <View style={styles.mainContainerWithRadius}>
          <View style={localStyles.topContainer}>
            <ImageBackground
              source={images.userImage}
              style={localStyles.userImageStyle}>
              <Image
                source={images.cameraIcon}
                style={localStyles.cameraIconStyle}
              />
            </ImageBackground>
            <CText type={'M16'} color={colors.white} align={'center'}>
              Viren Radadiya
            </CText>
            <CText
              align={'center'}
              color={colors.white}
              numberOfLines={1}
              style={styles.mb20}
              type={'R14'}>
              {'ibnerieadazz@gmail.com'}
            </CText>
          </View>
          <View style={localStyles.mainContainerWithRadius}>
            <View style={styles.flex}>
              <CTextInput
                label={strings.FullName}
                value={name}
                onChangeText={onChangeNameFied}
                placeHolder={strings.EnterFullName}
                maxLength={50}
              />
              <CTextInput
                label={strings.FullName}
                value={name}
                onChangeText={onChangeNameFied}
                placeHolder={strings.EnterFullName}
                maxLength={50}
              />
              <CTextInput
                label={strings.Email}
                value={email}
                onChangeText={onChangeEmailFied}
                placeHolder={strings.EnterEmail}
                keyBoardType={'email-address'}
                maxLength={50}
              />
              <CTextInput
                label={strings.PhoneNumber}
                value={mobileNumber}
                onChangeText={onChangeMobileNumberFied}
                placeHolder={strings.EnterPhoneNumber}
                maxLength={50}
                keyBoardType={'phone-pad'}
              />
              <CDropdownInput
                label={strings.Gender}
                data={genderDataArr}
                value={gender}
                placeholder={strings.SelectGender}
                onChange={onChangeGenderFied}
              />
            </View>
          </View>
        </View>
      </KeyBoardAvoidWrapper>
      <View style={localStyles.bottomContainer}>
        <CButton
          title={strings.update}
          type={'m18'}
          color={colors.white}
          onPress={onPressUpdate}
          containerStyle={styles.mv10}
        />
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  topHeaderContainer: {
    ...styles.pv15,
    ...styles.ph20,
  },
  topContainer: {
    ...styles.ph25,
    ...styles.pv15,
  },
  userImageStyle: {
    height: moderateScale(80),
    width: moderateScale(80),
    borderRadius: moderateScale(40),
    alignSelf: 'center',
    ...styles.mt20,
    ...styles.mb10,
  },
  cameraIconStyle: {
    height: moderateScale(30),
    width: moderateScale(30),
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  mainContainerWithRadius: {
    ...styles.mainContainerWithRadius,
    backgroundColor: colors.white,
    ...styles.pt10,
    ...styles.pb20,
    ...styles.ph20,
  },
  bottomContainer: {
    backgroundColor: colors.white,
    ...styles.pb10,
    ...styles.ph20,
  },
});
