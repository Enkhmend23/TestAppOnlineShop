import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {scaleSize, FONT_BOLD} from '../constants/mixins';
import * as Colors from '../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomButton = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={props.style ? props.style : [{flex: 1}, props.outerStyle]}>
      {props.icon ? (
        props.type === 'second' ? (
          <View style={[styles.secondBtn, props.style]}>
            <Ionicons
              name={props.icon}
              size={props.iconSize ? props.iconSize : scaleSize(20)}
              color={Colors.primary}
            />
          </View>
        ) : (
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={[Colors.second, Colors.primary, Colors.second]}
            style={[styles.linearGradient, props.style]}>
            <Ionicons
              name={props.icon}
              size={props.iconSize ? props.iconSize : scaleSize(20)}
              color={Colors.white}
            />
          </LinearGradient>
        )
      ) : (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[Colors.second, Colors.primary, Colors.second]}
          style={styles.linearGradient}>
          <Text style={styles.buttonText}>{props.title}</Text>
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  linearGradient: {
    height: scaleSize(50),
    width: '100%',
    borderRadius: scaleSize(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: scaleSize(12),
    fontFamily: FONT_BOLD,
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  secondBtn: {
    backgroundColor: Colors.gray,
    height: scaleSize(50),
    width: '100%',
    borderRadius: scaleSize(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
