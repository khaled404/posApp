import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Back from '../components/buttons/Back';
import {fonts, Colors} from '../constants/Config';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

const User = () => {
  const [editName, setEditName] = useState(false);
  const [editPhone, setEditPhone] = useState(false);
  const [editAddress, setEditAddress] = useState(false);
  const [valueName, setValueName] = useState(' خالد محمود محمد ');
  const [valuePhone, setValuePhone] = useState('01069926643');
  const [valueAddress, setValueAddress] = useState('المنصوره');
  const inputRef = useRef();
  const editHandel = (set, flag) => {
    set((e) => !e);
    if (!flag) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 500);
    }
  };
  return (
    <View style={styles.screen}>
      <Back />
      <ScrollView style={{flex: 1, width: '100%', paddingTop: 50}}>
        <View style={styles.container}>
          <View style={styles.userIcon}>
            <Icon name="user" solid size={50} color="#fff" />
          </View>
          <View style={styles.dataBox}>
            <View
              style={{flexDirection: 'row', alignItems: 'center', height: 30}}>
              <Text style={styles.dataTitle}>الاسم :</Text>
              {editName ? (
                <View style={styles.inputContainer}>
                  <TextInput
                    value={valueName}
                    style={styles.editInput}
                    onChangeText={(e) => setValueName(e)}
                    keyboardType="default"
                    ref={inputRef}
                    onSubmitEditing={() => editHandel(setEditName, editName)}
                  />
                </View>
              ) : (
                <Text style={styles.dataValue}>{valueName}</Text>
              )}
            </View>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
              onPress={() => editHandel(setEditName, editName)}>
              <Text style={styles.buttonText}>
                {editName ? 'حفظ' : 'تعديل'}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dataBox}>
            <View
              style={{flexDirection: 'row', alignItems: 'center', height: 30}}>
              <Text style={styles.dataTitle}>رقم التلفون :</Text>
              {editPhone ? (
                <View style={styles.inputContainer}>
                  <TextInput
                    value={valuePhone}
                    style={styles.editInput}
                    onChangeText={(e) => setValuePhone(e)}
                    keyboardType="numeric"
                    ref={inputRef}
                    onSubmitEditing={() => editHandel(setEditPhone, editPhone)}
                  />
                </View>
              ) : (
                <Text style={styles.dataValue}>{valuePhone}</Text>
              )}
            </View>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
              onPress={() => editHandel(setEditPhone, editPhone)}>
              <Text style={styles.buttonText}>
                {editPhone ? 'حفظ' : 'تعديل'}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dataBox}>
            <View
              style={{flexDirection: 'row', alignItems: 'center', height: 30}}>
              <Text style={styles.dataTitle}>العنوان :</Text>
              {editAddress ? (
                <View style={styles.inputContainer}>
                  <TextInput
                    value={valueAddress}
                    style={styles.editInput}
                    onChangeText={(e) => setValueAddress(e)}
                    keyboardType="default"
                    ref={inputRef}
                    onSubmitEditing={() =>
                      editHandel(setEditAddress, editAddress)
                    }
                  />
                </View>
              ) : (
                <Text style={styles.dataValue}>{valueAddress}</Text>
              )}
            </View>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
              onPress={() => editHandel(setEditAddress, editAddress)}>
              <Text style={styles.buttonText}>
                {editAddress ? 'حفظ' : 'تعديل'}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.passButton}>
            <Text style={styles.passText}>هل تريد تغير كلمه المرور؟</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingBottom: 60,
  },
  userIcon: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: Colors.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    marginBottom: 10,
  },
  dataBox: {
    padding: 10,
    marginTop: 20,
    width: 450,
    height: 50,
    backgroundColor: '#fff',
    elevation: 2,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  dataTitle: {
    fontFamily: fonts.bold,
    color: Colors.colorDark,
    fontSize: 14,
    marginRight: 10,
  },
  dataValue: {
    fontFamily: fonts.bold,
    color: Colors.colorDark,
    fontSize: 14,
    marginRight: 10,
  },
  inputContainer: {
    width: 250,
    height: 50,
  },
  editInput: {
    fontFamily: fonts.bold,
    color: Colors.colorDark,
    fontSize: 14,
    textAlign: 'right',
    paddingTop: 17,
  },
  button: {
    width: 60,
    padding: 10,
    backgroundColor: Colors.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: fonts.roman,
    color: '#fff',
    fontSize: 14,
  },
  passButton: {
    textAlign: 'right',
    marginTop: 20,
  },
  passText: {
    fontFamily: fonts.roman,
    color: Colors.colorDark,
    fontSize: 14,
  },
});
export default User;
