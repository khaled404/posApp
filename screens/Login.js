import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  StatusBar,
} from 'react-native';
import {fonts, Colors} from '../constants/Config';
import FastImage from 'react-native-fast-image';

const Login = (prpos) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={Colors.gray} />
        <View style={styles.loginBox}>
          <View
            style={{
              width: 160,
              height: 130,
              marginVertical: 5,
            }}>
            <FastImage
              style={{width: '100%', height: '100%'}}
              source={require('../assets/images/casherLogo.png')}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <View style={styles.form}>
            <TextInput
              placeholder="الاسم"
              style={styles.input}
              placeholderTextColor={Colors.primaryColor}
              keyboardType="default"
            />
            <TextInput
              placeholder="الرقم السري"
              style={styles.input}
              placeholderTextColor={Colors.primaryColor}
              keyboardType="numeric"
              secureTextEntry
            />
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
              onPress={() => {
                prpos.navigation.replace('Home');
              }}>
              <Text style={styles.buttonText}>دخول</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: Colors.gray,
  },
  loginBox: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: 700,
    height: 400,
    backgroundColor: '#fff',
    elevation: 3,
    borderRadius: 5,
  },
  form: {
    marginBottom: 'auto',
  },
  input: {
    width: 350,
    borderWidth: 1.4,
    borderColor: Colors.primaryColor,
    padding: 10,
    borderRadius: 5,
    fontFamily: fonts.roman,
    fontSize: 16,
    elevation: 1,
    textAlign: 'right',
    marginBottom: 20,
  },
  button: {
    width: 350,
    backgroundColor: Colors.primaryColor,
    padding: 3,
    borderRadius: 5,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontFamily: fonts.bold,
    color: '#fff',
  },
});
export default Login;
