import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

// custom imports
import strings from '../i18n/strings';
import {colors, styles} from '../themes';
import CHeader from '../components/common/CHeader';
import {moderateScale} from '../common/constants';
import CText from '../components/common/CText';
import {salonData} from '../api/constant';
import NearbySaloonComponent from '../components/homeTab/NearbySaloonComponent';
import RenderSalonComponents from '../components/RenderSalonComponents';
import SortBy from '../components/modals/SortBy';

export default function SalonsListScreen() {
  const [isSelect, setIsSelect] = useState(0);

  const sortByRef = React.useRef(null);

  const onPressIcon1 = () => setIsSelect(0);
  const onPressIcon2 = () => setIsSelect(1);

  const onPressSort = () => sortByRef.current?.show();

  return (
    <View style={styles.mainContainerSurface}>
      <CHeader title={strings.NearbySalons} />
      <View style={styles.mainContainerWithRadius}>
        <View style={localStyles.topContainer}>
          <TouchableOpacity onPress={onPressSort} style={styles.rowCenter}>
            <View>
              <Ionicons
                name={'options-outline'}
                size={moderateScale(20)}
                color={colors.white}
              />
            </View>
            <CText type={'s16'} color={colors.white} style={styles.ml5}>
              {strings.sort}
            </CText>
          </TouchableOpacity>
          <View style={styles.rowCenter}>
            <TouchableOpacity onPress={onPressIcon1}>
              <Ionicons
                name={'albums-outline'}
                size={moderateScale(20)}
                color={isSelect == 0 ? colors.white : colors.primaryLight}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressIcon2}>
              <Ionicons
                name={'stop-outline'}
                size={moderateScale(20)}
                color={isSelect == 1 ? colors.white : colors.primaryLight}
                style={styles.ml5}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={localStyles.mainContainerWithRadius}>
          {salonData.map((itm, idx) =>
            isSelect == 1 ? (
              <NearbySaloonComponent
                key={idx.toString()}
                itm={itm}
                idx={idx}
                isVertical={false}
              />
            ) : (
              <RenderSalonComponents itm={itm} idx={idx} key={idx.toString()} />
            ),
          )}
        </ScrollView>
      </View>
      <SortBy SheetRef={sortByRef} />
    </View>
  );
}

const localStyles = StyleSheet.create({
  mainContainerWithRadius: {
    ...styles.mainContainerWithRadius,
    backgroundColor: colors.white,
    ...styles.ph25,
  },
  topContainer: {
    ...styles.ph25,
    ...styles.pv15,
    ...styles.rowSpaceBetween,
  },
});
