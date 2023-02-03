import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import config from '../../utils/config';

export default function ProductItem({
  _id, name, category, price, image_url,
}) {
  return (
    <Link to={`/product/detail/${_id}`}>
      <div className="product relative mr-3">
        <div className="h-2/5 flex flex-col justify-end absolute z-1 bottom-0 w-full text-white">
          <div className="product-title rounded-b-lg px-3 py-2">
            <p className="text-[9px] text-slate-300">{category}</p>
            <h2 className="font-semibold text-2xl -mb-1">{name}</h2>
            <p className="text-xl">
              $
              {' '}
              {price}
              .00/pc
            </p>
          </div>
        </div>
        <div className="rounded-lg">
          <img src={`${config.BASE_URL}/${image_url}`} alt={`image_${name}`} className="w-full h-full" />
        </div>
      </div>
    </Link>
  );
}

ProductItem.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
