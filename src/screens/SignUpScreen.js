import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function SignUpScreen() {
  return (
    <View>
      <Text>SignUpScreen</Text>
      <View style={[styles.card, styles.elevation]}>
        <View>
          <Text style={styles.heading}>
            React Native Box Shadow (Elevation)
          </Text>
        </View>
        <Text>
          By using the elevation style props to apply box-shadow for Android
          devices
        </Text>
      </View>
    </View>
  );
}
// import StyleSheet from react-native
const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
  },
  elevation: {
    shadowColor: '#52006A',
    elevation: 20,
  },
});
