import {
  View,
  Text,
  TextInput,
  Button,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function FeedBack() {
  const [feedBackText, setFeedBackText] = useState('');
  const [userData, setUserData] = useState('');

  const [submitText, onChangeText] = React.useState('');

  const getUSer = async () => {
    try {
      const data = await AsyncStorage.getItem('my-key');
      setUserData(data);
    } catch (e) {}
  };

  const submitFeedBack = async () => {
    if (submitText) {
      try {
        const apiData = await axios.post('http://10.0.2.2/admin/feedback', {
          uid: userData.id,
          description: submitText,
        });
        if (apiData) {
          if (apiData.status == 200) {
            onChangeText('');
            ToastAndroid.show(
              'Feedback Submited successfully',
              ToastAndroid.SHORT,
            );
          }
          // if(apiData.status)
        }
      } catch (e) {}
    } else {
      alert('Feedback should not be empty');
    }
  };

  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        padding: 20,
      }}>
      <Text
        style={{
          fontSize: 25,
          textAlign: 'center',
          marginVertical: 30,
          fontWeight: '600',
          color: 'black',
        }}>
        Feedback
      </Text>
      <View
        style={{
          borderRadius: 10,
          borderColor: 'rgba(0,0,0,0.2)',
          borderWidth: 1,
        }}>
        <TextInput
          placeholder="Enter your feedback"
          editable
          multiline
          textAlignVertical="top"
          numberOfLines={10}
          // maxLength={40}
          onChangeText={text => onChangeText(text)}
          value={submitText}
          style={{
            padding: 10,
            fontSize: 20,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',

            display: 'flex',
            height: 150,
          }}
        />
        <Button
          title={'Submit'}
          onPress={() => {
            submitFeedBack();
          }}></Button>
      </View>
    </View>
  );
}
