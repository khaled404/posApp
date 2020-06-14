import React, {useReducer, useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Colors} from '../constants/Config';
import NavTopButton from '../components/buttons/NavTopButton';
import {useSelector} from 'react-redux';
import Category from '../components/Tabs/Category';
import Tables from '../components/Tabs/Tables';
import Cart from '../components/Cart';
import ModalPopUp from '../components/ModalPopUp';
import reactotron from 'reactotron-react-native';

const OPEN_POPUP = 'OPEN_POPUP';
const CLOSE_POPUP = 'CLOSE_POPUP';
const initialState = {
  renderComponent: Category,
  popUpActive: false,
  payload: {},
};

const reducerFunction = (state, action) => {
  switch (action.type) {
    case 'CategoryTab':
      return {...state, renderComponent: Category};
    case 'TablesTab':
      return {...state, renderComponent: Tables};
    case OPEN_POPUP:
      return {
        ...state,
        popUpActive: !state.popUpActive,
        payload: action.payload,
      };
    case CLOSE_POPUP:
      return {
        ...state,
        popUpActive: !state.popUpActive,
      };
    default:
      return state;
  }
};
const Home = (prpos) => {
  const {navigation} = prpos;

  const navgationButtons = useSelector(
    (state) => state.categoreReducer.navgationButtons,
  );
  const [State, dispatch] = useReducer(reducerFunction, initialState);
  useEffect(() => {
    if (prpos.route.params != undefined) {
      dispatch({
        type: prpos.route.params.component,
        component: prpos.route.params.component,
      });
    }
  }, [prpos.route.params]);
  return (
    <View style={styles.container}>
      <ModalPopUp
        active={State.popUpActive}
        payload={State.payload}
        modalClose={() => {
          dispatch({type: CLOSE_POPUP});
        }}
      />
      <View style={styles.leftContent}>
        <View style={styles.topNavgation}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {navgationButtons.map(({id, title, route, component}) => (
              <NavTopButton
                key={id}
                title={title}
                onPress={() => {
                  route
                    ? navigation.navigate(route)
                    : dispatch({type: component, component: component});
                }}
              />
            ))}
          </ScrollView>
        </View>
        <View style={{paddingHorizontal: 12}}>
          <State.renderComponent
            onPress={(payload) => {
              dispatch({type: OPEN_POPUP, payload});
            }}
          />
        </View>
      </View>
      <Cart />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.gray,
  },
  leftContent: {
    width: '70%',
    paddingBottom: 12,
  },
  topNavgation: {
    backgroundColor: Colors.primaryColor,
    width: '100%',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
  },
});
export default Home;
