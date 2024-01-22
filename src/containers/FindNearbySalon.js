import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

// custom imports
import CHeader from '../components/common/CHeader';
import strings from '../i18n/strings';
import {colors, styles} from '../themes';
import {moderateScale} from '../common/constants';
import CTextInput from '../components/common/CTextInput';
import FindSalonsFilter from '../components/modals/FindSalonsFilter';
import CText from '../components/common/CText';
import {HistoryLocation} from '../assets/svg';
import {FlashList} from '@shopify/flash-list';
import {addressData} from '../api/constant';

export default function FindNearbySalon() {
  const [searchText, setSearchText] = useState('');
  const findSalonFilterRef = useRef(null);

  const onPressFilter = () => findSalonFilterRef.current.show();

  const onChangeSearchField = text => setSearchText(text);

  const RenderItem = ({item}) => {
    return (
      <View style={localStyles.renderItem}>
        <HistoryLocation height={moderateScale(50)} width={moderateScale(50)} />
        <View style={styles.ml10}>
          <CText type={'S14'} color={colors.black}>
            {item.street}
          </CText>
          <CText type={'r14'} style={styles.mt5} color={colors.grayText}>
            {item.address}
          </CText>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainContainerSurface}>
      <CHeader title={strings.findNearbySalons} />
      <View style={localStyles.mainContainerWithRadius}>
        <View style={localStyles.topContainer}>
          <CTextInput
            value={searchText}
            onChangeText={onChangeSearchField}
            placeHolder={strings.search}
            containerStyle={localStyles.ipContainerStyle}
            LeftIcon={() => (
              <Ionicons
                name={'search-outline'}
                size={moderateScale(22)}
                color={colors.grayText}
                style={styles.ml15}
              />
            )}
            RightIcon={() => (
              <TouchableOpacity
                onPress={onPressFilter}
                style={localStyles.inputRightIcnStyle}>
                <Ionicons
                  name={'filter-outline'}
                  size={moderateScale(22)}
                  color={colors.white}
                />
              </TouchableOpacity>
            )}
          />
          <View style={styles.rowSpaceBetween}>
            <CText type={'S16'} style={styles.mt10} color={colors.black}>
              {strings.recentSearch}
            </CText>
            <TouchableOpacity>
              <CText type={'r14'} style={styles.mt10} color={colors.grayText}>
                {strings.clearAll}
              </CText>
            </TouchableOpacity>
          </View>
        </View>
        <FlashList
          data={addressData}
          renderItem={RenderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={10}
          contentContainerStyle={styles.ph25}
        />
        <FindSalonsFilter SheetRef={findSalonFilterRef} />
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  mainContainerWithRadius: {
    ...styles.mainContainerWithRadius,
    backgroundColor: colors.white,
  },
  topContainer: {
    ...styles.ph25,
    ...styles.pv15,
  },
  ipContainerStyle: {
    backgroundColor: colors.white,
    borderRadius: moderateScale(30),
  },
  inputRightIcnStyle: {
    ...styles.center,
    ...styles.mr5,
    ...styles.p10,
    backgroundColor: colors.primary,
    borderRadius: moderateScale(30),
  },
  renderItem: {
    ...styles.flexRow,
    ...styles.itemsCenter,
    ...styles.pv10,
  },
});
