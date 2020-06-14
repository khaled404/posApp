import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {fonts, Colors} from '../constants/Config';
import Back from '../components/buttons/Back';

const Bills = (prpos) => {
  const [billNum, setbillNum] = useState(0);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View
        style={{
          backgroundColor: Colors.gray,
          flex: 1,
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Back />

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: '14%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={styles.box}>
              <Text style={styles.counter}>6 am</Text>
              <Text style={styles.title}>بدايه الشيفت</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.counter}>500</Text>
              <Text style={styles.title}>عدد الفواتير</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.counter}>730</Text>
              <Text style={styles.title}>اجمالي</Text>
            </View>
          </View>
          <View style={{marginTop: '10%'}}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              returnKeyType="search"
              placeholder="البحث عن فتوره"
              placeholderTextColor={Colors.gray2}
              onChangeText={(e) => setbillNum(e)}
              onSubmitEditing={() =>
                billNum > 0 &&
                prpos.navigation.navigate('Bill', {billNum: billNum})
              }
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 200,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    elevation: 2,
    marginHorizontal: 10,
    borderRadius: 5,
    padding: 10,
  },
  counter: {
    color: Colors.colorDark,
    fontFamily: fonts.bold,
    fontSize: 18,
  },
  title: {
    color: Colors.primaryColor,
    fontFamily: fonts.bold,
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    width: 400,
    height: 50,
    paddingHorizontal: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 2,
    fontFamily: fonts.bold,
    fontSize: 15,
    color: Colors.colorDark,
  },
});

export default Bills;
