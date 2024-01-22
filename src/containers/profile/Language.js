import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FlashList} from '@shopify/flash-list';

// custom imports
import CText from '../../components/common/CText';
import {colors, styles} from '../../themes';
import CHeader from '../../components/common/CHeader';
import strings from '../../i18n/strings';
import {languageData} from '../../api/constant';
import {moderateScale} from '../../common/constants';

export default function Language() {
  const [isSelected, setIsSelected] = useState('English');

  const onPressItem = item => setIsSelected(item);

  const RenderData = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressItem(item.lnName)}
        style={localStyles.settingsContainer}>
        <CText type="m16">{item.lnName}</CText>
        <View style={localStyles.rightContainer}>
          <Ionicons
            name={
              isSelected === item.lnName
                ? 'radio-button-on'
                : 'radio-button-off'
            }
            size={moderateScale(22)}
            color={colors.primary}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainerSurface}>
      <CHeader title={strings.language} />
      <View style={localStyles.mainContainerWithRadius}>
        <FlashList
          data={languageData}
          extraData={isSelected}
          renderItem={RenderData}
          keyExtractor={(item, index) => index.toString()}
          estimatedItemSize={10}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  mainContainerWithRadius: {
    ...styles.mainContainerWithRadius,
    backgroundColor: colors.white,
    ...styles.pt20,
    ...styles.ph20,
  },
  settingsContainer: {
    ...styles.rowSpaceBetween,
    ...styles.p15,
    ...styles.mv10,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(8),
    borderColor: colors.inputBorder,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
});
