import {
  View,
  Text,
  StatusBar,
  Dimensions,
  ToastAndroid,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import BottomSigningNav from '../components/BottomSigningNav';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TextBox from '../components/TextBox';
import {TouchableOpacity} from 'react-native';
import MyButton from '../components/MyButton';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignUpScreen({navigation}) {
  const insets = useSafeAreaInsets();

  // const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // const storeData = async value => {
  //   try {
  //     await AsyncStorage.setItem('my-key', value);
  //   } catch (e) {
  //     // saving error
  //   }
  // };

  const callApi = async () => {
    const url = 'http://10.0.2.2/admin/user_register';

    const newData = await fetch(url, {
      method: 'POST',
      mode: 'cors', // Not required, only if you need to specify CORS mode
      headers: {
        'Content-Type': 'application/json', // Specify the content type as JSON
      },
      body: JSON.stringify({
        action: 'create',
        name: name,
        email: email,
        phone: phoneNumber,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(async data => {
        // await AsyncStorage.setItem(
        //   'my-key',
        //   JSON.stringify({email: email, password: password}),
        // );
        // storeData(JSON.stringify({email: email, name: name}));
        ToastAndroid.show('Account created successfully', ToastAndroid.SHORT);
        navigation.navigate('SignInScreen');
        return data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const handleSubmit = () => {
    if (name && email && phoneNumber && password && confirmPassword) {
      if (confirmPassword == password) {
        callApi();
      } else {
        alert('Password is not matching');
      }
    } else {
      alert('Please enter all fields');
    }
  };

  return (
    <ScrollView style={{backgroundColor: 'white', paddingTop: 100}}>
      <View
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          paddingBottom: 100,
        }}>
        <View
          style={{
            flex: 7,
            paddingHorizontal: 30,
            zIndex: 20,
            // backgroundColor: 'red',
          }}>
          <View
            style={{
              display: 'flex',
              width: '100%',
              height: '100%',
              justifyContent: 'center',
            }}>
            <View style={{paddingBottom: 20}}>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 35}}>
                Create Account
              </Text>
              {/* <Text
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: 'gray',
                  marginLeft: 2,
                }}>
                Please sign in to continue.
              </Text> */}
            </View>
            <View style={{}}>
              <TextBox
                value={name}
                icon={'person'}
                onChange={e => {
                  // console.log(e);
                  setName(e);
                }}
                placeholder={'Name'}
              />
            </View>
            <View style={{}}>
              <TextBox
                value={email}
                icon={'mail'}
                onChange={e => {
                  // console.log(e);
                  setEmail(e);
                }}
                placeholder={'Email'}
              />
            </View>
            <View style={{}}>
              <TextBox
                value={phoneNumber}
                // type={""}
                icon={'phone'}
                onChange={e => {
                  // console.log(e);
                  setPhoneNumber(e);
                }}
                placeholder={'phone'}
              />
            </View>
            <View>
              <TextBox
                value={password}
                icon={'lock'}
                onChange={e => {
                  // console.log(e);
                  setPassword(e);
                }}
                placeholder={'Password'}
                type={'password'}
              />
            </View>
            <View>
              <TextBox
                value={confirmPassword}
                icon={'lock'}
                onChange={e => {
                  // console.log(e);
                  setConfirmPassword(e);
                }}
                placeholder={'Confirm Password'}
                type={'password'}
              />
            </View>
            <View
              style={{
                width: '100%',
                display: 'flex',
                backgroundColor: 'white',
              }}>
              <View style={{alignSelf: 'flex-end'}}>
                <MyButton
                  title={'Sign Up'}
                  onPress={() => {
                    // navigation.navigate('MainBottomNavigation');
                    handleSubmit();
                    // navigation.navigate('MainBottomNavigation');
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={{zIndex: 1}}>
          <BottomSigningNav
            style={{flex: 7, paddingHorizontal: 30}}
            message={'Already have an account?'}
            buttonText={'Sign In'}
            navigateScreenName={'SignInScreen'}
          />
        </View>
      </View>
    </ScrollView>
  );
}
