import React, {useEffect, useContext, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Header from '../../components/Header';
import * as Colors from '../../constants/colors';
import {FONT_BOLD, scaleSize} from '../../constants/mixins';
import CartCard from '../../components/CartCard';
import Button from '../../components/CustomButton';
import ProductContext from '../../context/ProductContext';
import {price} from '../../constants/utils';
import Empty from '../../components/Empty';

const Cart = () => {
  const productCtx = useContext(ProductContext);
  const [totalAmount, setTotalAmount] = useState(0);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    var total = 0;
    productCtx.state.productsCart.length === 0
      ? setEmpty(true)
      : setEmpty(false);
    productCtx.state?.productsCart.map(item => {
      total = total + parseFloat(item?.price) * item?.count;
    });
    setTotalAmount(total);
  }, [productCtx.state.productsCart]);
  return (
    <View style={styles.container}>
      <Header title="Сагс" />
      <View style={styles.body}>
        {empty ? (
          <Empty />
        ) : (
          <ScrollView>
            {productCtx.state.productsCart.map(item => {
              return <CartCard item={item} key={item.id} />;
            })}
          </ScrollView>
        )}
        <View style={styles.bottom}>
          <View style={{flex: 1}}>
            <Text style={styles.totalText}>Нийт</Text>
            <Text style={styles.totalAmount}>{price(totalAmount)}</Text>
          </View>
          <View style={{flex: 1}}>
            <Button title="Худалдан авах" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  body: {
    flex: 1,
    // backgroundColor: Colors.gray,
  },
  bottom: {
    height: scaleSize(100),
    // backgroundColor: Colors.gray,
    marginBottom: scaleSize(30),
    padding: scaleSize(10),
    flexDirection: 'row',
    paddingHorizontal: scaleSize(30),
  },
  totalText: {
    fontFamily: FONT_BOLD,
    color: Colors.darkGray,
  },
  totalAmount: {
    fontFamily: FONT_BOLD,
    color: Colors.black,
    fontSize: scaleSize(20),
  },
});
