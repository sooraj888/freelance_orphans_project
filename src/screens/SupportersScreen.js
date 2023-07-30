import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import DonationModle from '../components/DonationModle';
import DonationList from '../components/DonationList';

export default function SupportersScreen() {
  const arr = new Array(3).fill('');

  const [modalVisible, setModalVisible] = useState(false);
  const [supportList, setSupportList] = useState();
  const SupportListUrl = 'http://10.0.2.2/admin/sponsor_list';

  const callSupportApi = async () => {
    const {data} = await axios.post(SupportListUrl);
    // "name":"asdas","description":"sadas","website":"asdasd","created":"2023-07-29 22:42:16","status":"active"
    console.log(JSON.stringify(data.sponsor_details?.[0]?.name));
    if (data.sponsor_details) {
      setSupportList(data.sponsor_details);
    } else {
      setSupportList(new Array(3).fill(''));
    }
  };

  useEffect(() => {
    try {
      callSupportApi();
    } catch (e) {}
  }, []);

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
              // flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ScrollView
              style={{
                width: '90%',
                minHeight: '80%',
                // backgroundColor: 'white',
                display: 'flex',
              }}>
              {supportList?.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      width: '100%',
                      height: 80,
                      // backgroundColor: 'rgba(74, 0, 249,0.9)',
                      borderRadius: 10,
                      marginVertical: 5,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderWidth: 2,
                      borderColor: 'rgba(200, 100, 250,1)',
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
                      {/* <Text>logo</Text> */}
                      <Image
                        source={{uri: `data:image/png;base64,{${item.img}}`}}
                        width={70}
                        style={{borderRadius: 70}}
                        height={70}></Image>
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
                          // color: 'white',
                          fontWeight: 'bold',
                        }}>
                        {item.name}
                      </Text>
                      <Text
                        style={
                          {
                            // color: 'rgb(250,250,200)',
                          }
                        }>
                        {item.description}
                      </Text>
                    </View>
                  </View>
                );
              })}
              <DonationList modalVisible={modalVisible} />
            </ScrollView>
          </View>
        </View>
      </View>
      <DonationModle
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
