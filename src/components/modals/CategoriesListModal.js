import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ActionSheet from 'react-native-actions-sheet';
import {colors, styles} from '../../themes';
import CText from '../common/CText';
import {moderateScale} from '../../common/constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {salonData} from '../../api/constant';
import RenderSalonComponents from '../RenderSalonComponents';

export default function CategoriesListModal(props) {
  let {sheetRef, selectedCategory} = props;

  const closeModal = () => sheetRef.current.hide();

  return (
    <ActionSheet ref={sheetRef} containerStyle={styles.sheetContainer}>
      <View style={localStyles.mainContainer}>
        <View style={localStyles.headerStyles}>
          <View>
            <CText type={'B18'} color={colors.black}>
              {selectedCategory}
            </CText>
            <CText type={'R14'} color={colors.grayText}>
              {'Over 4 Salons'}
            </CText>
          </View>
          <TouchableOpacity onPress={closeModal}>
            <Ionicons
              name={'close'}
              size={moderateScale(24)}
              color={colors.grayText}
            />
          </TouchableOpacity>
        </View>
        <View style={localStyles.subContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {salonData.map((itm, idx) => (
              <RenderSalonComponents
                itm={itm}
                key={idx.toString()}
                sheetRef={sheetRef}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </ActionSheet>
  );
}

const localStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.primarySurface,
  },
  headerStyles: {
    ...styles.flexRow,
    ...styles.justifyBetween,
    ...styles.p25,
  },
  subContainer: {
    borderTopLeftRadius: moderateScale(35),
    borderTopRightRadius: moderateScale(35),
    backgroundColor: colors.white,
    ...styles.p25,
  },
});
