import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {fonts, Colors} from '../../constants/Config';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const CategoryButton = ({active, onPress, icon, title}) => {
  return (
    <TouchableOpacity
      style={
        active
          ? [styles.buttonContainer, {borderColor: Colors.primaryColor}]
          : styles.buttonContainer
      }
      onPress={onPress}
      activeOpacity={0.7}>
      <Icon
        name={icon}
        size={20}
        color={active ? Colors.primaryColor : Colors.gray2}
      />
      <Text
        style={
          active ? [styles.title, {color: Colors.primaryColor}] : styles.title
        }>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    width: 120,
    height: 55,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Colors.gray2,
    marginTop: 5,
  },
  title: {
    color: Colors.gray2,
    fontSize: 13,
    fontFamily: fonts.roman,
  },
});

export default CategoryButton;
