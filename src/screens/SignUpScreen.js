import {View, Text, StatusBar, Dimensions} from 'react-native';
import React from 'react';
import BottomSigningNav from '../components/BottomSigningNav';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TextBox from '../components/TextBox';
import {TouchableOpacity} from 'react-native';
import MyButton from '../components/MyButton';

export default function SignUpScreen({navigation}) {
  const insets = useSafeAreaInsets();
  console.log(insets);
  return (
    <View style={{backgroundColor: 'white'}}>
      <View
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
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
                icon={'person'}
                onChange={e => {
                  // console.log(e);
                }}
                placeholder={'Name'}
              />
            </View>
            <View style={{}}>
              <TextBox
                icon={'mail'}
                onChange={e => {
                  // console.log(e);
                }}
                placeholder={'Email'}
              />
            </View>
            <View>
              <TextBox
                icon={'lock'}
                onChange={e => {
                  // console.log(e);
                }}
                placeholder={'Password'}
                type={'password'}
              />
            </View>
            <View>
              <TextBox
                icon={'lock'}
                onChange={e => {
                  // console.log(e);
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
                    navigation.navigate('MainBottomNavigation');
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
    </View>
  );
}
