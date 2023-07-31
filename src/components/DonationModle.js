import {
  View,
  Text,
  Button,
  Modal,
  StyleSheet,
  ToastAndroid,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import TextBox from './TextBox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import getEndPoint from '../getEndPoint';

export default function DonationModle({
  modalVisible,
  setModalVisible,
  setREtry,
}) {
  const callDonateApi = async data => {
    const host = getEndPoint();

    const a = await axios.post(host + '/admin/donate', data);
    if (a.status == 200) {
      setREtry(pre => !pre);
      ToastAndroid.show(`${data.name} donated`, ToastAndroid.SHORT);
    }
  };

  const [donatedItem, setDonatedItem] = useState('');
  const [location, setLoaction] = useState('');
  return (
    <View style={{position: 'absolute', right: 20, bottom: 30}}>
      {!modalVisible && (
        <Button
          title="Donate"
          onPress={() => {
            setModalVisible(true);
          }}></Button>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Donate Details</Text>
            <TextBox
              onChange={e => {
                setDonatedItem(e);
              }}
              value={donatedItem}
              placeholder={'Donated Item Name'}
            />
            <TextBox
              value={location}
              onChange={e => {
                setLoaction(e);
              }}
              placeholder={'Location'}
            />

            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={async () => {
                  let value = '';
                  try {
                    value = JSON?.parse(await AsyncStorage.getItem('my-key'));
                  } catch (e) {}

                  if (location && donatedItem) {
                    setModalVisible(!modalVisible);

                    callDonateApi({
                      action: 'create',
                      userid: value.id,
                      name: donatedItem,
                      location: location,
                    });
                    setLoaction('');
                    setDonatedItem('');
                  } else {
                    alert('please enter the details');
                  }
                }}>
                <Text style={styles.textStyle}>Donate </Text>
              </Pressable>
              <Pressable
                style={[
                  styles.button,
                  styles.buttonClose,
                  {backgroundColor: 'gray'},
                ]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    marginHorizontal: 30,
    marginTop: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
