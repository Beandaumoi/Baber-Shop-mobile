import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {FlashList} from '@shopify/flash-list';

// custom imports
import {colors, styles} from '../../themes';
import {
  CallIcon,
  InComingCall,
  OutGoingCall,
  SearchIcon,
} from '../../assets/svg';
import CHeader from '../../components/common/CHeader';
import strings from '../../i18n/strings';
import CText from '../../components/common/CText';
import {moderateScale} from '../../common/constants';
import {callData, chartData} from '../../api/constant';
import {StackNav} from '../../navigation/NavigationKeys';

export default function MesssageTab({navigation}) {
  const [isSelect, setIsSelect] = useState(0);

  const categoryData = [
    {
      id: 0,
      title: strings.charts,
      onPress: () => setIsSelect(0),
    },
    {
      id: 1,
      title: strings.calls,
      onPress: () => setIsSelect(1),
    },
  ];

  const onPressChats = item => navigation.navigate(StackNav.Chat, {item});

  const RightIcon = () => {
    return (
      <TouchableOpacity style={styles.mr10}>
        <SearchIcon />
      </TouchableOpacity>
    );
  };

  const RenderTab = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={item.onPress}
        style={[
          localStyles.root,
          {
            backgroundColor:
              isSelect === item.id ? colors.primaryLight : colors.white,
          },
        ]}>
        <CText
          type={'s16'}
          align={'center'}
          style={styles.pv10}
          color={isSelect === item.id ? colors.primary : colors.grayText}>
          {item.title}
        </CText>
      </TouchableOpacity>
    );
  };

  const RenderChatItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressChats(item)}
        style={localStyles.messageContainer}>
        <ImageBackground
          source={{uri: item?.imageUrl}}
          style={localStyles.userImage}
          imageStyle={{borderRadius: moderateScale(22)}}>
          <View
            style={[
              localStyles.statusContainer,
              {
                backgroundColor: item?.status ? colors.green : colors.grayText,
              },
            ]}
          />
        </ImageBackground>
        <View style={localStyles.textContainer}>
          <View>
            <CText
              type={'M16'}
              style={styles.flex}
              numberOfLines={1}
              color={colors.black}>
              {item?.title}
            </CText>
            <CText
              type={'M14'}
              color={colors.grayText}
              numberOfLines={1}
              style={[styles.mt5, styles.flex]}>
              {item?.msg}
            </CText>
          </View>
          <CText numberOfLines={1} color={colors.grayText} type={'M12'}>
            {item?.time}
          </CText>
        </View>
      </TouchableOpacity>
    );
  };

  const RenderCallItem = ({item, index}) => {
    return (
      <TouchableOpacity style={localStyles.messageContainer}>
        <ImageBackground
          source={{uri: item?.imageUrl}}
          style={localStyles.userImage}
          imageStyle={{borderRadius: moderateScale(22)}}>
          <View
            style={[
              localStyles.statusContainer,
              {
                backgroundColor: item?.status ? colors.green : colors.grayText,
              },
            ]}
          />
        </ImageBackground>
        <View style={localStyles.textContainer}>
          <View>
            <CText
              type={'M16'}
              style={styles.flex}
              numberOfLines={1}
              color={colors.black}>
              {item?.title}
            </CText>
            <View
              style={[
                styles.flexRow,
                styles.itemsCenter,
                styles.flex,
                styles.mt5,
              ]}>
              {item?.status == 'Incoming' ? <InComingCall /> : <OutGoingCall />}
              <CText
                type={'M14'}
                color={colors.grayText}
                numberOfLines={1}
                style={[styles.mr5]}>
                {item?.msg}
              </CText>
            </View>
          </View>
          <TouchableOpacity>
            <CallIcon />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainerSurface}>
      <CHeader isHideBack title={strings.Message} rightIcon={<RightIcon />} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.flexGrow1}>
        <View style={styles.mainContainerWithRadius}>
          <View style={localStyles.topContainer}>
            <View style={localStyles.tabContainer}>
              {categoryData.map((item, index) => {
                return <RenderTab key={index} item={item} index={index} />;
              })}
            </View>
          </View>
          <View style={localStyles.mainContainerWithRadius}>
            {isSelect === 0 ? (
              <FlashList
                data={chartData}
                renderItem={RenderChatItem}
                keyExtractor={(item, index) => index.toString()}
                estimatedItemSize={10}
              />
            ) : (
              <FlashList
                data={callData}
                renderItem={RenderCallItem}
                keyExtractor={(item, index) => index.toString()}
                estimatedItemSize={10}
              />
            )}
          </View>
        </View>
      </ScrollView>
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
  topContainer: {
    ...styles.ph25,
    ...styles.pv15,
  },
  root: {
    width: '50%',
    borderRadius: moderateScale(26),
  },
  tabContainer: {
    ...styles.flexRow,
    backgroundColor: colors.white,
    ...styles.mt10,
    borderRadius: moderateScale(26),
  },
  userImage: {
    width: moderateScale(44),
    height: moderateScale(44),
  },
  statusContainer: {
    width: moderateScale(10),
    height: moderateScale(10),
    borderRadius: moderateScale(5),
    position: 'absolute',
    bottom: moderateScale(3),
    right: moderateScale(5),
    borderColor: colors.white,
    borderWidth: moderateScale(1),
  },
  messageContainer: {
    ...styles.flexRow,
    ...styles.itemsCenter,
    ...styles.ph15,
    ...styles.pv10,
    ...styles.mv10,
    borderRadius: moderateScale(8),
    borderWidth: moderateScale(1),
    borderColor: colors.inputBorder,
  },
  textContainer: {
    ...styles.flexGrow1,
    ...styles.rowSpaceBetween,
    ...styles.ml10,
  },
});
