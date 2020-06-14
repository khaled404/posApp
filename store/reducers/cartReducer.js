import {
  SELECTION_ITEMS,
  REMOVE_ITEMS,
  SUBMIT_ITEMS,
  COUNTER_PLUS,
  COUNTER_MINUS,
  EMPTY_CART,
} from '../actions/cart';
import reactotron from 'reactotron-react-native';
const initialState = {
  selectedItems: [],
  cartItems: [],
  cartItemId: 0,
  detailsTotalPrice: 0,
  totalPrice: 0,
  showTotalPrice: 0,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SELECTION_ITEMS:
      return {
        ...state,
        selectedItems: [...state.selectedItems, action.payload],
        detailsTotalPrice: state.detailsTotalPrice + action.payload.price,
      };
    case REMOVE_ITEMS:
      const removeFromArray = state.selectedItems.filter(
        (item) =>
          item.type === action.productType && item.id === action.productId,
      );
      return {
        ...state,
        selectedItems: state.selectedItems.filter(
          (item) => !removeFromArray.includes(item),
        ),
        detailsTotalPrice: state.detailsTotalPrice - action.price,
      };
    case SUBMIT_ITEMS:
      const newCartItem = {
        id: state.cartItemId.toString(),
        title: action.title,
        price: action.price,
        counter: 1,
        notes: action.notes,
        details: [...state.selectedItems],
      };
      return {
        ...state,
        selectedItems: [],
        cartItems: [...state.cartItems, newCartItem],
        cartItemId: state.cartItemId + 1,
        totalPrice: state.detailsTotalPrice,
        showTotalPrice: state.detailsTotalPrice,
      };
    case COUNTER_PLUS:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) =>
          item.id === action.id ? {...item, counter: item.counter++} : item,
        ),
        showTotalPrice: state.showTotalPrice + state.totalPrice,
      };
    case COUNTER_MINUS:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) =>
          item.id === action.id && item.counter > 1
            ? {...item, counter: item.counter--}
            : item,
        ),
        showTotalPrice:
          state.showTotalPrice != state.totalPrice
            ? state.showTotalPrice - state.totalPrice
            : state.showTotalPrice,
      };
    case EMPTY_CART:
      return initialState;
  }
  return state;
};
