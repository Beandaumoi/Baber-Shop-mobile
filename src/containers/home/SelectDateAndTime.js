import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';

// custom imports
import CHeader from '../../components/common/CHeader';
import CButton from '../../components/common/CButton';
import {colors, styles} from '../../themes';
import strings from '../../i18n/strings';
import CText from '../../components/common/CText';
import {moderateScale} from '../../common/constants';
import {StackNav} from '../../navigation/NavigationKeys';
import DatePicker from 'react-native-date-picker';

export default function SelectDateAndTime({navigation, route}) {
  const {detail, dataBook} = route.params;
  //Hàm set time
  const startTime = detail.openAt;
  const endTime = detail.closeAt;
  const [timeSlots, setTimeSlots] = useState([]);

  useEffect(() => {
    if (startTime && endTime) {
      const timeSlotsArray = [];

      // Chuyển đổi openAt và closeAt thành đối tượng Date
      let [openHour, openMinute] = startTime.split(':').map(Number);
      let [closeHour, closeMinute] = endTime.split(':').map(Number);

      let currentTime = new Date();
      currentTime.setHours(openHour);
      currentTime.setMinutes(openMinute);
      currentTime.setSeconds(0);

      const closingTime = new Date();
      closingTime.setHours(closeHour);
      closingTime.setMinutes(closeMinute);
      closingTime.setSeconds(0);

      // Lặp qua và thêm 30 phút cho mỗi lần lặp, dừng khi vượt quá closingTime
      while (currentTime <= closingTime) {
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();

        // Định dạng lại giờ phút thành HH:MM
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}`;
        timeSlotsArray.push(formattedTime);

        // Thêm 30 phút
        currentTime.setMinutes(currentTime.getMinutes() + 30);
      }

      setTimeSlots(timeSlotsArray); // Lưu mảng giờ vào state
    }
  }, [startTime, endTime]);
  //End

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [selectedDate, setSelectedDate] = useState(date);
  const [selectedTime, setSelectedTime] = useState(null);

  const onPressTime = item => setSelectedTime(item);

  const onPressContinue = () => {
    if (selectedTime) {
      navigation.navigate(StackNav.YourAppointment, {
        detail: detail,
        dataBook: {
          ...dataBook,
          selectedTime,
          selectedDate,
        },
      });
    } else {
      Alert.alert('Selection Required', 'You have to choose time!');
    }
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
        onPress={() => onPressTime(item)}
        style={[
          localStyles.timeContainer,
          {
            backgroundColor:
              item.status == strings.booked
                ? colors.secondarySurface
                : selectedTime === item
                ? colors.primary
                : colors.primarySurface,
          },
        ]}>
        <CText
          type={'R14'}
          color={
            item.status == strings.booked
              ? colors.green
              : selectedTime === item
              ? colors.white
              : colors.grayText
          }>
          {item}
        </CText>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainerSurface}>
      <CHeader title={'Select Date & Time'} />
      <View style={styles.mainContainerWithRadius}>
        <View style={styles.mb10}>
          <TouchableOpacity onPress={() => setOpen(true)}>
            <CText
              type={'R16'}
              color={colors.white}
              align={'center'}
              style={localStyles.monthStyle}>
              {selectedDate.toLocaleDateString('en-GB')}
            </CText>
          </TouchableOpacity>
          <DatePicker
            minimumDate={new Date()}
            mode="date"
            modal
            open={open}
            date={selectedDate}
            onConfirm={newDate => {
              setOpen(false);
              setSelectedDate(newDate);
            }}
            onCancel={() => setOpen(false)}
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
            data={timeSlots}
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
