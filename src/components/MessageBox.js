import {View, Text} from 'react-native';
import React from 'react';

export default function MessageBox({massageText, time, isMyMessage}) {
  return (
    <View
      style={{
        display: 'flex',
        alignSelf: isMyMessage ? 'flex-end' : 'flex-start',
        width: '80%',
        backgroundColor: 'white',
        margin: 2,
        padding: 5,
        borderRadius: 8,
      }}>
      <Text style={{color: 'black'}}>{massageText}</Text>
      <View style={{width: '100%', display: 'flex'}}>
        <View style={{alignSelf: 'flex-end'}}>
          <Text style={{fontSize: 10, color: 'gray'}}>{time}</Text>
        </View>
      </View>
    </View>
  );
}
