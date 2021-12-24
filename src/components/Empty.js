import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Images from '../constants/images';
import {FONT_BOLD, scaleSize} from '../constants/mixins';

const {empty} = Images;

const Empty = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={empty} />
      <Text style={styles.emptyText}>Хоосон байна</Text>
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: scaleSize(150),
    height: scaleSize(150),
  },
  emptyText: {
    fontFamily: FONT_BOLD,
    fontSize: scaleSize(15),
  },
});
