import {StyleSheet, View} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';

// custom imports
import CHeader from '../../components/common/CHeader';
import strings from '../../i18n/strings';
import {colors, styles} from '../../themes';
import {privacyPolicyData} from '../../api/constant';
import CText from '../../components/common/CText';

export default function PrivacyPolicy() {
  const RenderItem = ({item}) => {
    return (
      <View style={styles.mt15}>
        <CText type={'b16'} style={styles.mb10}>
          {item.title}
        </CText>
        <CText type={'r14'} style={styles.mb10}>
          {item.description}
        </CText>
      </View>
    );
  };

  return (
    <View style={styles.mainContainerSurface}>
      <CHeader title={strings.privacyPolicy} />
      <View style={localStyles.mainContainerWithRadius}>
        <FlashList
          data={privacyPolicyData}
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
    ...styles.ph20,
  },
});
