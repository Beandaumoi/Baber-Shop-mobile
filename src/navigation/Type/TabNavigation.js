import {Image, StyleSheet, View} from 'react-native';
import React, {memo} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// custom imports
import {TabRoute} from '../NavigationRoutes';
import {TabNav} from '../NavigationKeys';
import {colors, styles} from '../../themes';
import {hp, isAndroid, moderateScale} from '../../common/constants';
import strings from '../../i18n/strings';
import CText from '../../components/common/CText';
import images from '../../assets/images';

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();

  const TabText = memo(({IconType, name, lable, focused}) => (
    <View style={localStyle.tabViewContainer}>
      {!!focused && (
        <Image
          source={images.activeImg}
          resizeMode={'contain'}
          style={localStyle.activetabImg}
        />
      )}
      <IconType
        name={name}
        solid={focused}
        size={moderateScale(20)}
        color={!!focused ? colors.primary : colors.tabIcon}
      />
      <CText
        style={styles.mt5}
        numberOfLines={1}
        color={!!focused ? colors.primary : colors.tabIcon}
        type={'R12'}>
        {lable}
      </CText>
    </View>
  ));

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: isAndroid ? true : false,
        headerShown: false,
        tabBarStyle: localStyle.tabBarStyle,
        tabBarShowLabel: false,
      }}
      initialRouteName={TabNav.Find}>
      <Tab.Screen
        name={TabNav.Home}
        component={TabRoute.Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabText
              IconType={Ionicons}
              name="home"
              focused={focused}
              lable={strings.Home}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabNav.Location}
        component={TabRoute.Location}
        options={{
          tabBarIcon: ({focused}) => (
            <TabText
              IconType={Ionicons}
              name="location"
              focused={focused}
              lable={strings.Location}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabNav.Booking}
        component={TabRoute.Booking}
        options={{
          tabBarIcon: ({focused}) => (
            <TabText
              IconType={Ionicons}
              name="document-text-sharp"
              focused={focused}
              lable={strings.Booking}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabNav.Message}
        component={TabRoute.Message}
        options={{
          tabBarIcon: ({focused}) => (
            <TabText
              IconType={Ionicons}
              name="chatbubble-ellipses"
              focused={focused}
              lable={strings.Message}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabNav.Profile}
        component={TabRoute.Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <TabText
              IconType={Ionicons}
              name="person"
              focused={focused}
              lable={strings.Profile}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const localStyle = StyleSheet.create({
  tabBarStyle: {
    height: hp(10),
    backgroundColor: colors.white,
    ...styles.ph10,
    borderTopRightRadius: moderateScale(30),
    borderTopLeftRadius: moderateScale(30),
    ...styles.shadowStyle,
  },
  tabViewContainer: {
    ...styles.center,
    height: hp(10),
  },
  activetabImg: {
    position: 'absolute',
    top: 0,
    width: moderateScale(34),
    height: moderateScale(12),
    ...styles.selfCenter,
  },
});
