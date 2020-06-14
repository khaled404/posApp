import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {fonts, Colors} from '../constants/Config';
import FastImage from 'react-native-fast-image';

const CategoryModel = ({title, image, price, onPress}) => {
  return (
    <TouchableOpacity style={styles.constiner} onPress={onPress}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <FastImage
            style={{width: '100%', height: '100%'}}
            source={image}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>AED {price}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  constiner: {
    borderColor: Colors.gray,
    borderWidth: 1,
    width: '14.666666666666666%',
    height: 100,
    marginHorizontal: 7,
    marginVertical: 10,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  imageContainer: {
    paddingHorizontal: 6,
    width: 60,
    height: 40,
    alignItems: 'center',
    marginTop: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 13,
    color: '#333',
  },
  price: {
    fontFamily: fonts.bold,
    fontSize: 13,
    color: Colors.primaryColor,
    marginTop: -1.9,
  },
});

export default CategoryModel;
