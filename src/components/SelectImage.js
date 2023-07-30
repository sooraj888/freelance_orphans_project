import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useCallback, useMemo, useRef} from 'react';
import {StyleSheet} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {creamBackground} from '../assets/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DocumentPicker from 'react-native-document-picker';
import DEFAULT_PROFILE_IMAGE from '../assets/images/deaflut_profile.png';

export default function SelectImage({
  bottomSheetRef,
  bottomSheetCloseViewRef,
  setImage,
  setFileResponse,
}) {
  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
        type: 'image/*',
        allowMultiSelection: false,
      });

      setFileResponse(response);
      setImage({uri: response?.[0]?.uri});
    } catch (err) {}
  }, []);

  const closeBottomTab = () => {
    bottomSheetRef.current.close();
    bottomSheetCloseViewRef.current.setNativeProps({display: 'none'});
  };
  return (
    <View style={styles.contentContainer}>
      <View style={styles.center}>
        <TouchableOpacity
          onPress={() => {
            handleDocumentSelection();
            closeBottomTab();
          }}>
          <View style={[styles.buttons, styles.center]}>
            <MaterialCommunityIcons
              size={25}
              name={'folder-image'}
              color={'gray'}></MaterialCommunityIcons>
          </View>
        </TouchableOpacity>
        <Text>upload</Text>
      </View>
      <View style={styles.center}>
        <TouchableOpacity
          onPress={() => {
            setFileResponse([]);
            setImage(DEFAULT_PROFILE_IMAGE);
            closeBottomTab();
          }}>
          <View style={[styles.buttons, styles.center]}>
            <MaterialCommunityIcons
              size={25}
              name={'delete'}
              color={'gray'}></MaterialCommunityIcons>
          </View>
        </TouchableOpacity>
        <Text>Remove</Text>
      </View>
      <View style={styles.center}>
        <TouchableOpacity onPress={() => closeBottomTab()}>
          <View style={[styles.buttons, styles.center]}>
            <AntDesign size={25} name={'close'} color={'gray'}></AntDesign>
          </View>
        </TouchableOpacity>
        <Text>Cancel</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttons: {
    width: 50,
    height: 50,
    backgroundColor: creamBackground,
    borderRadius: 50,
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
