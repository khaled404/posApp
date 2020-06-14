import React from 'react';
import {View, FlatList, ScrollView} from 'react-native';
import CategoryModel from '../CategoryModel';
import {categoryData} from '../../dummy-data/dummy-data';
import {useSelector} from 'react-redux';
import CategoryButton from '../buttons/CategoryButton';

const Category = ({onPress}) => {
  const categoryButtons = useSelector(
    (state) => state.categoreReducer.categoryButtons,
  );
  return (
    <View>
      <View
        style={{
          width: '100%',
          height: 79,
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 6,
        }}>
        <ScrollView horizontal={true}>
          {categoryButtons.map((item) => (
            <CategoryButton
              key={item.id}
              title={item.title}
              icon={item.icon}
              active={item.active}
              onPress={() => {}}
            />
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          width: '100%',
          height: '80%',
          elevation: 4,
          borderRadius: 2,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FlatList
            data={categoryData}
            numColumns={6}
            renderItem={({item}) => (
              <CategoryModel
                title={item.title}
                price={item.price}
                image={item.image}
                onPress={() => onPress(item)}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
};
export default Category;
