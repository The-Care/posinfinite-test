import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Balance from '../components/Home/Balance';
import Order from '../components/Home/Order';
import Ordered from '../components/Home/Ordered';
import Products from '../components/Home/Products';
import { asyncReceiveProducts } from '../states/products/action';

export default function HomePage() {
  const { products = [] } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveProducts());
  }, [dispatch]);

  return (
    <>
      <Balance />
      <Order />
      <Ordered />
      <Products products={products} />
    </>
  );
}
