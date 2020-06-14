import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Colors, fonts} from '../constants/Config';
import reactotron from 'reactotron-react-native';
import {useDispatch} from 'react-redux';
import {counterPlus, counterMinus} from '../store/actions/cart';

const CartItems = ({id, title, price, counter, notes, details}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.topInformations}>
        <Text style={styles.productTitle}>{title}</Text>
        <View style={styles.controller}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => dispatch(counterPlus(id))}>
            <Icon name="plus-square" size={20} color={Colors.gray2} />
          </TouchableOpacity>
          <Text style={styles.counter}>{counter}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => dispatch(counterMinus(id))}>
            <Icon name="minus-square" size={20} color={Colors.gray2} />
          </TouchableOpacity>
        </View>
        <Text style={styles.price}> AED {price} </Text>
      </View>
      <View style={styles.descriptionConatiner}>
        {details.map((item, index) => (
          <View key={index.toString()} style={{flexDirection: 'row'}}>
            <Text style={[styles.descriptionText, {textAlign: 'left'}]}>
              {item.label}
            </Text>
            <Text style={styles.descriptionText}>{item.title}</Text>
            <Text style={styles.descriptionText}>AED {item.price}</Text>
          </View>
        ))}
        {notes != null && (
          <Text
            style={[
              styles.descriptionText,
              {textAlign: 'left', width: '100%'},
            ]}>
            {notes}
          </Text>
        )}
      </View>
    </View>
  );
};

export default CartItems;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: Colors.gray,
    borderBottomWidth: 1,
    // minHeight: 70,
    padding: 10,
  },
  topInformations: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productTitle: {
    width: '33.333333333333336%',
    textAlign: 'left',
    color: Colors.dark,
    fontFamily: fonts.roman,
    fontSize: 14,
    marginBottom: 6,
  },
  controller: {
    width: '33.333333333333336%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  counter: {
    width: '30%',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: fonts.roman,
    marginTop: -2,
  },
  price: {
    width: '33.333333333333336%',
    textAlign: 'center',
    fontFamily: fonts.roman,
    color: Colors.dark,
    fontSize: 14,
  },
  descriptionConatiner: {
    paddingVertical: 5,
  },
  descriptionText: {
    textAlign: 'left',
    fontFamily: fonts.light,
    color: Colors.dark,
    fontSize: 13,
    width: '33.333333333333336%',
    textAlign: 'center',
  },
});
