/* eslint-disable no-prototype-builtins */
import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { asyncAddProduct } from '../states/products/action';
import AddProduct from '../components/Form/AddProduct';

export default function AddProductPage() {
  const dispatch = useDispatch();

  const onAddProduct = async (product) => {
    const response = await dispatch(asyncAddProduct(product));
    if (response.hasOwnProperty('name')) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Product added successfully',
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  return (
    <AddProduct addProduct={onAddProduct} />
  );
}
