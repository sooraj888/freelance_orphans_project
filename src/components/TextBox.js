import {View, Text} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/MaterialIcons';

export default function TextBox({icon, onChange, value, type}) {
  return (
    <View
      style={{
        display: 'flex',
        width: '100%',
        height: 60,
        flexDirection: 'row',
        marginVertical: 10,
        shadowColor: 'gray',
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'gray',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        borderRadius: 5,
      }}>
      <View
        style={{
          width: 60,
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
          secureTextEntry={type == 'password' ? true : false}
          caretHidden
          value={value}
          style={{
            height: '100%',
            width: '100%',
            fontSize: 15,
          }}
        />
      </View>
    </View>
  );
}
