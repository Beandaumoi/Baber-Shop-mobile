import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import ActionSheet from 'react-native-actions-sheet';
import Ionicons from 'react-native-vector-icons/Ionicons';

// custom imports
import {colors, styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import CText from '../common/CText';
import strings from '../../i18n/strings';
import {sortByData} from '../../api/constant';
import CButton from '../common/CButton';

export default function SortBy(props) {
  let {SheetRef} = props;
  const [selectedItem, setSelectedItem] = useState('');

  const onPressClose = () => SheetRef.current?.hide();

  const onPressItem = item => setSelectedItem(item);

  const onPressApply = () => {
    setTimeout(() => {
      SheetRef.current?.hide();
    }, 300);
  };

  return (
    <ActionSheet
      ref={SheetRef}
      gestureEnabled={true}
      indicatorStyle={styles.actionSheetIndicator}
      containerStyle={localStyles.actionSheetContainer}>
      <View style={localStyles.secondaryContainer}>
        <CText type={'B18'} color={colors.black}>
          {strings.sortBy}
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
        {sortByData.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => onPressItem(item)}
              style={localStyles.renderItemStyle}>
              <CText type={'R16'} color={colors.black}>
                {item}
              </CText>
              <View>
                <Ionicons
                  name={
                    selectedItem == item
                      ? 'radio-button-on-sharp'
                      : 'radio-button-off-sharp'
                  }
                  size={moderateScale(24)}
                  color={
                    selectedItem == item ? colors.primary : colors.lightGray
                  }
                />
              </View>
            </TouchableOpacity>
          );
        })}
        <CButton
          title={strings.apply}
          type={'m18'}
          color={colors.white}
          onPress={onPressApply}
          containerStyle={styles.mt20}
        />
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
    backgroundColor: colors.primary,
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
    backgroundColor: colors.white,
    ...styles.ph20,
    ...styles.pb30,
    ...styles.pt20,
  },
  renderItemStyle: {
    ...styles.rowSpaceBetween,
    ...styles.pv10,
  },
});
