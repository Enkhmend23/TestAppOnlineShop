import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ContentLoader, {BulletList, List} from 'react-content-loader/native';
import {scaleSize} from '../constants/mixins';

const LoaderComponent = () => {
  return (
    <View>
      {/* <BulletList /> */}
      <List style={styles.component} />
      <List style={styles.component} />
      <List style={styles.component} />
      <List style={styles.component} />
    </View>
  );
};

export default LoaderComponent;

const styles = StyleSheet.create({
  component: {
    marginVertical: scaleSize(20),
    marginLeft: scaleSize(10),
  },
});
