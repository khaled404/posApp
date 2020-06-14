export const SELECTION_ITEMS = 'SELECTION_ITEMS';
export const REMOVE_ITEMS = 'REMOVE_ITEMS';
export const SUBMIT_ITEMS = 'SUBMIT_ITEMS';
export const COUNTER_PLUS = 'COUNTER_PLUS';
export const COUNTER_MINUS = 'COUNTER_MINUS';
export const EMPTY_CART = 'EMPTY_CART';

export const selectionItemsAction = (id, type, label, title, price) => ({
  type: SELECTION_ITEMS,
  payload: {id, type, label, title, price},
});

export const removeItemsAction = (id, type, price) => ({
  type: REMOVE_ITEMS,
  productId: id,
  productType: type,
  price,
});

export const submitAction = (title, price, notes) => ({
  type: SUBMIT_ITEMS,
  price,
  title,
  notes,
});

export const counterPlus = (id) => ({
  type: COUNTER_PLUS,
  id,
});

export const counterMinus = (id) => ({
  type: COUNTER_MINUS,
  id,
});

export const emptyCart = () => ({type: EMPTY_CART});
