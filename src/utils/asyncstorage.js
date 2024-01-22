import AsyncStorage from '@react-native-async-storage/async-storage';
import {ACCESS_TOKEN, ON_BOARDING} from './keys';

// const setUserDetail = async value => {
//   const stringifyData = JSON.stringify(value);
//   await AsyncStorage.setItem(USER_DETAIL, stringifyData);
//   return true;
// };
// const getUserDetail = async () => {
//   const getUserData = await AsyncStorage.getItem(USER_DETAIL);
//   if (!!getUserData) {
//     return JSON.parse(getUserData);
//   } else {
//     return false;
//   }
// };
// const removeUserDetail = async () => {
//   await AsyncStorage.removeItem(USER_DETAIL);
// };

const initialStorageValueGet = async () => {
  let asyncData = await AsyncStorage.multiGet([ON_BOARDING, ACCESS_TOKEN]);
  const onBoardingValue = !!asyncData[0][1]
    ? JSON.parse(asyncData[0][1])
    : false;
  const acessTokenValue = !!asyncData[1][1]
    ? JSON.parse(asyncData[1][1])
    : false;
  return {onBoardingValue, acessTokenValue};
};

const setOnBoarding = async value => {
  const stringifyData = JSON.stringify(value);
  await AsyncStorage.setItem(ON_BOARDING, stringifyData);
  return;
};

const setAuthToken = async value => {
  const stringifyData = JSON.stringify(value);
  await AsyncStorage.setItem(ACCESS_TOKEN, stringifyData);
  return;
};

export {initialStorageValueGet, setOnBoarding, setAuthToken};
