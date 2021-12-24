import React, {useContext} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {FONT_BOLD, FONT_REGULAR, scaleSize} from '../constants/mixins';
import * as Colors from '../constants/colors';
import Button from '../components/CustomButton';
import ProductContext from '../context/ProductContext';
import Toast from '../components/CustomToast';

const ProductCard = props => {
  const productCtx = useContext(ProductContext);
  const addCartHandler = () => {
    var oldArray = productCtx?.state?.productsCart;
    var have = false;
    oldArray.map(val => {
      if (val.id === props?.item?.id) {
        have = true;
      }
    });
    if (have) {
      Toast.onPressToast('Анхаар', 'Аль хэдийн нэмэгдсэн байна', '', 'error');
    } else {
      productCtx.addCart(props?.item);
      Toast.onPressToast('Баярлалаа', 'Амжилттай нэмэгдлээ');
    }
    // productCtx.clearCart();
  };
  return (
    <View
      style={[
        styles.container,
        (props?.index === 0) | (props?.index === 1) && {marginTop: 0},
      ]}>
      <TouchableOpacity style={styles.image} onPress={props?.onPress}>
        <Image style={styles.image} source={props?.item?.image} />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
        }}>
        <View style={{alignItems: 'center', flex: 1}}>
          <Text style={styles.title}>{props?.item?.title}</Text>
          <Text style={styles.category}>{props?.item?.categoryName}</Text>
        </View>
        <Button
          icon="md-cart-outline"
          style={styles.cartBtn}
          iconSize={scaleSize(8)}
          onPress={addCartHandler}
        />
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    borderRadius: scaleSize(20),
    marginHorizontal: scaleSize(5),
    alignItems: 'center',
    marginBottom: scaleSize(30),
    marginTop: -scaleSize(30),
  },
  image: {
    borderRadius: scaleSize(20),
    height: scaleSize(200),
    width: '100%',
  },
  title: {
    fontFamily: FONT_BOLD,
    color: Colors.black,
    fontSize: scaleSize(10),
  },
  category: {
    fontFamily: FONT_REGULAR,
    fontSize: scaleSize(8),
    marginTop: -scaleSize(3),
  },
  cartBtn: {
    height: scaleSize(15),
    width: scaleSize(15),
    borderRadius: scaleSize(8),
    elevation: 2,
  },
});
