import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
  ScrollView,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {Colors, fonts} from '../constants/Config';
import RadioButton from './buttons/RadioButton';
import {useDispatch} from 'react-redux';
import {
  selectionItemsAction,
  removeItemsAction,
  submitAction,
} from '../store/actions/cart';
const {width, height} = Dimensions.get('window');
const ModalPopUp = ({active, modalClose, payload}) => {
  const {title, price, details} = payload;
  const [keyboardState, setKeyboardState] = useState(false);
  const [notes, setNotes] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardState(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardState(false);
    });
  }, [Keyboard]);

  const addItemsHandler = (id, type, label, title, price) => {
    dispatch(selectionItemsAction(id, type, label, title, +price));
  };
  const removeItemsHandler = (id, type, price) => {
    dispatch(removeItemsAction(id, type, price));
  };
  const submitHandler = () => {
    dispatch(submitAction(title, +price, notes));
    modalClose();
    setNotes(null);
  };
  return (
    <Modal visible={active} animationType="fade" transparent>
      <TouchableWithoutFeedback onPress={modalClose}>
        <View style={styles.container}>
          <TouchableWithoutFeedback>
            <View style={styles.content}>
              <View style={styles.topTitle}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{details?.description}</Text>
              </View>
              <View style={{height: '76%'}}>
                <ScrollView>
                  {details?.data.map((items) => (
                    <View style={styles.optionsBox} key={items.id}>
                      <Text style={styles.label}>{items.label}</Text>
                      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                        {items.options.map((option) => (
                          <RadioButton
                            key={option.id}
                            title={option.title}
                            price={option.price}
                            onSelect={() =>
                              addItemsHandler(
                                option.id,
                                option.type,
                                items.label,
                                option.title,
                                option.price,
                              )
                            }
                            onRemove={() =>
                              removeItemsHandler(
                                option.id,
                                option.type,
                                option.price,
                              )
                            }
                          />
                        ))}
                      </View>
                    </View>
                  ))}
                  <View style={{height: 90, zIndex: -1}}></View>
                  <View
                    style={[
                      styles.notesConatiner,
                      keyboardState && styles.keyboardActive,
                    ]}>
                    <Text style={styles.label}>ملاحظات</Text>
                    <TextInput
                      style={styles.TxetInput}
                      placeholder="اكتب الملاحظات هنا"
                      keyboardType="default"
                      multiline
                      onChangeText={(text) => setNotes(text)}
                    />
                  </View>
                </ScrollView>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={submitHandler}
                  style={styles.buttonStyle}>
                  <Text style={styles.buttonText}>اضافه الطلب</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={modalClose}
                  style={[styles.buttonStyle, {backgroundColor: Colors.gray2}]}>
                  <Text style={styles.buttonText}>رجوع للاصناف</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
export default ModalPopUp;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: '#00000067',
    alignItems: 'center',
  },
  content: {
    borderRadius: 5,
    width: '60%',
    height: '94%',
    marginTop: 4,
    backgroundColor: '#fff',
    elevation: 3,
  },
  topTitle: {
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
    width: '100%',
    height: '13%',
    backgroundColor: Colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    fontFamily: fonts.bold,
    color: Colors.dark,
    fontSize: 18,
  },
  subTitle: {
    fontFamily: fonts.light,
    color: Colors.dark,
    fontSize: 11,
    marginBottom: 5,
  },
  optionsBox: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,
  },
  label: {
    textAlign: 'left',
    fontFamily: fonts.roman,
    color: Colors.dark,
    fontSize: 16,
  },
  notesConatiner: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    position: 'absolute',
    width: '100%',
    bottom: -5,
    zIndex: 2,
    justifyContent: 'center',
  },
  keyboardActive: {
    height: '100%',
    backgroundColor: '#fff',
    bottom: '27%',
  },
  TxetInput: {
    backgroundColor: Colors.gray,
    borderRadius: 5,
    fontFamily: fonts.roman,
    textAlign: 'right',
    paddingHorizontal: 10,
    height: 55,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    width: '100%',
  },
  buttonStyle: {
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primaryColor,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: fonts.bold,
  },
});
