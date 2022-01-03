import React, {useContext} from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/BottomTabScreens/Home';
import TimeScreen from '../screens/BottomTabScreens/Time';
import CartScreen from '../screens/BottomTabScreens/Cart';
import ProfileScreen from '../screens/BottomTabScreens/Profile';
import PostScreen from '../screens/BottomTabScreens/Post';

import * as Colors from '../constants/colors';
import {scaleSize} from '../constants/mixins';
import ProductContext from '../context/ProductContext';
import Images from '../constants/images';

const Tab = createBottomTabNavigator();
const {plus} = Images;

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -scaleSize(20),
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    onPress={onPress}>
    <View
      style={{
        width: scaleSize(50),
        height: scaleSize(50),
        borderRadius: scaleSize(25),
        backgroundColor: Colors.primary,
        borderColor: Colors.white,
        borderWidth: scaleSize(2),
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

export default function BottomTabNavigation() {
  const productCtx = useContext(ProductContext);
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Time') {
              iconName = focused ? 'time' : 'time-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'md-cart' : 'md-cart-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'md-person' : 'md-person-outline';
            } else if (route.name === 'Post') {
              iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.darkGray,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            marginHorizontal: scaleSize(20),
            marginTop: -scaleSize(30),
            borderRadius: scaleSize(30),
            height: scaleSize(60),
            paddingHorizontal: scaleSize(20),
            elevation: 0,
            backgroundColor: Colors.white,
            ...styles.shadow,
          },
          tabBarBadgeStyle: {
            backgroundColor: Colors.white,
            borderColor: Colors.gray,
            borderWidth: scaleSize(1),
            color: Colors.primary,
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Time" component={TimeScreen} />
        <Tab.Screen
          name="Post"
          component={PostScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={plus}
                resizeMode="contain"
                style={{
                  width: scaleSize(30),
                  height: scaleSize(30),
                  tintColor: Colors.white,
                }}
              />
            ),
            tabBarButton: props => <CustomTabBarButton {...props} />,
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{tabBarBadge: productCtx.state.productsCart.length}}
        />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 10,
  },
});
