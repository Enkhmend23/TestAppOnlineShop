import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Colors from '../../constants/colors';
import {scaleSize, FONT_BOLD, FONT_REGULAR} from '../../constants/mixins';
import Header from '../../components/Header';
import SeartBar from '../../components/SearchBar';
import ProductCard from '../../components/ProductCard';
import Images from '../../constants/images';

const {photo2, photo3, photo4, photo5, women} = Images;
const CATEGORY = [
  {
    id: 1,
    title: 'Бүгд',
  },
  {
    id: 2,
    title: 'Гутал',
  },
  {
    id: 3,
    title: 'Цамц',
  },
  {
    id: 4,
    title: 'Өмд',
  },
  {
    id: 5,
    title: 'Гэр ахуйн бараа',
  },
  {
    id: 6,
    title: 'Малгай',
  },
  {
    id: 7,
    title: 'Цахилгаан бараа',
  },
];
const PRODUCT = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: photo2,
    price: '210',
    categoryId: 3,
    categoryName: 'Цамц',
    count: 1,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    description:
      'Vivamus vitae sollicitudin lacus. Sed eget porta lorem. Suspendisse potenti. Integer lacinia quam at elementum euismod.',
    image: photo5,
    price: '220',
    categoryId: 6,
    categoryName: 'Малгай',
    count: 1,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    description:
      'enean porttitor vestibulum aliquet. Nunc facilisis ex id cursus bibendum. Vivamus convallis massa eu ex pulvinar ultricies. Nam convallis ex in mollis pulvinar. ',
    image: photo4,
    price: '230',
    categoryId: 3,
    categoryName: 'Цамц',
    count: 1,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Fourd Item',
    description:
      'Duis sed suscipit odio. Aliquam ut ante vel eros aliquet placerat. Cras suscipit eros ut tortor sagittis, sit amet convallis mauris pharetra. Ut commodo consequat rutrum. Sed bibendum molestie nulla ut placerat.',
    image: photo3,
    price: '310',
    categoryId: 4,
    categoryName: 'Өмд',
    count: 1,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Third Item',
    description:
      'Sed lobortis consectetur eros, sed faucibus massa gravida at. Mauris consequat felis sed tellus mollis tempor. Sed odio dui, faucibus non tempor id, convallis nec purus.',
    image: photo4,
    price: '420',
    categoryId: 2,
    categoryName: 'Гутал',
    count: 1,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Fourd Item',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque id est euismod, placerat dui a, sagittis risus. Donec imperdiet erat sed neque viverra hendrerit. Curabitur felis tortor, efficitur sit amet malesuada id, aliquet sollicitudin turpis.',
    image: photo3,
    price: '590',
    categoryId: 5,
    categoryName: 'Гэр ахуйн бараа',
    count: 1,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7',
    title: 'Third Item',
    description:
      'Aliquam commodo faucibus risus, ut varius nisi commodo quis. Aliquam consectetur tempor molestie. Proin iaculis vel est vitae malesuada. ',
    image: photo4,
    price: '670',
    categoryId: 7,
    categoryName: 'Цахилгаан бараа',
    count: 1,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Fourd Item',
    description:
      'Aliquam ultricies euismod lacus non euismod. Phasellus nec elit tempor, convallis enim at, mattis enim. Mauris ante magna, egestas quis suscipit eu, accumsan bibendum nisl.',
    image: photo3,
    price: '999',
    categoryId: 2,
    categoryName: 'Гутал',
    count: 1,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d77',
    title: 'New Item',
    description:
      'Aliquam ultricies euismod lacus non euismod. Phasellus nec elit tempor, convallis enim at, mattis enim. Mauris ante magna, egestas quis suscipit eu, accumsan bibendum nisl.',
    image: photo2,
    price: '699',
    categoryId: 6,
    categoryName: 'Малгай',
    count: 1,
  },
];

const Home = props => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(CATEGORY[0].id);
  const [selectedProducts, setSelectedProducts] = useState(PRODUCT);

  const onPressCategory = value => {
    if (value.id === 1) {
      setSelectedProducts(PRODUCT);
    } else {
      var newArray = [];
      PRODUCT.map(item => {
        item.categoryId === value.id && newArray.push(item);
      });
      setSelectedProducts(newArray);
    }
    setSelectedCategory(value.id);
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <SeartBar
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[Colors.second, Colors.primary]}
          style={styles.bigCard}>
          <View
            style={[
              styles.bigCardHalf,
              {alignItems: 'center', justifyContent: 'flex-end'},
            ]}>
            <Image style={styles.womenImage} source={women} />
          </View>
          <View style={styles.bigCardHalf}>
            <Text
              style={{
                color: Colors.white,
                fontFamily: FONT_BOLD,
              }}>
              Big Sale
            </Text>
            <Text
              style={{
                color: Colors.white,
                fontWeight: '100',
                fontFamily: FONT_REGULAR,
                fontSize: scaleSize(10),
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </View>
        </LinearGradient>
        <View
          style={{
            height: scaleSize(20),
            alignItems: 'center',
            marginBottom: scaleSize(5),
          }}>
          <ScrollView horizontal={true} style={{width: '100%'}}>
            {CATEGORY.map(item => {
              return selectedCategory === item.id ? (
                <TouchableOpacity key={item.id}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={[Colors.second, Colors.primary]}
                    style={styles.categoryActive}>
                    <Text style={styles.categoryTextActive}>{item.title}</Text>
                  </LinearGradient>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  key={item.id}
                  style={styles.category}
                  onPress={() => onPressCategory(item)}>
                  <Text style={styles.categoryText}>{item.title}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        <FlatList
          style={{
            flex: 1,
          }}
          numColumns={2} // set number of columns
          onEndReachedThreshold="0"
          columnWrapperStyle={{
            justifyContent: 'space-between',
            margin: scaleSize(10),
            marginHorizontal: -scaleSize(5),
          }} // space them out evenly
          data={selectedProducts}
          keyExtractor={(item, index) => item.id}
          renderItem={item => (
            <ProductCard
              item={item.item}
              index={item.index}
              onPress={() => {
                props.navigation.navigate('ProductDetail', {
                  item: item.item,
                });
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  body: {
    paddingHorizontal: scaleSize(20),
    flex: 1,
  },
  bigCard: {
    backgroundColor: '#333',
    height: scaleSize(90),
    width: '100%',
    marginVertical: scaleSize(20),
    borderRadius: scaleSize(30),
    flexDirection: 'row',
    elevation: 10,
  },
  bigCardHalf: {
    flex: 1,
    justifyContent: 'center',
    paddingEnd: scaleSize(20),
  },
  category: {
    backgroundColor: Colors.gray,
    marginHorizontal: scaleSize(5),
    paddingHorizontal: scaleSize(10),
    borderRadius: scaleSize(10),
  },
  categoryActive: {
    backgroundColor: Colors.primary,
    marginHorizontal: scaleSize(5),
    paddingHorizontal: scaleSize(10),
    borderRadius: scaleSize(10),
    height: scaleSize(20),
  },
  categoryText: {
    color: Colors.darkGray,
    fontSize: scaleSize(10),
    fontFamily: FONT_REGULAR,
  },
  categoryTextActive: {
    color: Colors.white,
    fontSize: scaleSize(10),
    fontFamily: FONT_REGULAR,
  },
  womenImage: {
    height: scaleSize(100),
    width: scaleSize(70),
  },
});
