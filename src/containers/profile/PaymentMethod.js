import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';

// custom imports
import {colors, styles} from '../../themes';
import CHeader from '../../components/common/CHeader';
import strings from '../../i18n/strings';
import {moderateScale} from '../../common/constants';
import CText from '../../components/common/CText';
import {MenuIcon} from '../../assets/svg';
import {paymentMethodData} from '../../api/constant';
import PaymentMethodModal from '../../components/modals/PaymentMethodModal';
import CButton from '../../components/common/CButton';
import {StackNav} from '../../navigation/NavigationKeys';

export default function PaymentMethod({navigation}) {
  const editSheetRef = React.useRef(null);

  const onPressMenu = () => editSheetRef?.current?.show();

  const onPressAddNewCard = () => navigation.navigate(StackNav.AddNewCard);

  const RenderCard = ({item}) => {
    return (
      <View style={localStyles.cardContainer}>
        <View style={[styles.flexRow, styles.itemsCenter]}>
          <Image
            resizeMode="cover"
            source={item?.iconImage}
            style={localStyles.cardImage}
          />
          <CText type={'M14'} style={styles.ml10}>
            {item?.title}
          </CText>
        </View>
        <TouchableOpacity onPress={onPressMenu} style={styles.itemsEnd}>
          <MenuIcon />
        </TouchableOpacity>
      </View>
    );
  };

  const ListFooterComponent = () => {
    return (
      <CButton
        title={strings.addNewCard}
        type={'S16'}
        color={colors.white}
        containerStyle={localStyles.addNewCardBtn}
        onPress={onPressAddNewCard}
      />
    );
  };

  return (
    <View style={styles.mainContainerSurface}>
      <CHeader title={strings.paymentMethods} />
      <View style={localStyles.mainContainerWithRadius}>
        <FlashList
          data={paymentMethodData}
          renderItem={RenderCard}
          keyExtractor={(item, index) => index.toString()}
          estimatedItemSize={10}
          ListFooterComponent={ListFooterComponent}
          showsVerticalScrollIndicator={false}
          bounces={false}
        />
      </View>
      <PaymentMethodModal SheetRef={editSheetRef} />
    </View>
  );
}

const localStyles = StyleSheet.create({
  mainContainerWithRadius: {
    ...styles.mainContainerWithRadius,
    backgroundColor: colors.white,
    ...styles.pt10,
  },
  cardContainer: {
    ...styles.rowSpaceBetween,
    ...styles.mh20,
    ...styles.mt20,
    ...styles.p10,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: moderateScale(10),
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: moderateScale(50),
    height: moderateScale(40),
  },
  addNewCardBtn: {
    ...styles.mh20,
    ...styles.mt20,
    ...styles.mb20,
  },
});
