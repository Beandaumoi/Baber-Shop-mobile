import {StyleSheet, TouchableOpacity} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import {FlashList} from '@shopify/flash-list';

// Custom Imports
import {colors, styles} from '../../themes';
import {mostPopularData} from '../../api/constant';
import CText from '../common/CText';
import {moderateScale} from '../../common/constants';

const ChipsComponent = props => {
  const {chipsData} = props;
  const [selectedChips, setSelectedChips] = useState([strings.all]);
  const [extraData, setExtraData] = useState(true);

  useEffect(() => {
    setExtraData(!extraData);
  }, [selectedChips, colors]);

  const onPressChips = value => {
    if (selectedChips.includes(value)) {
      setSelectedChips(selectedChips.filter(item => item !== value));
    } else {
      setSelectedChips([...selectedChips, value]);
    }
  };

  const renderChips = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressChips(item)}
        style={[
          localStyles.chipsContainer,
          {
            backgroundColor: selectedChips.includes(item)
              ? colors.primary
              : colors.primarySurface,
          },
        ]}>
        <CText
          type={'S16'}
          color={selectedChips.includes(item) ? colors.white : colors.grayText}>
          {item}
        </CText>
      </TouchableOpacity>
    );
  };

  return (
    <FlashList
      data={!!chipsData ? chipsData : mostPopularData}
      renderItem={renderChips}
      extraData={extraData}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.mb15}
      estimatedItemSize={10}
    />
  );
};

export default memo(ChipsComponent);

const localStyles = StyleSheet.create({
  chipsContainer: {
    ...styles.ph15,
    ...styles.pv5,
    borderRadius: moderateScale(25),
    ...styles.mh5,
    ...styles.rowCenter,
  },
});
