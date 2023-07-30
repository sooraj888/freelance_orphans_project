import {View, Text, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import OrphansDetailsCard from '../components/OrphansDetailsCard';
import {ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useEvent} from 'react-native-reanimated';
import {getOrphanList} from '../redux/OrphansList/actions';
import Loading from '../components/Loading';

export default function HomeScreen() {
  const addedValue = useSelector(state => state?.orphansListReducer);
  console.warn(addedValue);

  const array = new Array(10).fill('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrphanList());
  }, []);

  if (addedValue?.loading) {
    return <Loading />;
  }

  return (
    <View style={{flex: 1}}>
      {/* <Text>{JSON.stringify(addedValue.data)}</Text> */}
      <View
        style={{
          height: 50,
          justifyContent: 'center',
          display: 'flex',
          paddingLeft: 10,
          width: '100%',
          elevation: 5,
          // backgroundColor: 'red',
        }}>
        <View style={{}}>
          <Text
            style={{
              // elevation: 20,
              fontSize: 30,
              color: 'black',
              fontWeight: '500',
            }}>
            Orphans Details
          </Text>
        </View>
      </View>

      <ScrollView
        style={{
          width: '100%',
          paddingHorizontal: 10,
          // display: 'flex',
          // justifyContent: 'space-around',
        }}>
        {array?.map((item, index) => {
          return <OrphansDetailsCard key={index} />;
        })}
      </ScrollView>
    </View>
  );
}
