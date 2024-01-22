import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';

// custom imports
import CHeader from '../../components/common/CHeader';
import strings from '../../i18n/strings';
import {colors, styles} from '../../themes';
import CText from '../../components/common/CText';

export default function AboutUs() {
  return (
    <View style={styles.mainContainerSurface}>
      <CHeader title={strings.aboutUs} />
      <View style={localStyles.mainContainerWithRadius}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.mt15}>
          <CText type={'b16'} style={styles.mb10}>
            {strings.ourHistory}
          </CText>
          <CText type={'r14'} style={styles.mb10}>
            {strings.ourHistoryDesc}
          </CText>
        </ScrollView>
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
