import {View, Text, StyleSheet, RefreshControl} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import TextBox from '../components/TextBox';
import MessageInput from '../components/MessageInput';
import MessageBox from '../components/MessageBox';
import axios, {all} from 'axios';
import getEndPoint from '../getEndPoint';

export default function GroupChatScreen() {
  const [data, setData] = useState([]);
  const host = getEndPoint();
  const url = host + '/admin/notification';
  const callApi = async () => {
    let a = await axios
      .post(url, {})
      .then(response => {
        if (response?.data?.notification_details) {
          setData(response?.data?.notification_details);
        } else {
        }

        // console.log(response.data.image);
      })
      .catch(error => {});
  };
  useEffect(() => {
    callApi();
  });

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      callApi();
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={[styles.card, styles.elevation]}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          borderRadius: 8,
          // alignItems: 'baseline',
          backgroundColor: 'rgba(250,100,100,0.5)',
        }}>
        <Text style={styles.heading}>Notifications</Text>
      </View>
      <View
        style={{
          flex: 1,
          display: 'flex',
          backgroundColor: 'rgba(290,210,210,0.5)',
          // padding: 10,
        }}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          style={{
            marginTop: 5,
          }}>
          <View style={{marginBottom: 50, padding: 8}}>
            {/* <Text>{JSON?.stringify(data)}</Text> */}
            {data?.map((item, index) => {
              return (
                <MessageBox
                  key={index}
                  isMyMessage={false}
                  subject={item.subject}
                  massageText={item.description}
                  time={'10:00'}
                />
              );
            })}
          </View>
        </ScrollView>

        {/* <View
          style={{
            bottom: 0,
            position: 'absolute',
            left: 0,
            width: '100%',
            backgroundColor: 'white',
          }}>
          <MessageInput
            onChange={() => {}}
            placeholder={'type'}
            icon={'send'}
            onClick={() => {
              console.log('click');
            }}
          />
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: '600',
    // marginBottom: 13,
    padding: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    flex: 1,
    margin: 3,
  },
  elevation: {
    shadowColor: '#52006A',
    elevation: 20,
  },
});
