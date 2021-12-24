import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import * as Colors from '../constants/colors';
import {FONT_BOLD, FONT_REGULAR, scaleSize} from '../constants/mixins';
import Button from '../components/CustomButton';
import ProductContext from '../context/ProductContext';
import Toast from '../components/CustomToast';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProductDetail = props => {
  const item = props?.route?.params?.item;
  const productCtx = useContext(ProductContext);

  const addCartHandler = () => {
    var oldArray = productCtx?.state?.productsCart;
    var have = false;
    oldArray.map(val => {
      if (val.id === item.id) {
        have = true;
      }
    });
    if (have) {
      Toast.onPressToast('Анхаар', 'Аль хэдийн нэмэгдсэн байна', '', 'error');
    } else {
      productCtx.addCart(item);
      Toast.onPressToast('Баярлалаа', 'Амжилттай нэмэгдлээ');
    }
    // productCtx.clearCart();
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageContainer}
        imageStyle={styles.image}
        source={item.image}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => props.navigation.pop()}>
          <Ionicons
            name={'chevron-back'}
            size={scaleSize(25)}
            color={Colors.primary}
          />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.body}>
        <ScrollView style={{marginBottom: scaleSize(10)}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: scaleSize(20),
            }}>
            <Text style={styles.titleText}>{item?.title}</Text>
            <Text style={styles.titleText}>${item?.price}</Text>
          </View>
          <Text style={styles.categoryName}>{item?.categoryName}</Text>
          <Text style={styles.description}>{item?.description}</Text>
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Button
            title="Худалдан авах"
            outerStyle={{
              marginRight: scaleSize(10),
              flex: 1,
            }}
          />
          <Button
            icon="md-cart"
            style={styles.cartBtn}
            type="second"
            onPress={addCartHandler}
          />
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.white},
  image: {
    borderBottomLeftRadius: scaleSize(40),
    borderBottomRightRadius: scaleSize(40),
  },
  imageContainer: {
    height: scaleSize(400),
    borderBottomLeftRadius: scaleSize(40),
    borderBottomRightRadius: scaleSize(40),
    elevation: 10,
    padding: scaleSize(20),
  },
  body: {
    flex: 1,
    padding: scaleSize(20),
    justifyContent: 'space-between',
  },
  cartBtn: {
    height: scaleSize(50),
    width: scaleSize(50),
    borderRadius: scaleSize(25),
    elevation: 1,
  },
  titleText: {
    fontSize: scaleSize(18),
    fontFamily: FONT_BOLD,
  },
  categoryName: {
    fontFamily: FONT_REGULAR,
    marginLeft: scaleSize(30),
    fontSize: scaleSize(10),
  },
  description: {
    fontFamily: FONT_REGULAR,
    margin: scaleSize(10),
    fontSize: scaleSize(12),
  },
  backBtn: {
    height: scaleSize(30),
    width: scaleSize(30),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: scaleSize(20),
  },
});
