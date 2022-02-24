import SHOP_DATA from './shop.data';

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state, action) => {
  if (state === undefined) {
    state = INITIAL_STATE;
  }

  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
