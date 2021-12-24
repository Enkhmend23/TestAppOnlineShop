import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Navigation from './src/navigations';
import {ProductStore} from './src/context/ProductContext';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import {scaleSize, FONT_BOLD, FONT_REGULAR} from './src/constants/mixins';
import * as Colors from './src/constants/colors';

const App = () => {
  const toastConfig = {
    success: props => (
      <BaseToast
        {...props}
        style={{
          borderLeftColor: Colors.primary,
          borderBottomColor: Colors.primary,
          borderBottomWidth: scaleSize(3),
          borderBottomLeftRadius: scaleSize(20),
          borderBottomRightRadius: scaleSize(20),
          width: '100%',
          height: scaleSize(60),
        }}
        contentContainerStyle={{paddingHorizontal: 15}}
        text1Style={{
          fontSize: scaleSize(15),
          fontFamily: FONT_BOLD,
        }}
        text2Style={{
          fontSize: scaleSize(10),
          fontFamily: FONT_REGULAR,
        }}
      />
    ),
    error: props => (
      <ErrorToast
        style={{
          borderLeftColor: 'red',
          borderBottomColor: 'red',
          borderBottomWidth: scaleSize(3),
          borderBottomLeftRadius: scaleSize(20),
          borderBottomRightRadius: scaleSize(20),
          width: '100%',
        }}
        {...props}
        text1Style={{
          fontSize: scaleSize(15),
          fontFamily: FONT_BOLD,
        }}
        text2Style={{
          fontSize: scaleSize(10),
          fontFamily: FONT_REGULAR,
        }}
      />
    ),
  };
  return (
    <ProductStore>
      <View style={styles.container}>
        <Navigation />
        <Toast config={toastConfig} />
      </View>
    </ProductStore>
  );
};

export default App;

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
