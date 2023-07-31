import {View, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getEndPoit from '../getEndPoint';

export default function DonationList({modalVisible, refreshing, retry}) {
  const [showDonationList, setShowDonationList] = useState(false);

  const host = getEndPoit();
  const uri = host + '/admin/donate';
  useEffect(() => {
    if (!modalVisible) {
    }
  }, [modalVisible]);

  const [userID, setUserID] = useState('');
  const [data, setData] = useState('');

  const callApi = async () => {
    const userData = await AsyncStorage.getItem('my-key');

    const id = JSON?.parse(userData).id;

    let a = await axios
      .post(uri, {userid: id, action: 'read'})
      .then(response => {
        if (response?.data) {
          setData(response?.data);
        } else {
        }
      })
      .catch(error => {});
  };

  useEffect(() => {
    callApi();
  }, [retry]);

  useEffect(() => {
    if (refreshing) {
      callApi();
    }
  }, [refreshing]);
  return (
    <View>
      <View
        style={{
          display: 'flex',
          width: '100%',
          marginTop: 30,
          paddingBottom: 100,
        }}>
        <Button
          style={{width: '100%', padding: 90}}
          title={(!showDonationList ? 'Show ' : 'Hide') + ' Donation List'}
          onPress={() => {
            setShowDonationList(pre => !pre);
          }}></Button>

        {showDonationList && (
          <>
            <Text
              style={{
                fontSize: 25,
                paddingTop: 10,
                marginBottom: 5,
                color: 'black',
                fontWeight: 'bold',
                width: '100%',
                textAlign: 'center',
              }}>
              Your Donation List
            </Text>

            <View
              style={{
                width: '100%',
                minHeight: 500,
                backgroundColor: 'rgba(0,0,250,0.1)',
                borderRadius: 10,
              }}>
              {data?.apiresponse?.map((item, id) => {
                return (
                  <View key={id}>
                    <View
                      style={{
                        marginHorizontal: 10,
                        marginVertical: 10,
                        padding: 10,
                        backgroundColor: 'rgba(100,100, 250,0.2)',
                        borderRadius: 8,
                      }}>
                      <Text
                        style={{
                          width: '100%',
                          textAlign: 'center',
                          color: 'black',
                          fontSize: 17,
                        }}>
                        {item.name}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </>
        )}
      </View>
    </View>
  );
}
