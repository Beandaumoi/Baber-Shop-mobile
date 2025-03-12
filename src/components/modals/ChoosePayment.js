import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import ActionSheet from 'react-native-actions-sheet';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

// custom imports
import {colors, styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import CText from '../common/CText';
import strings from '../../i18n/strings';
import CButton from '../common/CButton';
import images from '../../assets/images';
import {paymentMethodData} from '../../api/constant';
import {StackNav} from '../../navigation/NavigationKeys';
import AuthApi from '../../network/AuthApi';

export default function ChoosePayment(props) {
  const navigation = useNavigation();
  const [selectedCard, setSelectedCard] = useState(null);
  let {SheetRef, totalPrice, dataBook} = props;
  console.log(dataBook);

  const onPressClose = () => SheetRef.current?.hide();

  const onPressSelectCard = item => setSelectedCard(item);

  const onPressAddNew = () => {
    setTimeout(() => {
      SheetRef.current?.hide();
      navigation.navigate(StackNav.AddNewCard);
    }, 400);
  };

  const onPressPayNow = async () => {
    // setTimeout(() => {
    //   SheetRef.current?.hide();
    //   navigation.navigate(StackNav.Congratulation);
    // }, 400);

    const servicesFormat = dataBook.selectedServices.map(service => service.id);

    const formattedDateTime = formatDateTime(
      dataBook.selectedDate,
      dataBook.selectedTime,
    );

    const params = {
      merchantId: dataBook.merchantId,
      serviceIds: servicesFormat,
      date: formattedDateTime,
    };
    console.log('params: ', params);

    try {
      const response = await AuthApi.booking(params);
      console.log('response: ', response.status);

      // if (response.status === 201) {

      // } else {
      //   Alert.alert('Error', 'Registration failed');
      // }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An error occurred during registration');
    }
  };

  const RenderCard = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressSelectCard(item.id)}
        style={[
          localStyles.cardContainer,
          {
            borderColor:
              selectedCard == item.id ? colors.primary : colors.inputBorder,
          },
        ]}>
        <View style={[styles.flexRow, styles.itemsCenter]}>
          <Image
            resizeMode="cover"
            source={item?.iconImage}
            style={localStyles.cardImage}
          />
          <CText type={'M14'} style={styles.ml10}>
            {item?.title}
          </CText>
        </View>
        <View style={styles.itemsEnd}>
          <Ionicons
            name={
              selectedCard == item.id
                ? 'radio-button-on-outline'
                : 'radio-button-off-outline'
            }
            size={moderateScale(24)}
            color={selectedCard == item.id ? colors.primary : colors.grayText}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ActionSheet
      ref={SheetRef}
      gestureEnabled={true}
      indicatorStyle={styles.actionSheetIndicator}
      containerStyle={localStyles.actionSheetContainer}>
      <View style={localStyles.secondaryContainer}>
        <CText type={'B18'} color={colors.black}>
          {strings.paymentMethods}
        </CText>
        <TouchableOpacity onPress={onPressClose}>
          <Ionicons
            name={'close-sharp'}
            size={moderateScale(24)}
            color={colors.textColor}
          />
        </TouchableOpacity>
      </View>
      <View style={localStyles.mainContainerWithRadius}>
        <Image source={images.atmCard} style={localStyles.atmCard} />
        <View style={localStyles.ratingContainer}>
          <CText type={'M16'}>{strings.selectPaymentMethod}</CText>
          <TouchableOpacity onPress={onPressAddNew}>
            <CText type={'r14'} color={colors.grayText}>
              {strings.addNew}
            </CText>
          </TouchableOpacity>
        </View>
        <FlatList
          data={paymentMethodData}
          renderItem={RenderCard}
          keyExtractor={(item, index) => index.toString()}
          estimatedItemSize={10}
          showsVerticalScrollIndicator={false}
          bounces={false}
        />
        <View style={localStyles.btnContainer}>
          <View>
            <CText type={'R14'} color={colors.grayText}>
              {strings.total}
            </CText>
            <CText type={'B16'}>{totalPrice || '$0.00'}</CText>
          </View>
          <CButton
            title={strings.payNow}
            type={'S16'}
            color={colors.white}
            containerStyle={localStyles.btnWithBgContainer}
            onPress={onPressPayNow}
          />
        </View>
      </View>
    </ActionSheet>
  );
}

function formatDateTime(date, time) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const [hours, minutes] = time.split(':');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

const localStyles = StyleSheet.create({
  actionSheetContainer: {
    backgroundColor: colors.primarySurface,
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
  },
  secondaryContainer: {
    ...styles.rowSpaceBetween,
    ...styles.ph20,
    ...styles.pt5,
    ...styles.pb15,
  },
  mainContainerWithRadius: {
    backgroundColor: colors.primary,
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
    ...styles.ph20,
    ...styles.pb30,
    ...styles.pt20,
  },
  ratingContainer: {
    ...styles.rowSpaceBetween,
    ...styles.mt15,
  },
  atmCard: {
    width: '100%',
    height: moderateScale(200),
    resizeMode: 'contain',
  },
  cardContainer: {
    ...styles.rowSpaceBetween,
    ...styles.mt10,
    ...styles.p10,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: moderateScale(10),
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: moderateScale(50),
    height: moderateScale(40),
  },
  btnContainer: {
    ...styles.pb10,
    ...styles.pt20,
    ...styles.rowSpaceBetween,
    backgroundColor: colors.white,
  },
  btnWithBgContainer: {
    width: '65%',
  },
});
