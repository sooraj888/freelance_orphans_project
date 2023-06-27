import {View, Text, StatusBar, Image} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import TextBox from '../components/TextBox';
import MyButton from '../components/MyButton';

export default function UploadOrphanDetailsScreen() {
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
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3JBI66Ewfxiq2MpyWroPkkB0NOXKYgyxDw&usqp=CAU',
            }}
            resizeMode="contain"
            style={[
              {
                width: 130,
                height: 140,
                borderRadius: 5,
                backgroundColor: 'rgba(210,210,210,0.3)',
              },
            ]}
          />
          <TextBox onChange={() => {}} placeholder={'Name'} />
          <TextBox onChange={() => {}} placeholder={'Age'} />
          <TextBox onChange={() => {}} placeholder={'D.O.B'} />
          <TextBox onChange={() => {}} placeholder={'Status'} />
          <MyButton hideArrow={true} title={'Upload'} onPress={() => {}} />
        </View>
      </ScrollView>
    </View>
  );
}
