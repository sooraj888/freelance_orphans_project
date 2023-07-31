import {View, Text, StatusBar, Image, ToastAndroid, Alert} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import TextBox from '../components/TextBox';
import MyButton from '../components/MyButton';
import SelectImage from '../components/SelectImage';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useCallback, useMemo, useRef} from 'react';
import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {creamBackground} from '../assets/color';
import DEFAULT_PROFILE_IMAGE from '../assets/images/deaflut_profile.png';
import Animated from 'react-native-reanimated';
import axios from 'axios';
import RNImageToBase64 from 'react-native-image-base64';
import {useDispatch} from 'react-redux';
import {getOrphanList} from '../redux/OrphansList/actions';
import getEndPoint from '../getEndPoint';

export default function UploadOrphanDetailsScreen() {
  const bottomSheetRef = useRef(null);
  const bottomSheetCloseViewRef = useRef();
  const [fileResponse, setFileResponse] = useState(null);
  // variables
  const snapPoints = useMemo(() => [100], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {}, []);

  const closeBottomTab = () => {
    bottomSheetRef.current.close();
    bottomSheetCloseViewRef.current.setNativeProps({display: 'none'});
  };

  const [image, setImage] = useState(DEFAULT_PROFILE_IMAGE);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [place, setPlace] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();
  const uploadImage = async () => {
    if (fileResponse != null) {
      if (name && age && place && description) {
        const data = {
          img: fileResponse,
          name: name,
          age: age,
          place: place,
          description: description,
        };
        const host = getEndPoint();
        let resAxios = await axios
          .post(host + '/admin/post_orphans', data)
          .then(response => {
            // Handle the success response
            // console.error(response.data);
            if (response?.data?.orphan_details) {
              setAge('');
              setName('');
              setDescription('');
              setPlace('');
              setFileResponse(null);
              setImage(DEFAULT_PROFILE_IMAGE);
              dispatch(getOrphanList());

              ToastAndroid.show(`Uploaded`, ToastAndroid.SHORT);
            } else {
              ToastAndroid.show(`Uploaded Failed`, ToastAndroid.SHORT);
              console.error('Upload Failed');
            }

            // console.log(response.data.image);
          })
          .catch(error => {
            ToastAndroid.show(` Uploaded Failed`, ToastAndroid.SHORT);
            // Handle the error response
            console.error(error);
          });
      } else {
        alert('Please Enter all details');
      }
    } else {
      // If no file selected the show alert
      alert('Please Select Orphan Image first');
    }
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1, padding: 20}}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Add New Orphan</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          // backgroundColor: 'green',
          width: '100%',
          height: '100%',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              bottomSheetRef.current.snapToIndex(0);
              bottomSheetCloseViewRef.current.setNativeProps({display: 'flex'});
            }}>
            <Image
              source={image}
              resizeMode="contain"
              onError={() => {
                ToastAndroid.show(
                  'Please select a proper image.',
                  ToastAndroid.SHORT,
                );
                setImage(DEFAULT_PROFILE_IMAGE);
              }}
              style={[
                {
                  width: 130,
                  height: 140,
                  borderRadius: 5,
                  backgroundColor: 'rgba(210,210,210,0.3)',
                  borderWidth: 1,
                  borderColor: 'gray',
                },
              ]}
            />
          </TouchableOpacity>
          <TextBox
            value={name}
            onChange={e => {
              setName(e);
            }}
            placeholder={'Name'}
          />
          <TextBox
            value={age}
            onChange={e => {
              setAge(e);
            }}
            placeholder={'Age'}
          />
          <TextBox
            value={place}
            onChange={e => {
              setPlace(e);
            }}
            placeholder={'Place'}
          />
          <TextBox
            value={description}
            onChange={e => {
              setDescription(e);
            }}
            placeholder={'Description'}
          />
          <MyButton
            hideArrow={true}
            title={'Upload'}
            onPress={() => {
              uploadImage();
            }}
          />
        </View>
      </ScrollView>

      <View
        ref={bottomSheetCloseViewRef}
        style={{
          backgroundColor: 'rgba(0,0,0,0.4)',
          position: 'absolute',

          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          display: 'none',
        }}>
        <TouchableWithoutFeedback onPress={closeBottomTab}>
          <View style={{flex: 1}}></View>
        </TouchableWithoutFeedback>
      </View>

      <BottomSheet
        handleIndicatorStyle={{
          borderRadius: 0,
          padding: 0,
          margin: 0,
          height: 0,
        }}
        backgroundStyle={{
          borderRadius: 0,
          padding: 0,
          margin: 0,
        }}
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <SelectImage
          bottomSheetRef={bottomSheetRef}
          bottomSheetCloseViewRef={bottomSheetCloseViewRef}
          setImage={setImage}
          setFileResponse={setFileResponse}
        />
      </BottomSheet>
    </View>
  );
}
