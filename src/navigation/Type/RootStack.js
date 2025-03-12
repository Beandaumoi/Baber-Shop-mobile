import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AuthNavigation from './AuthNavigation';
import StackNavigation from './StackNavigation';

export default function Navigation() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AuthNavigation /> : <StackNavigation />}
    </NavigationContainer>
  );
}
