import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import ActionSheet from 'react-native-actions-sheet';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';

// custom imports
import {colors, styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import CText from '../common/CText';
import strings from '../../i18n/strings';
import CButton from '../common/CButton';
import {
  SalonServicesData,
  SalonTypeData,
  availabilityData,
  distanceData,
} from '../../api/constant';
import {StackNav} from '../../navigation/NavigationKeys';
import ChipsComponent from '../homeTab/ChipsComponent';
import SliderComponent from '../homeTab/SliderComponent';

export default function FindSalonsFilter(props) {
  const navigation = useNavigation();
  const [salonType, setSalonType] = useState('');
  let {SheetRef} = props;

  const onChangeSalonType = item => setSalonType(item.item);

  const onPressClose = () => SheetRef.current?.hide();

  const onPressApply = () => {
    setTimeout(() => {
      SheetRef.current?.hide();
      navigation.navigate(StackNav.CurrentLocation);
    }, 500);
  };

  return (
    <ActionSheet
      ref={SheetRef}
      gestureEnabled={true}
      indicatorStyle={styles.actionSheetIndicator}
      containerStyle={localStyles.actionSheetContainer}>
      <View style={localStyles.secondaryContainer}>
        <CText type={'B18'} color={colors.black}>
          {strings.filters}
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
        <Dropdown
          placeholder={'Salon Type'}
          data={SalonTypeData}
          value={salonType}
          labelField={'item'}
          valueField={'item'}
          onChange={onChangeSalonType}
          style={localStyles.dropdownContainer}
          itemStyle={localStyles.dropdownItem}
        />
        <Dropdown
          placeholder={'Services'}
          data={SalonServicesData}
          value={salonType}
          labelField={'item'}
          valueField={'item'}
          onChange={onChangeSalonType}
          style={localStyles.dropdownContainer}
          itemStyle={localStyles.dropdownItem}
        />
        <SliderComponent
          title={strings.priceRange}
          startPoint={10}
          endPoint={50}
          maxValue={100}
          subTitle1={'$'}
        />
        <CText type={'S16'} style={localStyles.textStyles}>
          {strings.rating}
        </CText>
        <ChipsComponent />
        <CText type={'S16'} style={localStyles.textStyles}>
          {strings.availability}
        </CText>
        <ChipsComponent chipsData={availabilityData} />
        <CText type={'S16'} style={localStyles.textStyles}>
          {strings.distance}
        </CText>
        <ChipsComponent chipsData={distanceData} />
        <View style={localStyles.btnContainer}>
          <CButton
            title={strings.cancel}
            type={'S16'}
            color={colors.red}
            containerStyle={localStyles.transparentBtnContainer}
            onPress={onPressClose}
          />
          <CButton
            title={strings.apply}
            type={'S16'}
            color={colors.white}
            containerStyle={localStyles.btnWithBgContainer}
            onPress={onPressApply}
          />
        </View>
      </View>
    </ActionSheet>
  );
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
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
    backgroundColor: colors.white,
    ...styles.ph20,
    ...styles.pb30,
    ...styles.pt20,
  },
  cardImage: {
    width: moderateScale(50),
    height: moderateScale(40),
  },
  btnContainer: {
    ...styles.pt20,
    ...styles.rowSpaceAround,
    backgroundColor: colors.white,
  },
  btnWithBgContainer: {
    width: '45%',
  },
  transparentBtnContainer: {
    width: '45%',
    backgroundColor: colors.transparent,
    borderWidth: moderateScale(1),
    borderColor: colors.red,
  },
  dropdownContainer: {
    borderWidth: moderateScale(1),
    borderColor: colors.inputBorder,
    borderRadius: moderateScale(20),
    ...styles.ph15,
    ...styles.pv5,
    ...styles.mb15,
  },
  dropdownItem: {
    color: colors.black,
    ...styles.pv10,
    ...styles.ph15,
  },
  textStyles: {
    ...styles.ph5,
    ...styles.pv15,
  },
});
