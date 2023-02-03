import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { asyncReceiveDetailProduct } from '../states/productDetail/action';
import DetailProduct from '../components/DetailProduct/DetailProduct';

export default function DetailProductPage() {
  const { id } = useParams();
  const { detailProduct = null } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveDetailProduct(id));
  }, [id, dispatch]);

  if (!detailProduct) {
    return null;
  }

  return (
    <DetailProduct {...detailProduct} />
  );
}
