import {StyleSheet, View} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';

// custom imports
import {colors, styles} from '../../themes';
import strings from '../../i18n/strings';
import CHeader from '../../components/common/CHeader';
import {salonData} from '../../api/constant';
import RenderSalonComponents from '../../components/RenderSalonComponents';

export default function FavoritesSalons() {
  const RenderItem = ({item, index}) => {
    return (
      <RenderSalonComponents itm={item} idx={index} key={index.toString()} />
    );
  };

  return (
    <View style={styles.mainContainerSurface}>
      <CHeader title={strings.favoriteSaloon} />
      <View style={localStyles.mainContainerWithRadius}>
        <FlashList
          data={salonData}
          renderItem={RenderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={10}
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
  },
});
