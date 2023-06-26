import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import BottomSigningNav from '../components/BottomSigningNav';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TextBox from '../components/TextBox';
import {TouchableOpacity} from 'react-native';
import MyButton from '../components/MyButton';

export default function SignInScreen() {
  const insets = useSafeAreaInsets();
  console.log(insets);
  return (
    <View
      style={{paddingTop: StatusBar.currentHeight, backgroundColor: 'white'}}>
      <StatusBar
        translucent={true}
        hidden={true}
        backgroundColor={'transparent'}
      />
      <View
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
        }}>
        <View style={{flex: 1, paddingHorizontal: 30}}>
          <View
            style={{
              display: 'flex',

              width: '100%',
              height: '100%',
              justifyContent: 'center',
            }}>
            <View style={{paddingBottom: 20}}>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 35}}>
                Login
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: 'gray',
                  marginLeft: 2,
                }}>
                Please sign in to continue.
              </Text>
            </View>
            <View style={{}}>
              <TextBox
                icon={'mail'}
                // value={''}
                onChange={e => {
                  console.log(e);
                }}
              />
            </View>
            <View>
              <TextBox
                icon={'lock'}
                onChange={e => {
                  console.log(e);
                }}
                type={'password'}
              />
            </View>
            <View style={{width: '100%', display: 'flex'}}>
              <View style={{alignSelf: 'flex-end'}}>
                <MyButton
                  title={'Sign In'}
                  onPress={() => {
                    console.log('hi');
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        <BottomSigningNav
          message={"Don't have an account?"}
          buttonText={'Sign Up'}
          navigateScreenName={'SignUpScreen'}
        />
      </View>
    </View>
  );
}
