import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import React, {useEffect, useState} from 'react';

// custom imports
import CText from '../common/CText';
import {colors, styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import strings from '../../i18n/strings';
import {saloonImageData} from '../../api/constant';
import {PlayIcon} from '../../assets/svg';

export default function GallerySaloonDetail() {
  const [isSelect, setIsSelect] = useState(0);
  const [extraData, setExtraData] = useState(false);

  useEffect(() => {
    setExtraData(!extraData);
  }, [isSelect]);

  const categoryData = [
    {
      id: 0,
      title: strings.photo,
      onPress: () => setIsSelect(0),
    },
    {
      id: 1,
      title: strings.video,
      onPress: () => setIsSelect(1),
    },
  ];

  const RenderTab = ({item}) => {
    return (
      <TouchableOpacity
        onPress={item.onPress}
        style={[
          localStyles.root,
          {
            backgroundColor:
              isSelect === item.id ? colors.primary : colors.primaryLight,
            borderTopLeftRadius: item.id === 0 ? moderateScale(26) : 0,
            borderBottomLeftRadius: item.id === 0 ? moderateScale(26) : 0,
            borderTopEndRadius: item.id === 1 ? moderateScale(26) : 0,
            borderBottomEndRadius: item.id === 1 ? moderateScale(26) : 0,
          },
        ]}>
        <CText
          type={'s16'}
          align={'center'}
          color={isSelect === item.id ? colors.white : colors.grayText}>
          {item.title}
        </CText>
      </TouchableOpacity>
    );
  };

  const RenderItem = ({item}) => {
    return (
      <ImageBackground
        source={item}
        imageStyle={{borderRadius: moderateScale(14)}}
        style={localStyles.imageStyle}
        resizeMode={'cover'}>
        {isSelect == 1 && <PlayIcon />}
      </ImageBackground>
    );
  };

  return (
    <View>
      <View style={localStyles.tabContainer}>
        {categoryData.map((item, index) => {
          return <RenderTab item={item} />;
        })}
      </View>
      <FlashList
        data={saloonImageData}
        extraData={extraData}
        renderItem={RenderItem}
        numColumns={isSelect == 0 && 2}
        estimatedItemSize={10}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.selfCenter}
      />
    </View>
  );
}

const localStyles = StyleSheet.create({
  root: {
    width: '50%',
    ...styles.ph15,
    ...styles.pv15,
  },
  tabContainer: {
    ...styles.flexRow,
    ...styles.itemsCenter,
    ...styles.justifyCenter,
    ...styles.mv15,
  },
  imageStyle: {
    width: '94%',
    height: moderateScale(155),
    margin: '3%',
    ...styles.justifyCenter,
    ...styles.itemsCenter,
  },
});
