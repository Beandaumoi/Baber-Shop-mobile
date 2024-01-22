import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ActionSheet from 'react-native-actions-sheet';
import Ionicons from 'react-native-vector-icons/Ionicons';

// custom imports
import {colors, styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import CText from '../common/CText';
import strings from '../../i18n/strings';
import CButton from '../common/CButton';
import images from '../../assets/images';
import CTextInput from '../common/CTextInput';

export default function WriteReview(props) {
  let {SheetRef} = props;
  const [rating, setRating] = useState('');
  const [reviewText, setReviewText] = useState('');

  const onPressClose = () => SheetRef.current?.hide();

  const onPressReview = index => setRating(index);

  const onChangeReviewText = text => setReviewText(text);

  const onPressApply = () => {
    setTimeout(() => {
      SheetRef.current?.hide();
    }, 300);
  };

  const renderStar = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressReview(index)}
        style={styles.mh10}>
        <Image
          source={rating < index ? images.emptyStar : images.fillStar}
          style={localStyles.starContainer}
        />
      </TouchableOpacity>
    );
  };

  return (
    <ActionSheet
      ref={SheetRef}
      gestureEnabled={true}
      indicatorStyle={styles.actionSheetIndicator}
      containerStyle={localStyles.actionSheetContainer}>
      <View style={localStyles.secondaryContainer}>
        <CText type={'B18'} color={colors.black}>
          {strings.writeReview}
        </CText>
        <TouchableOpacity onPress={onPressClose}>
          <Ionicons
            name={'close-sharp'}
            size={moderateScale(24)}
            color={colors.textColor}
          />
        </TouchableOpacity>
      </View>
      <View style={localStyles.mainContainerWithRadius}>
        <View style={localStyles.ratingContainer}>
          <CText type={'M16'} style={styles.mb20}>
            {strings.enterYourOpinion}
          </CText>
          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={renderStar}
            keyExtractor={item => item.toString()}
            horizontal
            bounces={false}
          />
        </View>
        <CTextInput
          multiline
          value={reviewText}
          label={strings.enterYourOpinion}
          containerStyle={styles.mb10}
          placeHolder={strings.message}
          onChangeText={onChangeReviewText}
          keyBoardType={'default'}
        />
        <CButton
          title={strings.apply}
          type={'m18'}
          color={colors.white}
          onPress={onPressApply}
          containerStyle={styles.mt20}
        />
      </View>
    </ActionSheet>
  );
}

const localStyles = StyleSheet.create({
  actionSheetContainer: {
    backgroundColor: colors.primarySurface,
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
  },
  secondaryContainer: {
    ...styles.rowSpaceBetween,
    ...styles.ph20,
    ...styles.pt5,
    ...styles.pb15,
  },
  mainContainerWithRadius: {
    backgroundColor: colors.primary,
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
    backgroundColor: colors.white,
    ...styles.ph20,
    ...styles.pb30,
    ...styles.pt20,
  },
  starContainer: {
    height: moderateScale(30),
    width: moderateScale(30),
    ...styles.mb10,
  },
  ratingContainer: {
    ...styles.mt15,
  },
});
