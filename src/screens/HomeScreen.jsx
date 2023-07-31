import {View, Text, Dimensions, RefreshControl} from 'react-native';
import React, {useEffect} from 'react';
import OrphansDetailsCard from '../components/OrphansDetailsCard';
import {ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useEvent} from 'react-native-reanimated';
import {getOrphanList} from '../redux/OrphansList/actions';
import Loading from '../components/Loading';
import LinearGradient from 'react-native-linear-gradient';

export default function HomeScreen() {
  const addedValue = useSelector(state => state?.orphansListReducer);

  const array = new Array(10).fill('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrphanList());
  }, []);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      dispatch(getOrphanList());
      setRefreshing(false);
    }, 2000);
  }, []);

  if (addedValue?.loading) {
    return <Loading />;
  }

  return (
    <View style={{flex: 1}}>
      {/* <Text>{JSON?.stringify(addedValue.data)}</Text> */}
      <View
        style={{
          height: 50,
          justifyContent: 'center',
          display: 'flex',

          width: '100%',
        }}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['orange', 'rgb(255,100,100)']}
          style={{
            backgroundColor: 'blue',
            paddingTop: 5,
            height: '100%',
            paddingLeft: 10,
          }}>
          <Text
            style={{
              // elevation: 20,
              fontSize: 26,
              color: 'white',
              fontWeight: '600',
            }}>
            {'Orphans Details'.toUpperCase()}
          </Text>
        </LinearGradient>
      </View>

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={{
          width: '100%',
          paddingHorizontal: 10,
          // display: 'flex',
          // justifyContent: 'space-around',
        }}>
        {addedValue?.data?.map((item, index) => {
          return <OrphansDetailsCard key={index} data={item} />;
        })}
      </ScrollView>
    </View>
  );
}
