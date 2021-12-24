import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/BottomTabScreens/Home';
import TimeScreen from '../screens/BottomTabScreens/Time';
import CartScreen from '../screens/BottomTabScreens/Cart';
import ProfileScreen from '../screens/BottomTabScreens/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Colors from '../constants/colors';
import {scaleSize} from '../constants/mixins';
import ProductContext from '../context/ProductContext';

const Tab = createBottomTabNavigator();

export default function App() {
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
});
