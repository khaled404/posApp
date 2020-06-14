import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Colors, fonts} from '../constants/Config';

const KitchenModel = ({
  id,
  backColor,
  customerName,
  type,
  orderState,
  onPress,
}) => {
  const [colorAction, setcolor] = useState(null);
  useEffect(() => {
    if (orderState.action === 'done') {
      setcolor(Colors.gray2);
    } else if (orderState.action == 'ready') {
      setcolor(Colors.colorYellow);
    } else if (orderState.action == 'delivery') {
      setcolor(Colors.primaryColor);
    } else {
      setcolor(Colors.colorRed);
    }
  }, [orderState]);
  return (
    <View
      style={[
        {backgroundColor: backColor ? Colors.gray : '#fff'},
        styles.container,
      ]}>
      <Text style={styles.infoText}>{id}</Text>
      <Text style={styles.infoText}>{customerName}</Text>
      <Text style={styles.infoText}>{type}</Text>
      <Text style={styles.infoText}>{orderState.title}</Text>
      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: colorAction,
          },
        ]}
        onPress={onPress}>
        <Text style={styles.buttonText}> {orderState.buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  infoText: {
    fontFamily: fonts.roman,
    fontSize: 15,
    color: '#000',
    width: '16%',
    paddingHorizontal: 10,
    textAlign: 'left',
    color: Colors.dark,
  },
  buttonStyle: {
    width: '16%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    paddingBottom: 6,
  },
  buttonText: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: '#fff',
  },
});
export default KitchenModel;
