import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthRoute} from '../NavigationRoutes';
import {AuthNav} from '../NavigationKeys';

const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={AuthNav.LoginScreen}>
      <Stack.Screen
        name={AuthNav.SignUpScreen}
        component={AuthRoute.SignUpScreen}
      />
      <Stack.Screen
        name={AuthNav.OtpVerificationScreen}
        component={AuthRoute.OtpVerificationScreen}
      />
      <Stack.Screen
        name={AuthNav.LoginScreen}
        component={AuthRoute.LoginScreen}
      />
      <Stack.Screen
        name={AuthNav.ForgotPasswordScreen}
        component={AuthRoute.ForgotPasswordScreen}
      />
      <Stack.Screen
        name={AuthNav.CreatePasswordScreen}
        component={AuthRoute.CreatePasswordScreen}
      />
    </Stack.Navigator>
  );
}
