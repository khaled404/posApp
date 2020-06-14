import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {fonts, Colors} from '../constants/Config';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import Back from '../components/buttons/Back';

const Settings = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Back />
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('User')}>
          <Icon name="user" solid size={50} color={Colors.primaryColor} />
          <Text style={styles.title}>الحساب الشخصي</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Icon name="language" size={50} color={Colors.primaryColor} />
          <Text style={styles.title}>اللغه</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Icon name="redo-alt" solid size={50} color={Colors.primaryColor} />
          <Text style={styles.title}>تحديث</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Icon
            name="sign-out-alt"
            solid
            size={50}
            color={Colors.primaryColor}
          />
          <Text style={styles.title}>تسجيل الخروج</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 230,
    height: 135,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 30,
    elevation: 2,
    borderRadius: 5,
  },
  title: {
    marginTop: 10,
    fontFamily: fonts.bold,
    fontSize: 14,
    color: Colors.primaryColor,
  },
});
export default Settings;
