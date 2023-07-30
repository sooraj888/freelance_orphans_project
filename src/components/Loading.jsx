import {View, Text} from 'react-native';
import React from 'react';

export default function Loading() {
  return (
    <View
      style={{
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text size={30}>loading............</Text>
    </View>
  );
}
