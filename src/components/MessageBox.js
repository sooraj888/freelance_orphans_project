import {View, Text} from 'react-native';
import React from 'react';

export default function MessageBox({massageText, subject, time, isMyMessage}) {
  return (
    <View
      style={{
        display: 'flex',
        alignSelf: isMyMessage ? 'flex-end' : 'flex-start',
        width: '100%',

        backgroundColor: 'white',

        padding: 5,
        borderRadius: 8,
      }}>
      <Text
        style={{color: 'black', fontSize: 16, fontWeight: '600', padding: 3}}>
        {String(subject).toUpperCase()}
      </Text>
      <Text style={{color: 'gray'}}>{massageText}</Text>
      {/* <View style={{width: '100%', display: 'flex'}}>
        <View style={{alignSelf: 'flex-end'}}>
          <Text style={{fontSize: 10, color: 'gray'}}>{time}</Text>
        </View>
      </View> */}
    </View>
  );
}
