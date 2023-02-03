import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import productsReducer from './products/reducer';
import detailProductReducer from './productDetail/reducer';

const store = configureStore({
  reducer: {
    products: productsReducer,
    detailProduct: detailProductReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
