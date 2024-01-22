import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackRoute} from '../NavigationRoutes';
import {StackNav} from '../NavigationKeys';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={StackNav.Splash}>
      <Stack.Screen name={StackNav.Splash} component={StackRoute.Splash} />
      <Stack.Screen
        name={StackNav.OnBoarding}
        component={StackRoute.OnBoarding}
      />
      <Stack.Screen
        name={StackNav.AuthNavigation}
        component={StackRoute.AuthNavigation}
      />
      <Stack.Screen
        name={StackNav.TabNavigation}
        component={StackRoute.TabNavigation}
      />
      <Stack.Screen
        name={StackNav.CategoriesScreen}
        component={StackRoute.CategoriesScreen}
      />
      <Stack.Screen
        name={StackNav.SalonsDetailScreen}
        component={StackRoute.SalonsDetailScreen}
      />
      <Stack.Screen
        name={StackNav.SalonsListScreen}
        component={StackRoute.SalonsListScreen}
      />
      <Stack.Screen name={StackNav.AboutUs} component={StackRoute.AboutUs} />
      <Stack.Screen
        name={StackNav.AddNewCard}
        component={StackRoute.AddNewCard}
      />
      <Stack.Screen
        name={StackNav.EditProfile}
        component={StackRoute.EditProfile}
      />
      <Stack.Screen
        name={StackNav.FavoritesSalons}
        component={StackRoute.FavoritesSalons}
      />
      <Stack.Screen name={StackNav.Language} component={StackRoute.Language} />
      <Stack.Screen
        name={StackNav.Notification}
        component={StackRoute.Notification}
      />
      <Stack.Screen
        name={StackNav.PaymentMethod}
        component={StackRoute.PaymentMethod}
      />
      <Stack.Screen
        name={StackNav.PrivacyPolicy}
        component={StackRoute.PrivacyPolicy}
      />
      <Stack.Screen
        name={StackNav.ReferAndEarn}
        component={StackRoute.ReferAndEarn}
      />
      <Stack.Screen name={StackNav.Chat} component={StackRoute.Chat} />
      <Stack.Screen
        name={StackNav.MyBookingDetail}
        component={StackRoute.MyBookingDetail}
      />
      <Stack.Screen
        name={StackNav.VoiceCall}
        component={StackRoute.VoiceCall}
      />
      <Stack.Screen
        name={StackNav.SalonDetail}
        component={StackRoute.SalonDetail}
      />
      <Stack.Screen
        name={StackNav.SelectGender}
        component={StackRoute.SelectGender}
      />
      <Stack.Screen
        name={StackNav.SelectDateAndTime}
        component={StackRoute.SelectDateAndTime}
      />
      <Stack.Screen
        name={StackNav.SelectServices}
        component={StackRoute.SelectServices}
      />
      <Stack.Screen
        name={StackNav.YourAppointment}
        component={StackRoute.YourAppointment}
      />
      <Stack.Screen
        name={StackNav.Congratulation}
        component={StackRoute.Congratulation}
      />
      <Stack.Screen
        name={StackNav.PaymentDetail}
        component={StackRoute.PaymentDetail}
      />
      <Stack.Screen
        name={StackNav.CurrentLocation}
        component={StackRoute.CurrentLocation}
      />
      <Stack.Screen
        name={StackNav.FindNearbySalon}
        component={StackRoute.FindNearbySalon}
      />
    </Stack.Navigator>
  );
}
