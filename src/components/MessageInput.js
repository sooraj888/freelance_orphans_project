import {View, Text} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';

export default function MessageInput({
  icon,
  onChange,
  value,
  type,
  placeholder,
  onClick,
}) {
  return (
    <View
      style={{
        display: 'flex',
        width: '100%',
        height: 50,
        flexDirection: 'row',
        // marginVertical: 10,
        shadowColor: 'gray',
        // elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'gray',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        borderRadius: 5,
      }}>
      <View
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput
          onChangeText={e => {
            if (onChange) {
              onChange(e);
            }
          }}
          placeholder={placeholder}
          secureTextEntry={type == 'password' ? true : false}
          value={value}
          style={{
            height: '100%',
            width: '100%',
            fontSize: 15,
            paddingLeft: 20,
          }}
        />
      </View>
      <TouchableOpacity onPress={onClick}>
        {icon && (
          <View
            style={{
              width: 50,
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign
              size={20}
              style={{paddingLeft: 10}}
              name={icon}
              color={'gray'}></AntDesign>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}
