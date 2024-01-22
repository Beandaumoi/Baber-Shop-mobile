import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo, useRef, useState} from 'react';
import CHeader from '../components/common/CHeader';
import strings from '../i18n/strings';
import {colors, styles} from '../themes';
import CText from '../components/common/CText';
import {categoryData} from '../api/constant';
import {deviceWidth, moderateScale} from '../common/constants';
import CategoriesListModal from '../components/modals/CategoriesListModal';

export default function CategoriesScreen(props) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categoryRef = useRef(null);

  const onPressCategory = item => {
    categoryRef.current.show();
    setSelectedCategory(item);
  };

  const RenderItemList = memo(({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressCategory(item.name)}
        style={localStyles.itemContainer}>
        <Image source={item.image} style={localStyles.categoryImgesStyle} />
        <CText style={styles.mt5} type={'R14'} color={colors.grayText}>
          {item.name}
        </CText>
      </TouchableOpacity>
    );
  });
  return (
    <View style={styles.mainContainerSurface}>
      <CHeader title={strings.Categories} />
      <View style={localStyles.mainContainerWithRadius}>
        <FlatList
          data={categoryData}
          renderItem={({item, index}) => (
            <RenderItemList item={item} index={index} />
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={4}
        />
      </View>
      <CategoriesListModal
        sheetRef={categoryRef}
        selectedCategory={selectedCategory}
      />
    </View>
  );
}

const localStyles = StyleSheet.create({
  mainContainerWithRadius: {
    ...styles.mainContainerWithRadius,
    backgroundColor: colors.white,
    ...styles.p20,
  },
  topContainer: {
    ...styles.mv25,
    width: '80%',
    ...styles.selfCenter,
  },
  categoryImgesStyle: {
    width: (deviceWidth - moderateScale(80)) / 4,
    height: (deviceWidth - moderateScale(80)) / 4,
  },
  itemContainer: {
    ...styles.center,
    ...styles.m5,
  },
});
