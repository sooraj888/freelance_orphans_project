import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import UploadOrphanDetailsScreen from '../screens/UploadOrphanDetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import GroupChatScreen from '../screens/GroupChatScreen';
import SupportersScreen from '../screens/SupportersScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();

export default function MainBottomNavigation() {
  return (
    <>
      <StatusBar
        translucent={false}
        hidden={false}
        backgroundColor={'white'}
        barStyle={'dark-content'}
      />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <Foundation
                    size={25}
                    name={'home'}
                    color={focused ? 'blue' : 'gray'}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Upload"
          component={UploadOrphanDetailsScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <Ionicons
                    size={25}
                    name={'cloud-upload'}
                    color={focused ? 'blue' : 'gray'}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Inbox"
          component={GroupChatScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <AntDesign
                    size={25}
                    name={'chat'}
                    color={focused ? 'blue' : 'gray'}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Supporters"
          component={SupportersScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <MaterialIcons
                    size={25}
                    name={'support'}
                    color={focused ? 'blue' : 'gray'}
                  />
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
}
