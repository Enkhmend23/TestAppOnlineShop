import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {scaleSize, FONT_BOLD, FONT_REGULAR} from '../constants/mixins';
import Images from '../constants/images';
import * as Colors from '../constants/colors';

const {photo1, menu} = Images;

const Header = props => {
  const [firstName, setFirstName] = useState('Энхмэнд');
  const [lastName, setLastName] = useState('Баярцогт');
  const [status, setStatus] = useState('Програм хөгжүүлэгч');
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuContainer}>
        <Image style={styles.menu} source={menu} />
      </TouchableOpacity>
      {props.title ? (
        <Text style={styles.textTitle}>{props.title}</Text>
      ) : (
        <View style={styles.middle}>
          <Text style={styles.text1}>{status}</Text>
          <Text style={styles.text2}>
            {lastName}{' '}
            <Text style={{textTransform: 'uppercase'}}>{firstName}</Text>
          </Text>
        </View>
      )}
      <Image style={styles.image} source={photo1} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: scaleSize(60),
    flexDirection: 'row',
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    paddingHorizontal: scaleSize(20),
    alignItems: 'center',
  },
  image: {
    width: scaleSize(25),
    height: scaleSize(25),
    borderRadius: scaleSize(13),
  },
  menu: {
    width: scaleSize(10),
    height: scaleSize(10),
    backgroundColor: Colors.white,
  },
  menuContainer: {
    width: scaleSize(30),
    height: scaleSize(30),
    borderRadius: scaleSize(15),
    elevation: 10,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    fontSize: scaleSize(8),
    fontFamily: FONT_REGULAR,
  },
  text2: {
    fontSize: scaleSize(10),
    fontFamily: FONT_BOLD,
  },
  textTitle: {
    // fontWeight: 'bold',
    fontFamily: FONT_BOLD,
    fontSize: scaleSize(15),
  },
});
