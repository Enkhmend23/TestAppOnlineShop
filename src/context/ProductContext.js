import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductContext = React.createContext();

const initialState = {
  productsCart: [],
};
// Local storage-д хадгалах
const _storeDataAddCart = async value => {
  try {
    await AsyncStorage.setItem('cart', JSON.stringify(value));
  } catch (error) {
    // Error saving data
  }
};
const _storeDataClearCart = async () => {
  try {
    await AsyncStorage.removeItem('cart');
  } catch (error) {
    // Error saving data
  }
};

export const ProductStore = props => {
  const [state, setState] = useState(initialState);

  const clearCart = () => {
    _storeDataClearCart();
    setState(initialState);
  };
  const addCart = product => {
    var newCart = state.productsCart.slice();
    newCart.push(product);
    setState({productsCart: newCart});
    _storeDataAddCart(newCart);
  };
  const removeCart = id => {
    let newCart = state.productsCart.filter(item => item.id !== id);
    setState({...state, productsCart: newCart});
    _storeDataAddCart(newCart);
  };
  const setCount = (id, num) => {
    state.productsCart.map((item, index) => {
      if (item.id === id) {
        var newArray = [...state.productsCart];
        newArray[index].count = item.count + parseInt(num);
        setState({productsCart: newArray});
      }
    });
  };

  return (
    <ProductContext.Provider
      value={{state, clearCart, addCart, removeCart, setCount}}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
