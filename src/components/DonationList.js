import {View, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function DonationList({modalVisible}) {
  const [showDonationList, setShowDonationList] = useState(false);
  useEffect(() => {
    if (!modalVisible) {
    }
  }, [modalVisible]);
  return (
    <View>
      <View style={{display: 'flex', width: '100%', marginTop: 30}}>
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
                color: 'gray',
                width: '100%',
                textAlign: 'center',
              }}>
              Donation List
            </Text>

            <View
              style={{
                width: '100%',
                minHeight: 500,
                backgroundColor: 'rgba(150, 162, 250,0.7)',
                borderRadius: 10,
              }}></View>
          </>
        )}
      </View>
    </View>
  );
}
