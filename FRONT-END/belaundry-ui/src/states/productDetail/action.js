/* eslint-disable no-unused-expressions */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_DETAIL_PRODUCT: 'RECEIVE_DETAIL_PRODUCT',
};

function receiveDetailProductActionCreator(detailProduct) {
  return {
    type: ActionType.RECEIVE_DETAIL_PRODUCT,
    payload: {
      detailProduct,
    },
  };
}

function asyncReceiveDetailProduct(productId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const detailProduct = await api.getProductDetail(productId);
      dispatch(receiveDetailProductActionCreator(detailProduct));
    } catch (error) {
      error;
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveDetailProductActionCreator,
  asyncReceiveDetailProduct,
};
