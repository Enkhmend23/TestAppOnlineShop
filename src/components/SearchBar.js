import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {scaleSize} from '../constants/mixins';
import * as Colors from '../constants/colors';
import Button from '../components/CustomButton';

const SearchBar = props => {
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <Ionicons
          name={'ios-search'}
          size={scaleSize(15)}
          color={Colors.gray}
        />
        <TextInput
          style={{flex: 1}}
          value={props.value}
          onChangeText={props.onChangeText}
        />
      </View>
      <Button
        icon="md-filter"
        style={styles.filterBtn}
        onPress={() => {
          console.log('Filter');
        }}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: scaleSize(35),
  },
  textInputContainer: {
    elevation: 10,
    flex: 1,
    // height: scaleSize(35),
    borderRadius: scaleSize(15),
    backgroundColor: Colors.white,
    marginEnd: scaleSize(10),
    paddingHorizontal: scaleSize(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterBtn: {
    backgroundColor: Colors.white,
    height: scaleSize(35),
    width: scaleSize(35),
    borderRadius: scaleSize(10),
    elevation: 10,
  },
});
