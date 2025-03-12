import {StatusBar, SafeAreaView} from 'react-native';
import React from 'react';
import AppNavigator from './navigation';
import {colors, styles} from './themes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './redux/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <GestureHandlerRootView style={{flex: 1}}>
          <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
          <AppNavigator />
        </GestureHandlerRootView>
      </SafeAreaView>
    </Provider>
  );
}
