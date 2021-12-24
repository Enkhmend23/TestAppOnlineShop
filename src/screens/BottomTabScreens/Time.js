import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header';
import * as Colors from '../../constants/colors';
import {scaleSize} from '../../constants/mixins';

const Time = () => {
  return (
    <View style={styles.container}>
      <Header title="Цаг" />
      <View style={styles.body}>
        <Text>Time</Text>
      </View>
    </View>
  );
};

export default Time;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  body: {
    paddingHorizontal: scaleSize(20),
  },
});
