import { ALL_PRODUCTS, SINGLE_PRODUCT } from "../actions/actionType";

const initialState = { allProducts: [], singleProduct: {} };

function productReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_PRODUCTS:
      return { ...state, allProducts: action.payload };
    case SINGLE_PRODUCT:
      return { ...state, singleContact: action.payload };
    default:
      return state;
  }
}

export default productReducer;
