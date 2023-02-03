import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import config from '../../utils/config';

export default function DetailProduct({
  name, description, category, price, image_url,
}) {
  return (
    <section>
      <div className="image-detail relative rounded-b-lg">
        <div className="relative shadow-md">
          <Link to="/"><FaChevronLeft className="text-3xl text-title absolute z-10 mt-6 ml-3" /></Link>
          <div className="bg-image absolute z-1 w-full h-1/2 bottom-0" />
          <img src={`${config.BASE_URL}/${image_url}`} className="w-full h-full" alt="tshirt-detail" />
        </div>
      </div>
      <div className="py-12 px-5">
        <span className="bg-[#CAECFF] rounded-lg p-2 text-primary text-[13px]">{category}</span>
        <h1 className="text-title font-bold text-4xl mt-6">{name}</h1>
        <h2 className="text-primary font-semibold text-2xl">
          $
          {price}
          .00/pc`
        </h2>
        <p className="text-justify mt-2">{description}</p>
        <div className="flex justify-center pt-9">
          <FaMinusCircle className="text-3xl text-slate-300" />
          <div className="bg-slate-50 border border-title px-8 py-1 -mt-2 rounded-lg mx-4">
            <p className="text-3xl text-slate-400">0</p>
          </div>
          <FaPlusCircle className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
}

DetailProduct.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image_url: PropTypes.string.isRequired,
};
