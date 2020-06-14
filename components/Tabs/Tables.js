import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Table from '../Table';
import {useSelector} from 'react-redux';

const Tables = () => {
  const tables = useSelector((state) => state.categoreReducer.tables);
  return (
    <View style={styles.constiner}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FlatList
          data={tables}
          numColumns={6}
          keyExtractor={(item) => item.tableNumber}
          renderItem={({item}) => (
            <Table
              numbers={item.tableNumber}
              done={item.done}
              underway={item.underway}
              onPress={() => {}}
            />
          )}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  constiner: {
    backgroundColor: '#fff',
    width: '100%',
    height: '91%',
    marginVertical: 10,
    elevation: 4,
    borderRadius: 2,
  },
});
export default Tables;
