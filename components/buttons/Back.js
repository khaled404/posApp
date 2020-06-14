import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {withNavigation} from '@react-navigation/compat';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import {fonts, Colors} from '../../constants/Config';

const Back = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.gray} />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.content}>
          <Icon
            name="chevron-left"
            solid
            size={30}
            color={Colors.primaryColor}
          />
          <Text style={styles.title}>رجوع</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 5,
  },
  content: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.bold,
    color: Colors.primaryColor,
    fontSize: 14,
    marginRight: 7,
    marginBottom: 9,
  },
});
export default withNavigation(Back);
