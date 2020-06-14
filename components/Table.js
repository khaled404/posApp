import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors, fonts} from '../constants/Config';

const Table = ({numbers, done, underway, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.tableNumber}>{numbers}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    borderColor: Colors.gray,
    borderWidth: 1,
    width: '14.666666666666666%',
    height: 100,
    marginHorizontal: 7,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.gray,
  },
  tableNumber: {
    fontSize: 60,
    color: Colors.gray2,
    fontFamily: fonts.bold,
  },
});
export default Table;
