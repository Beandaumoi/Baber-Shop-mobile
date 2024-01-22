import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

// custom imports
import CHeader from '../../components/common/CHeader';
import CButton from '../../components/common/CButton';
import {colors, styles} from '../../themes';
import strings from '../../i18n/strings';
import CText from '../../components/common/CText';
import {moderateScale} from '../../common/constants';
import {mayDayData, mayMonthData} from '../../api/constant';
import {StackNav} from '../../navigation/NavigationKeys';

export default function SelectDateAndTime({navigation}) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const onPressDate = item => setSelectedDate(item);
  const onPressTime = item => setSelectedTime(item);

  const onPressContinue = () => navigation.navigate(StackNav.YourAppointment);

  const DateComponent = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onPressDate(item)}
        style={[
          localStyles.dateOuterContainer,
          {
            backgroundColor:
              selectedDate === item ? colors.white : colors.primaryLight,
          },
        ]}>
        <View
          style={[
            localStyles.dateInnerContainer,
            {
              backgroundColor:
                selectedDate === item ? colors.primary : colors.primarySurface,
            },
          ]}>
          <CText
            type={'M14'}
            color={selectedDate === item ? colors.white : colors.grayText}>
            {item.date}
          </CText>
        </View>
        <CText
          type={'R12'}
          color={selectedDate === item ? colors.black : colors.grayText}>
          {item.day}
        </CText>
      </TouchableOpacity>
    );
  };

  const RenderStatus = ({color, title}) => {
    return (
      <View style={localStyles.statusContainer}>
        <View style={[localStyles.circleContainer, {backgroundColor: color}]} />
        <CText type={'R14'} color={colors.grayText}>
          {title}
        </CText>
      </View>
    );
  };

  const RenderTime = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onPressTime(item.time)}
        style={[
          localStyles.timeContainer,
          {
            backgroundColor:
              item.status == strings.booked
                ? colors.secondarySurface
                : selectedTime === item.time
                ? colors.primary
                : colors.primarySurface,
          },
        ]}>
        <CText
          type={'R14'}
          color={
            item.status == strings.booked
              ? colors.green
              : selectedTime === item.time
              ? colors.white
              : colors.grayText
          }>
          {item.time}
        </CText>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainerSurface}>
      <CHeader title={'Select Date & Time'} />
      <View style={styles.mainContainerWithRadius}>
        <View style={styles.mb10}>
          <CText
            type={'R16'}
            color={colors.white}
            align={'center'}
            style={localStyles.monthStyle}>
            {'August 2022'}
          </CText>
          <FlatList
            data={mayMonthData}
            renderItem={DateComponent}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.ph10}
          />
        </View>
        <View style={localStyles.mainContainerWithRadius}>
          <View style={styles.rowSpaceBetween}>
            <CText type={'B16'} color={colors.black}>
              {'Time'}
            </CText>
            <View style={styles.rowCenter}>
              <RenderStatus color={colors.primary} title={strings.selected} />
              <RenderStatus
                color={colors.primaryLight}
                title={strings.available}
              />
              <RenderStatus color={colors.green} title={strings.booked} />
            </View>
          </View>
          <FlatList
            data={mayDayData}
            renderItem={RenderTime}
            numColumns={4}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.pv10}
          />
        </View>
      </View>
      <View style={{backgroundColor: colors.white}}>
        <CButton
          title={strings.continue}
          type={'B18'}
          color={colors.white}
          onPress={onPressContinue}
          containerStyle={localStyles.buttonStyle}
        />
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  mainContainerWithRadius: {
    ...styles.mainContainerWithRadius,
    backgroundColor: colors.white,
    ...styles.pv15,
    ...styles.ph20,
  },
  buttonStyle: {
    ...styles.mb10,
    ...styles.mt10,
    ...styles.mh20,
  },
  monthStyle: {
    ...styles.pv15,
  },
  dateOuterContainer: {
    ...styles.center,
    height: moderateScale(66),
    width: moderateScale(46),
    borderRadius: moderateScale(33),
    ...styles.mh5,
    backgroundColor: colors.white,
  },
  dateInnerContainer: {
    ...styles.center,
    height: moderateScale(36),
    width: moderateScale(36),
    borderRadius: moderateScale(18),
    backgroundColor: colors.primary,
  },
  circleContainer: {
    height: moderateScale(8),
    width: moderateScale(8),
    borderRadius: moderateScale(4),
    backgroundColor: colors.primary,
    ...styles.mr5,
  },
  statusContainer: {
    ...styles.rowCenter,
    ...styles.ml10,
  },
  timeContainer: {
    backgroundColor: colors.primaryLight,
    height: moderateScale(40),
    borderRadius: moderateScale(8),
    ...styles.center,
    width: '23%',
    margin: '1%',
  },
});
