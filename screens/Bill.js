import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Back from '../components/buttons/Back';
import {fonts, Colors} from '../constants/Config';

const Bill = (props) => {
  const [total, setTotal] = useState(0);
  const billData = [
    {
      id: '1',
      title: 'كولا',
      price: 10,
      quantity: 10,
    },
    {
      id: '2',
      title: 'برجر',
      price: 120,
      quantity: 3,
    },
    {
      id: '4',
      title: 'هوت دوج',
      price: 100,
      quantity: 2,
    },
  ];
  useEffect(() => {
    setTotal(0);
    billData.map((item) => setTotal((a) => a + item.price * item.quantity));
  }, []);
  return (
    <View style={styles.screen}>
      <Back />
      <ScrollView style={{flex: 1, width: '100%', paddingTop: 50}}>
        <View style={styles.container}>
          <Text style={styles.title}>مطعم ابو الباراجر</Text>
          <View style={{paddingHorizontal: '20%'}}>
            <View style={{marginTop: 17}}>
              <Text style={styles.textStyle}>
                رقم الفاتوره : {props.route.params.billNum}
              </Text>
              <Text style={styles.textStyle}>اسم الكشير : خالد محمود محمد</Text>
              <Text style={styles.textStyle}> الوقت : 03:40 </Text>
              <Text style={styles.textStyle}> التاريخ : 1/3/2020 </Text>
            </View>
            <View style={styles.tableContainer}>
              <View style={styles.rowInof}>
                <View style={styles.row}>
                  <Text style={styles.textStyleTable}>الصنف</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.textStyleTable}>الكميه</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.textStyleTable}>السعر</Text>
                </View>
              </View>
              {billData.map((item) => (
                <View style={styles.rowItem} key={item.id}>
                  <View style={styles.row}>
                    <Text style={styles.textStyleTable}>{item.title}</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.textStyleTable}>{item.quantity}</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.textStyleTable}>
                      {item.quantity * item.price}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
            <View
              style={{
                width: '100%',
                marginTop: 5,
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Text style={styles.textStyle}> المجموع : {total} </Text>
              <Text style={styles.textStyle}>ضريبه :5%</Text>
              <Text style={styles.textStyle}>
                الاجمالي : {total + total / 5}
              </Text>
            </View>
            <View
              style={{
                paddingVertical: 35,
                alignItems: 'flex-end',
                // justifyContent: 'center',
              }}>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>طباعه</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Bill;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 10,
    paddingBottom: 60,
  },
  title: {
    fontFamily: fonts.bold,
    color: Colors.colorDark,
    fontSize: 16,
    alignSelf: 'center',
  },
  textStyle: {
    fontFamily: fonts.bold,
    fontSize: 12,
    color: Colors.dark,
    marginTop: 4,
    alignItems: 'center',
  },
  tableContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.dark,
    minHeight: 100,
    marginTop: 20,
  },
  rowInof: {
    paddingBottom: 10,
    paddingTop: 5,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: Colors.dark,
    marginBottom: 5,
  },
  rowItem: {
    flexDirection: 'row',
    paddingBottom: 10,
    paddingTop: 5,
  },
  row: {
    width: '33.333333333333336%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyleTable: {
    fontFamily: fonts.bold,
    fontSize: 12,
    color: Colors.dark,
  },
  buttonContainer: {
    elevation: 1,
    paddingBottom: 20,
    paddingHorizontal: 20,
    paddingTop: 15,

    height: 30,
    backgroundColor: Colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: '#fff',
  },
});
