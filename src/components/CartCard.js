import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {FONT_BOLD, FONT_REGULAR, scaleSize} from '../constants/mixins';
import * as Colors from '../constants/colors';
import Button from '../components/CustomButton';
import {price} from '../constants/utils';
import ProductContext from '../context/ProductContext';

const CartCard = props => {
  const [count, setCount] = useState(props?.item?.count);
  const productCtx = useContext(ProductContext);
  return (
    <View style={styles.container} key={props?.item?.id}>
      <Image style={styles.image} source={props?.item?.image} />
      <View style={styles.left}>
        <View>
          <Text style={styles.title}>{props?.item?.title}</Text>
          <Text style={styles.category}>{props?.item?.categoryName}</Text>
        </View>
        <Text style={styles.price}>
          {price(parseFloat(props?.item?.price))}
        </Text>
      </View>
      <View style={styles.right}>
        <Button
          icon="md-trash"
          style={styles.removeBtn}
          iconSize={scaleSize(12)}
          onPress={() => {
            productCtx.removeCart(props?.item?.id);
          }}
        />
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              setCount(count + 1);
              productCtx.setCount(props?.item?.id, '1');
            }}>
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>
          <Text style={styles.text}>{count}</Text>
          <TouchableOpacity
            onPress={() => {
              if (count !== 1) {
                setCount(count - 1);
                productCtx.setCount(props?.item?.id, '-1');
              }
            }}>
            <Text style={styles.text}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: scaleSize(10),
    padding: scaleSize(5),
    elevation: 5,
    flexDirection: 'row',
    marginHorizontal: scaleSize(20),
    marginVertical: scaleSize(5),
  },
  image: {
    height: scaleSize(80),
    width: scaleSize(70),
    borderRadius: scaleSize(7),
  },
  left: {
    flex: 1,
    padding: scaleSize(10),
    justifyContent: 'space-between',
    // backgroundColor: '#333',
  },
  right: {
    width: scaleSize(70),
    justifyContent: 'space-between',
    // backgroundColor: '#444',
    alignItems: 'flex-end',
    padding: scaleSize(10),
  },
  title: {
    fontFamily: FONT_BOLD,
    fontSize: scaleSize(10),
    color: Colors.black,
  },
  category: {
    fontFamily: FONT_REGULAR,
    fontSize: scaleSize(8),
    color: Colors.darkGray,
  },
  price: {
    fontFamily: FONT_BOLD,
    color: Colors.black,
    fontSize: scaleSize(15),
  },
  removeBtn: {
    height: scaleSize(20),
    width: scaleSize(20),
    borderRadius: scaleSize(4),
    elevation: 2,
  },
  text: {
    fontSize: scaleSize(16),
    marginHorizontal: scaleSize(5),
    fontFamily: FONT_BOLD,
  },
});
