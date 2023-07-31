import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import BottomSigningNav from '../components/BottomSigningNav';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TextBox from '../components/TextBox';
import {TouchableOpacity} from 'react-native';
import MyButton from '../components/MyButton';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {add} from '../redux/Add/action';
import {signIn} from '../redux/SingIn/action';

export default function SignInScreen({navigation}) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const addedValue = useSelector(state => state?.signInReducer);

  if (addedValue?.loading) {
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

  return (
    <View style={{backgroundColor: 'white'}}>
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
                value={email}
                icon={'mail'}
                onChange={e => {
                  // console.log(e);
                  setEmail(e);
                }}
                placeholder={'Email'}
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
            <View style={{width: '100%', display: 'flex'}}>
              <View style={{alignSelf: 'flex-end'}}>
                <MyButton
                  title={'Sign In'}
                  onPress={() => {
                    // dispatch(add(1));
                    if (email && password) {
                      dispatch(signIn({email, password}));
                    } else {
                      alert('Please enter the details');
                    }

                    // navigation.navigate('MainBottomNavigation');
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
