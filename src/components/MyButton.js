import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

export default function MyButton({title, onPress}) {
  return (
    <TouchableOpacity onPress={() => onPress()} style={{}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['orange', 'rgb(255,100,100)']}
        style={{
          backgroundColor: 'orange',
          paddingHorizontal: 25,
          height: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 25,
          flexDirection: 'row',
          marginVertical: 10,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          {String(title).toLocaleUpperCase()}
        </Text>
        <AntDesign
          size={20}
          style={{paddingLeft: 10}}
          name={'arrowright'}
          color={'white'}></AntDesign>
      </LinearGradient>
    </TouchableOpacity>
  );
}
