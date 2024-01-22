import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

// custom imports
import {colors, styles} from '../../themes';
import CHeader from '../../components/common/CHeader';
import strings from '../../i18n/strings';
import {moderateScale} from '../../common/constants';
import CText from '../../components/common/CText';
import {TabNav} from '../../navigation/NavigationKeys';

export default function VoiceCall({navigation, route}) {
  const {item} = route.params;
  const [isMute, setIsMute] = useState(false);

  const onPressMute = () => setIsMute(!isMute);

  const onPressEnd = () => navigation.navigate(TabNav.Message);

  return (
    <View style={styles.mainContainerSurface}>
      <CHeader title={strings.voiceCall} />
      <View style={localStyles.mainContainerWithRadius}>
        <Image source={{uri: item?.imageUrl}} style={localStyles.imageStyle} />
        <CText
          type={'B18'}
          numberOfLines={1}
          style={styles.mt15}
          color={colors.black}>
          {item?.title}
        </CText>
        <CText
          type={'M14'}
          color={colors.grayText}
          numberOfLines={1}
          style={styles.mt5}>
          {'02:35 minutes '}
        </CText>
      </View>
      <View style={localStyles.bottomContainer}>
        <TouchableOpacity
          onPress={onPressMute}
          style={localStyles.outerContainer}>
          <Ionicons
            name={isMute ? 'mic-sharp' : 'mic-off-sharp'}
            color={colors.primary}
            size={moderateScale(28)}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressEnd}
          style={[
            localStyles.outerContainer,
            {
              backgroundColor: colors.red,
            },
          ]}>
          <Ionicons
            name={'call'}
            color={colors.white}
            size={moderateScale(28)}
          />
        </TouchableOpacity>
        <TouchableOpacity style={localStyles.outerContainer}>
          <Ionicons
            name={'volume-mute-sharp'}
            color={colors.primary}
            size={moderateScale(28)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  mainContainerWithRadius: {
    ...styles.mainContainerWithRadius,
    backgroundColor: colors.white,
    ...styles.pt10,
    ...styles.flexCenter,
  },
  imageStyle: {
    width: moderateScale(140),
    height: moderateScale(140),
    borderRadius: moderateScale(70),
    ...styles.mh10,
  },
  bottomContainer: {
    ...styles.rowSpaceAround,
    ...styles.pv10,
    ...styles.ph30,
    backgroundColor: colors.white,
  },
  outerContainer: {
    ...styles.rowSpaceAround,
    height: moderateScale(60),
    width: moderateScale(60),
    borderRadius: moderateScale(30),
    backgroundColor: colors.primarySurface,
  },
});
