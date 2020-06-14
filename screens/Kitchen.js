import React from 'react';
import {View, ScrollView, StyleSheet, Text, FlatList} from 'react-native';
import NavTopButton from '../components/buttons/NavTopButton';
import {useSelector} from 'react-redux';
import {Colors, fonts} from '../constants/Config';
import reactotron from 'reactotron-react-native';
import KitchenModel from '../components/KitchenModel';
const Kitchen = ({navigation}) => {
  const navgationButtons = useSelector(
    (state) => state.categoreReducer.navgationButtons,
  );
  const KitchenData = useSelector((state) => state.categoreReducer.KitchenData);

  const navigate = (route, component) => {
    if (component) {
      navigation.navigate('Home', {component: component});
      reactotron.log(component);
    } else {
      navigation.navigate(route);
    }
  };
  return (
    <View>
      <View style={styles.topNavgation}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {navgationButtons.map(({id, title, route, component}) => (
            <NavTopButton
              key={id}
              title={title}
              onPress={() => {
                navigate(route, component);
              }}
            />
          ))}
        </ScrollView>
      </View>
      <View style={{justifyContent: 'flex-start', alignItems: 'center'}}>
        <View style={styles.constiner}>
          <View style={styles.topInfo}>
            <Text style={styles.infoText}>رقم الطلب</Text>
            <Text style={styles.infoText}>اسم العميل</Text>
            <Text style={styles.infoText}>نوع الطلب</Text>
            <Text style={styles.infoText}>حاله الطلب</Text>
            <Text style={styles.infoText}> الامر</Text>
          </View>
          <ScrollView>
            <View style={{marginBottom: 10}}>
              {KitchenData.map((item, index) => (
                <KitchenModel
                  key={item.id}
                  id={item.id}
                  backColor={index % 2 == 0}
                  customerName={`${item.customerName}  ${index + 1}`}
                  orderState={item.orderState}
                  type={item.type}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  topNavgation: {
    backgroundColor: Colors.primaryColor,
    width: '100%',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
  },
  constiner: {
    backgroundColor: '#fff',
    width: '97%',
    height: '89%',
    marginVertical: 10,
    elevation: 4,
    borderRadius: 2,
  },
  topInfo: {
    flexDirection: 'row',
    backgroundColor: Colors.primaryColor,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 6,
  },
  infoText: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: '#fff',
    width: '16%',
    paddingHorizontal: 10,
  },
});
export default Kitchen;
