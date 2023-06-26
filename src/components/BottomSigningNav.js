import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function BottomSigningNav({
  message,
  buttonText,
  navigateScreenName,
}) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',
        paddingVertical: 20,
      }}>
      <Text>{message + ' '}</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(navigateScreenName);
        }}>
        <View>
          <Text style={{color: 'rgb(255,80,80)'}}>{buttonText}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
