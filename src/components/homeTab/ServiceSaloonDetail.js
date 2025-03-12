import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
// custom imports
import {colors} from '../../themes';
import {moderateScale} from '../../common/constants';

export default function ServiceSaloonDetail({detail, icon, onServiceSelect}) {
  const [expandedItems, setExpandedItems] = useState({});
  const [selectedServices, setSelectedServices] = useState({});

  // Hàm để mở hoặc đóng item
  const toggleItem = itemName => {
    setExpandedItems(prev => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  const handleSelectService = (category, service) => {
    setSelectedServices(prev => {
      // Tạo một bản sao của các dịch vụ đã chọn
      const updateServices = {...prev};

      // Kiểm tra xem dịch vụ hiện tại đã được chọn hay chưa
      if (updateServices[category]?.id === service.id) {
        // Nếu dịch vụ đã được chọn, xóa dịch vụ đó khỏi danh sách
        delete updateServices[category]; // Xóa dịch vụ khỏi danh sách
      } else {
        // Nếu dịch vụ chưa được chọn, thêm dịch vụ vào danh sách
        updateServices[category] = {...service, category}; // Thêm dịch vụ mới vào danh sách
      }

      onServiceSelect(Object.values(updateServices)); // Gọi hàm callback với danh sách đã cập nhật
      return updateServices; // Trả về danh sách dịch vụ đã cập nhật
    });
  };

  return (
    <View style={{flex: 1, marginTop: 15}}>
      {detail?.serviceType?.map(item => (
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
              {item.services.map(it => {
                return icon === true ? (
                  <TouchableOpacity
                    key={it.id}
                    onPress={() => handleSelectService(item.name, it)}
                    style={localStyles.subItemRow}>
                    <Text style={localStyles.subItemName}>{it.name}</Text>

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text style={localStyles.subItemName}>{it.price}$</Text>
                      <Ionicons
                        name={
                          selectedServices[item.name]?.id === it.id
                            ? 'radio-button-on'
                            : 'radio-button-off'
                        }
                        color={
                          selectedServices[item.name]?.id === it.id
                            ? colors.primary
                            : colors.grayText
                        }
                        size={moderateScale(22)}
                      />
                    </View>
                  </TouchableOpacity>
                ) : (
                  <View style={localStyles.subItemRow} key={it.id}>
                    <Text style={localStyles.subItemName}>{it.name}</Text>

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text style={localStyles.subItemName}>{it.price}$</Text>
                    </View>
                  </View>
                );
              })}
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
