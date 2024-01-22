import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

// custom imports
import {colors, styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import CHeader from '../../components/common/CHeader';
import images from '../../assets/images';
import CText from '../../components/common/CText';
import strings from '../../i18n/strings';
import CButton from '../../components/common/CButton';
import {StackNav} from '../../navigation/NavigationKeys';

export default function SelectGender({navigation}) {
  const [gender, setGender] = useState(null);

  const onPressGender = itm => setGender(itm);

  const onPressContinue = () => navigation.navigate(StackNav.SelectServices);

  const RenderGender = ({code, img, title}) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => onPressGender(code)}
        style={localStyles.imageContainer}>
        <ImageBackground
          imageStyle={localStyles.radiusStyle}
          source={img}
          style={localStyles.imageStyle}
          resizeMode={'cover'}>
          <Ionicons
            name={gender == code ? 'radio-button-on' : 'radio-button-off'}
            color={gender == code ? colors.primary : colors.grayText}
            size={moderateScale(22)}
            style={localStyles.radioStyle}
          />
        </ImageBackground>
        <View style={localStyles.nameContainer}>
          <CText type={'M14'} color={colors.black}>
            {title}
          </CText>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainerSurface}>
      <CHeader title={'Select Gender'} />
      <View style={localStyles.mainContainerWithRadius}>
        <View style={styles.rowSpaceAround}>
          <RenderGender title={strings.male} img={images.menImage} code={0} />
          <RenderGender
            title={strings.female}
            img={images.womenImage}
            code={1}
          />
        </View>
      </View>
      <View style={{backgroundColor: colors.white}}>
        <CButton
          title={strings.continue}
          type={'B18'}
          color={colors.white}
          onPress={onPressContinue}
          containerStyle={localStyles.buttonStyle}
        />
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  mainContainerWithRadius: {
    ...styles.mainContainerWithRadius,
    backgroundColor: colors.white,
    ...styles.pv10,
    ...styles.ph20,
  },
  imageContainer: {
    ...styles.center,
    ...styles.mt20,
    ...styles.mb20,
  },
  imageStyle: {
    width: moderateScale(150),
    height: moderateScale(130),
  },
  nameContainer: {
    ...styles.center,
    ...styles.pv10,
    backgroundColor: colors.primarySurface,
    borderBottomLeftRadius: moderateScale(15),
    borderBottomRightRadius: moderateScale(15),
    width: moderateScale(150),
  },
  radioStyle: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  radiusStyle: {
    borderTopLeftRadius: moderateScale(15),
    borderTopRightRadius: moderateScale(15),
  },
  buttonStyle: {
    ...styles.mb10,
    ...styles.mt10,
    ...styles.mh20,
  },
});
