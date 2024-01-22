import {View, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';

// custom imports
import {colors, styles} from '../themes';
import images from '../assets/images';
import {moderateScale} from '../common/constants';
import {initialStorageValueGet} from '../utils/asyncstorage';
import {StackNav} from '../navigation/NavigationKeys';
import SplashScreen from 'react-native-splash-screen';

export default function Splash({navigation}) {
  useEffect(() => {
    SplashScreen.hide();
    asyncProcess();
  }, []);

  const asyncProcess = async () => {
    try {
      let asyncData = await initialStorageValueGet();
      if (!!asyncData) {
        let {onBoardingValue, acessTokenValue} = asyncData;
        if (!!acessTokenValue) {
          navigation.replace(StackNav.TabNavigation);
        } else if (!!onBoardingValue) {
          navigation.replace(StackNav.AuthNavigation);
        } else {
          navigation.replace(StackNav.OnBoarding);
        }
      }
    } catch (e) {
      console.log('error ', e);
    }
  };

  return (
    <View style={localStyles.mainContainer}>
      <Image source={images.logo} style={localStyles.imageStyle} />
    </View>
  );
}

const localStyles = StyleSheet.create({
  mainContainer: {
    ...styles.flex,
    ...styles.center,
    backgroundColor: colors.primary,
  },
  imageStyle: {
    width: moderateScale(230),
    height: moderateScale(230),
  },
});
