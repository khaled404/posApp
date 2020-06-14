import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import IconButton from '../components/buttons/IconButton';
import CartItems from './CartItems';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {fonts, Colors} from '../constants/Config';
import {useSelector, useDispatch} from 'react-redux';
import reactotron from 'reactotron-react-native';
import {emptyCart} from '../store/actions/cart';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const totalPrice = useSelector((state) => state.cartReducer.showTotalPrice);
  const a = useSelector((state) => state.cartReducer);
  reactotron.log(a, 'state');

  return (
    <View style={styles.rightContent}>
      <View style={styles.topBar}>
        <IconButton icon="utensils" title="بالمطعم" onPress={() => {}} />
        <IconButton icon="shopping-bag" title="بالخارج" onPress={() => {}} />
      </View>
      <View style={styles.dataLine}>
        <Text style={styles.text}>الصنف</Text>
        <View style={styles.infoTexts}>
          <Text style={styles.text}>الكميه</Text>
          <Text style={styles.text}>السعر</Text>
        </View>
      </View>
      <View style={{height: '50%'}}>
        {cartItems.length > 0 ? (
          <FlatList
            data={cartItems}
            renderItem={({item}) => (
              <CartItems
                id={item.id}
                title={item.title}
                counter={item.counter}
                price={item.price}
                notes={item.notes}
                details={item.details}
              />
            )}
          />
        ) : (
          <View style={styles.iconContainer}>
            <Icon
              name="shopping-cart"
              size={200}
              color={Colors.gray2}
              style={{paddingTop: 12}}
            />
          </View>
        )}
      </View>
      <View
        style={[styles.dataLine, {marginTop: 'auto', paddingHorizontal: 12}]}>
        <Text style={styles.text}> اجمالي الاصناف</Text>
        <Text style={styles.text}>AED {totalPrice}</Text>
      </View>
      <View style={[styles.dataLine, {paddingHorizontal: 12}]}>
        <Text style={styles.text}>ضريبه القيمه المضافه</Text>
        <Text style={styles.text}>AED 0.5%</Text>
      </View>
      <View style={styles.footer}>
        <View style={[styles.flex, {paddingVertical: 6, marginBottom: 13}]}>
          <Text style={styles.total}>الاجمالي</Text>
          <Text style={styles.taxText}>AED {totalPrice}</Text>
        </View>
        <View style={styles.flex}>
          <IconButton
            icon="cash-register"
            title={`AED ${totalPrice}`}
            onPress={() => {}}
            style={styles.toBill}
          />
          <IconButton
            icon="pause"
            onPress={() => {}}
            style={{
              width: '23%',
              backgroundColor: Colors.colorYellow,
            }}
          />
          <IconButton
            icon="trash-alt"
            onPress={() => {
              dispatch(emptyCart());
            }}
            style={{
              width: '23%',
              backgroundColor: Colors.colorRed,
            }}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  rightContent: {
    alignSelf: 'flex-start',
    marginLeft: 'auto',
    width: '30%',
    height: '100%',
    elevation: 10,
    backgroundColor: '#fff',
    paddingTop: 12,
  },
  topBar: {
    paddingHorizontal: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  text: {
    fontFamily: fonts.roman,
    color: '#333',
    fontSize: 12,
  },
  dataLine: {
    backgroundColor: Colors.gray,
    width: '100%',
    paddingHorizontal: 7,
    paddingVertical: 6,
    height: 37,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoTexts: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-around',
  },
  iconContainer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 50,
  },
  footer: {
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    paddingBottom: 12,
  },
  total: {
    fontFamily: fonts.bold,
    fontSize: 12,
    color: '#333',
  },
  taxText: {
    color: Colors.primaryColor,
    fontFamily: fonts.bold,
    fontSize: 12,
  },
  toBill: {
    width: '50%',
    backgroundColor: Colors.primaryColor,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
});

export default Cart;
