import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function OrphansDetailsCard({data}) {
  console.log(data);
  return (
    <View style={[styles.card, styles.elevation]}>
      <View
        style={{
          width: '100%',
          height: '100%',
          //   backgroundColor: 'pink',
          display: 'flex',
          //   justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          padding: 5,
        }}>
        <Image
          // source={{

          //   uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3JBI66Ewfxiq2MpyWroPkkB0NOXKYgyxDw&usqp=CAU',
          // }}
          source={{uri: `data:image/png;base64,{${data.img}}`}}
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
        <View
          style={{
            flex: 1,
            height: '100%',
            paddingLeft: 5,
          }}>
          <View
            style={{
              backgroundColor: 'rgba(210,210,210,0.3)',
              width: '100%',
              height: '100%',
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              //   paddingTop: 5,
              paddingLeft: 8,
              display: 'flex',
              justifyContent: 'space-evenly',
            }}>
            <LableValue label={'Name'} value={data.name} />
            <LableValue label={'Age'} value={data.age} />
            <LableValue label={'Place'} value={data.place} />
            <LableValue label={'Description'} value={data.description} />
          </View>
        </View>
      </View>
    </View>
  );
}

const LableValue = ({label, value}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginTop: 3,
      }}>
      <Text style={[styles.label]}>{label + ' :  '} </Text>
      <Text
        style={{
          flex: 1,
          maxHeight: 40,
        }}>
        {value}
      </Text>
    </View>
  );
};
// import StyleSheet from react-native
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    // paddingVertical: 45,
    paddingHorizontal: 10,
    width: '100%',
    marginVertical: 10,
    height: 150,
  },
  elevation: {
    shadowColor: '#52006A',
    shadowRadius: 8,
    elevation: 20,
  },
  label: {
    color: 'black',
    fontWeight: '600',
    fontSize: 15,
    minWidth: 60,
  },
});
