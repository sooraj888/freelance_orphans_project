import {View, Text, StatusBar, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';

export default function SplashScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2500,
      delay: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgb(3, 98, 252)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [
            {
              scale: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1.5],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}>
        <Text style={{color: 'white', fontSize: 20}}>Save Orphans</Text>
      </Animated.View>
    </View>
  );
}
