import { ActionType } from './action';

function detailProductReducer(detailProduct = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_DETAIL_PRODUCT:
      return action.payload.detailProduct;
    default:
      return detailProduct;
  }
}

export default detailProductReducer;
