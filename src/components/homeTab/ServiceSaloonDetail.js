import {StyleSheet, TouchableOpacity, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

// custom imports
import SaloonSubDetailComponent from './SaloonSubDetailComponent';
import strings from '../../i18n/strings';
import {
  beardData,
  facialData,
  hairColorData,
  hairCutData,
  makeupData,
  manicureData,
  massageData,
  pedicureData,
  waxingData,
} from '../../api/constant';
import {colors, styles} from '../../themes';
import CText from '../common/CText';
import {moderateScale} from '../../common/constants';

export default function ServiceSaloonDetail() {
  const [radio, setRadio] = useState({
    hairCutRadio: '',
    beardRadio: '',
    facialRadio: '',
    hairColorRadio: '',
    manicureRadio: '',
    pedicureRadio: '',
    waxingRadio: '',
    massageRadio: '',
    makeupRadio: '',
  });

  const [extraData, setExtraData] = useState(false);

  useEffect(() => {
    setExtraData(!extraData);
  }, [radio]);

  const onPressRadio = itm => {
    switch (itm.category) {
      case strings.hairCut:
        return setRadio({...radio, hairCutRadio: itm.id});
      case strings.beard:
        return setRadio({...radio, beardRadio: itm.id});
      case strings.facials:
        return setRadio({...radio, facialRadio: itm.id});
      case strings.hairColor:
        return setRadio({...radio, hairColorRadio: itm.id});
      case strings.manicure:
        return setRadio({...radio, manicureRadio: itm.id});
      case strings.pedicure:
        return setRadio({...radio, pedicureRadio: itm.id});
      case strings.waxing:
        return setRadio({...radio, waxingRadio: itm.id});
      case strings.massage:
        return setRadio({...radio, massageRadio: itm.id});
      case strings.makeup:
        return setRadio({...radio, makeupRadio: itm.id});
      default:
        return null;
    }
  };

  const RenderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressRadio(item)}
        style={localStyles.root}>
        <CText type={'r14'} style={styles.flex} color={colors.grayText}>
          {item.title}
        </CText>
        <View style={styles.rowCenter}>
          <CText type={'r14'} color={colors.grayText}>
            {item.time}
          </CText>
          <CText type={'M14'} style={styles.mh5} color={colors.black}>
            {item.price}
          </CText>
          <Ionicons
            name={
              radio[item.categoryType] === item.id
                ? 'radio-button-on'
                : 'radio-button-off'
            }
            color={
              radio[item.categoryType] === item.id
                ? colors.primary
                : colors.grayText
            }
            size={moderateScale(22)}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const SubCategory = ({data}) => {
    return (
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={RenderItem}
        scrollEnabled={false}
      />
    );
  };

  return (
    <View>
      <SaloonSubDetailComponent
        title={strings.hairCut}
        description={<SubCategory data={hairCutData} />}
      />
      <SaloonSubDetailComponent
        title={strings.beard}
        description={<SubCategory data={beardData} />}
      />
      <SaloonSubDetailComponent
        title={strings.facials}
        description={<SubCategory data={facialData} />}
      />
      <SaloonSubDetailComponent
        title={strings.hairColor}
        description={<SubCategory data={hairColorData} />}
      />
      <SaloonSubDetailComponent
        title={strings.manicure}
        description={<SubCategory data={manicureData} />}
      />
      <SaloonSubDetailComponent
        title={strings.pedicure}
        description={<SubCategory data={pedicureData} />}
      />
      <SaloonSubDetailComponent
        title={strings.waxing}
        description={<SubCategory data={waxingData} />}
      />
      <SaloonSubDetailComponent
        title={strings.massage}
        description={<SubCategory data={massageData} />}
      />
      <SaloonSubDetailComponent
        title={strings.mackup}
        description={<SubCategory data={makeupData} />}
      />
    </View>
  );
}

const localStyles = StyleSheet.create({
  root: {
    ...styles.rowSpaceBetween,
    ...styles.pv5,
  },
});
