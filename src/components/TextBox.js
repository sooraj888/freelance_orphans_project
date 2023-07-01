import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TextBox({icon, onChange, value, type, placeholder}) {
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <View
      style={{
        display: 'flex',
        width: '100%',
        height: 60,
        flexDirection: 'row',
        marginVertical: 10,
        shadowColor: 'gray',
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'gray',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        borderRadius: 5,
        paddingHorizontal: 5,
      }}>
      {icon ? (
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
      ) : (
        <View style={{width: 20}}></View>
      )}

      <TextInput
        onChangeText={e => {
          if (onChange) {
            onChange(e);
          }
        }}
        keyboardType={
          type == 'password'
            ? isShowPassword
              ? 'visible-password'
              : 'default'
            : 'default'
        }
        placeholder={placeholder}
        secureTextEntry={type == 'password' ? !isShowPassword : false}
        value={value}
        style={{
          height: '80%',
          flex: 1,
          fontSize: 15,
        }}
      />
      {type == 'password' ? (
        <View
          style={{
            width: 60,
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              setIsShowPassword(prev => !prev);
            }}>
            <View style={[{width: 30, height: 30}, styles.center]}>
              <Ionicons
                name={!isShowPassword ? 'eye' : 'eye-off'}
                size={25}
                color={'gray'}
              />
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{}}></View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
