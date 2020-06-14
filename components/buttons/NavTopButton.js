import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {fonts, Colors} from '../../constants/Config';

const NavTopButton = ({onPress, title}) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={onPress}
      activeOpacity={0.7}>
      <Text style={styles.title}> {title} </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    width: 100,
    height: 40,
    marginHorizontal: 7,
    backgroundColor: Colors.colorDark,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 3,
  },
  title: {
    color: '#fff',
    fontSize: 14,
    fontFamily: fonts.roman,
  },
});
export default NavTopButton;
