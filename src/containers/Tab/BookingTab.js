import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlashList} from '@shopify/flash-list';

// custom imports
import CHeader from '../../components/common/CHeader';
import {colors, styles} from '../../themes';
import strings from '../../i18n/strings';
import CText from '../../components/common/CText';
import {appointmentBookingCategory, myAppBookingData} from '../../api/constant';
import {moderateScale} from '../../common/constants';
import MyAppointmentBookingComponents from '../../components/MyAppointmentBookingComponents';

export default function BookingTab() {
  const [selectedCategory, setSelectedCategory] = useState(strings.all);
  const [salonData, setSalonData] = useState(myAppBookingData);
  const [extraData, setExtraData] = useState(false);

  useEffect(() => {
    setExtraData(!extraData);
  }, [selectedCategory]);

  const onPressSelect = item => {
    if (item === strings.upcoming) {
      const data = myAppBookingData.filter(
        itm => itm.status === strings.upcoming,
      );
      setSalonData(data);
    } else if (item === strings.completed) {
      const data = myAppBookingData.filter(
        itm => itm.status === strings.completed,
      );
      setSalonData(data);
    } else if (item === strings.pending) {
      const data = myAppBookingData.filter(
        itm => itm.status === strings.pending,
      );
      setSalonData(data);
    } else {
      setSalonData(myAppBookingData);
    }
    setSelectedCategory(item);
  };

  const RenderCategoryItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressSelect(item)}
        style={[
          localStyles.categoryItm,
          selectedCategory == item && {
            borderBottomWidth: 1,
            borderColor: colors.white,
          },
        ]}>
        <CText
          type={'s16'}
          color={selectedCategory === item ? colors.white : colors.lightGray}>
          {item}
        </CText>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainerSurface}>
      <CHeader isHideBack title={strings.myAppointmentBooking} />
      <View style={styles.mainContainerWithRadius}>
        <View style={localStyles.mainContainerWithRadius}>
          <FlashList
            data={appointmentBookingCategory}
            renderItem={RenderCategoryItem}
            keyExtractor={(item, index) => index.toString()}
            extraData={extraData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            estimatedItemSize={4}
          />
        </View>

        <View style={localStyles.bottomContainer}>
          <FlatList
            data={salonData}
            renderItem={({item, index}) => {
              return <MyAppointmentBookingComponents itm={item} idx={index} />;
            }}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  mainContainerWithRadius: {
    backgroundColor: colors.primary,
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
    ...styles.pt20,
    ...styles.ph20,
  },
  categoryItm: {
    ...styles.ph10,
    ...styles.pv5,
    ...styles.mr10,
  },
  bottomContainer: {
    ...styles.ph20,
    ...styles.flex,
    backgroundColor: colors.white,
  },
});
