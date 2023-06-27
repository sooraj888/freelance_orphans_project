import {View, Text} from 'react-native';
import React from 'react';

export default function SupportersScreen() {
  const arr = new Array(3).fill('');

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          display: 'flex',
          height: '100%',
          height: '100%',
          padding: 10,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            display: 'flex',
            // padding: 10,
            // backgroundColor: 'red',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              marginTop: 40,
              fontSize: 25,
            }}>
            Our Supporters
          </Text>
          <View
            style={{
              // backgroundColor: 'green',
              width: '100%',
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '90%',
                minHeight: '80%',
                // backgroundColor: 'white',
                display: 'flex',
              }}>
              {arr.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      width: '100%',
                      height: 80,
                      backgroundColor: 'orange',
                      borderRadius: 10,
                      marginVertical: 5,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        backgroundColor: 'yellow',
                        height: 70,
                        width: 70,
                        marginHorizontal: 10,
                        borderRadius: 70,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text>logo</Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        height: '100%',
                        paddingHorizontal: 10,
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: 20,
                          color: 'white',
                          fontWeight: 'bold',
                        }}>
                        Supporters {index + 1}
                      </Text>
                      <Text
                        style={{
                          color: 'rgb(250,250,200)',
                        }}>
                        details
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
