import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

export default function Products({ products }) {
  return (
    <section className="py-5 mb-8">
      <div className="container">
        <div className=" w-full title pb-3">
          <h2 className="text-title font-semibold uppercase">our latest product</h2>
        </div>
      </div>
      <div className="products pl-9 w-full flex flex-col flex-wrap overflow-x-auto">
        <div className="product relative mr-3">
          <div className="h-2/5 flex flex-col justify-end absolute z-1 bottom-0 w-full text-white">
            <div className="product-title rounded-b-lg px-3 py-2">
              <p className="text-[9px] text-slate-300">Dry Cleaning</p>
              <h2 className="font-semibold text-2xl -mb-1">Jeans</h2>
              <p className="text-xl">$ 10.00/pc</p>
            </div>
          </div>
          <div className="rounded-lg">
            <img src="./images/jeans.png" alt="dryclean" className="w-full h-full" />
          </div>
        </div>
        <div className="product relative mr-3">
          <div className="h-2/5 flex flex-col justify-end absolute z-1 bottom-0 w-full text-white">
            <div className="product-title rounded-b-lg px-3 py-2">
              <p className="text-[9px] text-slate-300">Dry Cleaning</p>
              <h2 className="font-semibold text-2xl -mb-1">Tshirt</h2>
              <p className="text-xl">$ 10.00/pc</p>
            </div>
          </div>
          <div className="rounded-lg">
            <img src="./images/tshirt-detail.png" alt="tshirt" className="w-full h-full" />
          </div>
        </div>
        {
          products.map((product, index) => (
            <ProductItem key={index} {...product} />
          ))
        }
      </div>
    </section>
  );
}

Products.propTypes = {
  products: PropTypes.array.isRequired,
};
