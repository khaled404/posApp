import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import LottieView from 'lottie-react-native';
import {fonts, Colors} from '../../constants/Config';
const RadioButton = ({title, price, onSelect, onRemove}) => {
  const action = useRef(null);
  const [active, setActive] = useState(false);
  const actionHandler = () => {
    if (!active) {
      action.current.play(1, 33);
      setActive(true);
      onSelect();
    } else {
      action.current.play(0, 0);
      setActive(false);
      onRemove();
    }
  };
  return (
    <TouchableWithoutFeedback onPress={actionHandler}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>AED {price}</Text>
        <View style={styles.chekContaner}>
          <View style={styles.chekBorder}></View>
          <LottieView
            source={require('../../assets/Animation/Switch.json')}
            ref={action}
            loop={false}
            style={{width: 47, height: 44}}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '33.333333333333336%',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.roman,
    marginBottom: 5,
    color: Colors.dark,
  },
  price: {
    fontSize: 14,
    fontFamily: fonts.roman,
    color: Colors.colorRed,
  },
  chekContaner: {
    width: 45,
    height: 45,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chekBorder: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.gray2,
  },
});
