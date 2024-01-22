import {StatusBar, SafeAreaView} from 'react-native';
import React from 'react';
import AppNavigator from './navigation';
import {colors, styles} from './themes';

export default function App() {
  return (
    <SafeAreaView style={styles.flex}>
      <StatusBar backgroundColor={colors.white} />
      <AppNavigator />
    </SafeAreaView>
  );
}
