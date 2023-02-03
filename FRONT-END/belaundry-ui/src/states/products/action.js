/* eslint-disable no-alert */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_PRODUCTS: 'RECEIVE_PRODUCTS',
  ADD_PRODUCT: 'ADD_PRODUCT',
};

function receiveProductsActionCreator(products) {
  return {
    type: ActionType.RECEIVE_PRODUCTS,
    payload: {
      products,
    },
  };
}

function addProductActionCreator(product) {
  return {
    type: ActionType.ADD_PRODUCT,
    payload: {
      product,
    },
  };
}

function asyncReceiveProducts() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const products = await api.getAllProducts();
      console.log(products);
      dispatch(receiveProductsActionCreator(products));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncAddProduct({
  name, description, sku, stock, category, price, image,
}) {
  return async (dispatch) => {
    try {
      const product = await api.postProduct({
        name, description, sku, stock, category, price, image,
      });
      dispatch(addProductActionCreator(product));
      return product;
    } catch (error) {
      return error;
    }
  };
}

export {
  ActionType,
  receiveProductsActionCreator,
  addProductActionCreator,
  asyncAddProduct,
  asyncReceiveProducts,
};
