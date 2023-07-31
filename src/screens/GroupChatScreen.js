import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import TextBox from '../components/TextBox';
import MessageInput from '../components/MessageInput';
import MessageBox from '../components/MessageBox';

export default function GroupChatScreen() {
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
        {/* <ScrollView
          style={{
            marginTop: 5,
          }}>
          <View style={{marginBottom: 50}}>
            <MessageBox isMyMessage={false} massageText={'hi'} time={'10:00'} />

            <MessageBox isMyMessage={true} massageText={'hi'} time={'10:00'} />
            <MessageBox
              isMyMessage={false}
              massageText={'hello all'}
              time={'10:00'}
            />
          </View>
        </ScrollView> */}

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
