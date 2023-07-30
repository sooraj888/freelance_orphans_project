import {
  View,
  Text,
  TextInput,
  Button,
  ToastAndroid,
  TouchableHighlight,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {} from 'react-native-gesture-handler';
import {navigate} from '../navigations/RootNavigation';
import {useNavigation} from '@react-navigation/native';

export default function FeedBack() {
  const [feedBackText, setFeedBackText] = useState('');
  const [userData, setUserData] = useState('');

  const [submitText, onChangeText] = React.useState('');
  const navigation = useNavigation();

  const getUSer = async () => {
    try {
      const data = await AsyncStorage.getItem('my-key');
      setUserData(data);
    } catch (e) {}
  };

  useEffect(() => {
    getUSer();
  }, []);

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
      <View
        style={{
          position: 'absolute',
          left: 20,
          top: 25,
          zIndex: 100,
        }}>
        <Text style={{}} numberOfLines={2}>
          Email :{userData ? JSON?.parse?.(userData)?.email : ''}
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          right: 20,
          top: 15,
          zIndex: 100,
        }}>
        <Button
          title="LogOut"
          onPress={async () => {
            try {
              await AsyncStorage.setItem('my-key', '');
              navigation.navigate('SignInScreen');
            } catch (e) {
              // saving error
            }
          }}></Button>
      </View>
      <Text
        style={{
          fontSize: 25,
          textAlign: 'center',
          marginVertical: 40,
          fontWeight: '600',
          color: 'black',
          borderTopWidth: 2,
          paddingTop: 10,
        }}>
        Feedback
      </Text>
      <View
        style={{
          borderRadius: 10,
          borderColor: 'rgba(0,0,0,0.2)',
          borderWidth: 1,
          marginBottom: 30,
          paddingHorizontal: 5,
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
      </View>
      <Button
        title={'Submit'}
        color={'red'}
        onPress={() => {
          submitFeedBack();
        }}></Button>
    </View>
  );
}
