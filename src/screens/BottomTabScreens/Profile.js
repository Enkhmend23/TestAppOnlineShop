import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header';
import * as Colors from '../../constants/colors';
import {scaleSize} from '../../constants/mixins';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Header title="Хэрэглэгчийн хэсэг" />
      <View style={styles.body}>
        <Text>Profile</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  body: {
    paddingHorizontal: scaleSize(20),
  },
});
