import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

// custom imports
import CText from '../common/CText';
import {colors, styles} from '../../themes';
import {moderateScale} from '../../common/constants';

export default function SubTextComponent({item}) {
  const [radio, setRadio] = useState(false);

  const onPressRadio = () => setRadio(!radio);

  return (
    <TouchableOpacity onPress={onPressRadio} style={localStyles.root}>
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
          name={radio ? 'radio-button-on' : 'radio-button-off'}
          color={radio ? colors.primary : colors.grayText}
          size={moderateScale(22)}
        />
      </View>
    </TouchableOpacity>
  );
}

const localStyles = StyleSheet.create({
  root: {
    ...styles.rowSpaceBetween,
    ...styles.pv5,
  },
});
