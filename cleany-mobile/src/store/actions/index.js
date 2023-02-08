import { ALL_PRODUCTS, DETAIL_PRODUCT } from "./actionType";
import axios from "axios";

const baseURL = "http://localhost:3000";

export const fetchAllProductsSuccess = (payload) => {
  return {
    type: ALL_PRODUCTS,
    payload,
  };
};

export const fetchAllProducts = () => {
  return async (dispatch, getState) => {
    try {
      let response = await axios.get(`${baseURL}/product`);

      dispatch(fetchAllProductsSuccess(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchSingleProductSuccess = (payload) => {
  return {
    type: SINGLE_PRODUCT,
    payload,
  };
};

export const fetchSingleProduct = (id) => {
  return async (dispatch, getState) => {
    try {
      let response = await axios.get(`${baseURL}/product/${id}`);

      dispatch(fetchSingleProductSuccess(response.data));
    } catch (error) {}
  };
};

export const addProduct = (dataProduct, category) => {
  return async (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        const dataAddProduct = {
          productName: dataProduct.productName,
          sku: dataProduct.sku,
          stock: Number(dataProduct.stock),
          category: category,
          price: Number(dataProduct.price),
          description: dataProduct.description,
        };

        console.log(dataAddProduct);
        let response = await axios.post(
          `${baseURL}/add-product`,
          dataAddProduct
        );
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
};
