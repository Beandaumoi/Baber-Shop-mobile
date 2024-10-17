import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
// custom imports
import strings from '../../i18n/strings';
import {colors} from '../../themes';
import {moderateScale} from '../../common/constants';
import AuthApi from '../../network/AuthApi';

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

  const [expandedItems, setExpandedItems] = useState({});
  const [selectedServices, setSelectedServices] = useState({});

  // Hàm để mở hoặc đóng item
  const toggleItem = itemName => {
    setExpandedItems(prev => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  const handleSelectService = (category, serviceId) => {
    setSelectedServices(prev => ({
      ...prev,
      [category]: prev[category] === serviceId ? null : serviceId, // Toggle the selection
    }));
  };

  const [details, setDetails] = useState({});

  const getApiHairCutData = async () => {
    try {
      const response = await AuthApi.hairCut();
      setDetails(response.data);
    } catch (err) {
      console.log('aaaa', err);
    }
  };

  useEffect(() => {
    getApiHairCutData();
  }, []);

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
  return (
    <View style={{flex: 1, marginTop: 15}}>
      {details?.serviceType?.map(item => (
        <View key={item.name} style={localStyles.itemContainer}>
          <TouchableOpacity
            onPress={() => toggleItem(item.name)}
            style={localStyles.itemHeader}>
            <Text style={localStyles.itemName}>{item.name}</Text>
            <Ionicons
              key={item.id}
              name={expandedItems[item.name] ? 'caret-up' : 'caret-down'}
              color={colors.grayText}
              size={moderateScale(22)}
            />
          </TouchableOpacity>

          {/* Show sub-items if the section is expanded */}
          {expandedItems[item.name] && (
            <View style={localStyles.subItemsContainer}>
              {item.services.map(it => (
                <TouchableOpacity
                  key={it.id}
                  onPress={() => handleSelectService(item.name, it.id)}
                  style={localStyles.subItemRow}>
                  <Text style={localStyles.subItemName}>{it.name}</Text>

                  <Ionicons
                    name={
                      selectedServices[item.name] === it.id
                        ? 'radio-button-on'
                        : 'radio-button-off'
                    }
                    color={
                      selectedServices[item.name] === it.id
                        ? colors.primary
                        : colors.grayText
                    }
                    size={moderateScale(22)}
                  />
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      ))}
    </View>
  );
}

const localStyles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  itemName: {
    fontSize: 18,
  },
  subItemsContainer: {
    padding: 15,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff', // slightly darker background for sub-items
  },
  subItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  subItemName: {
    fontSize: 16,
    color: '#666', // subdued text color
    marginVertical: 5,
    marginLeft: 10,
  },
  radioActive: {
    width: 20,
    height: 20,
    borderColor: 'black',
    borderRadius: 100,
    borderWidth: 1,
    backgroundColor: '#5B24EC',
  },
  radioUnActive: {
    width: 20,
    height: 20,
    borderColor: 'black',
    borderRadius: 100,
    borderWidth: 1,
  },
});
