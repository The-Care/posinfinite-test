import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

export default function AddProduct({ addProduct }) {
  const [status, setStatus] = useState(false);
  const [name, onNameChange] = useInput('');
  const [description, onDescriptionChange] = useInput('');
  const [sku, onSKUChange] = useInput('');
  const [stock, onStockChange] = useInput('');
  const [price, onPriceChange] = useInput('');
  const [image, onImageChange] = useState('');

  const handleImageChange = ({ target }) => {
    console.log(target.files[0]);
    onImageChange(target.files[0]);
  };

  const onHandlerSubmit = async () => {
    setStatus(true);
    await addProduct({
      name, description, sku, stock, price, image, category: 'Dry Clean',
    });
    setStatus(false);
  };

  return (
    <section>
      <div className="w-full bg-white px-7 py-5 mb-2 flex">
        <div className="flex">
          <div className="h-8 w-8 rounded-full bg-primary" />
          <div className="h-3 w-3 ml-2 rounded-full bg-secondary" />
        </div>
        <div className="pl-3">
          <h1 className="text-primary text-xl font-bold">BeLaundry</h1>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="w-full px-6 py-4 mb-4">
          <h1 className="text-4xl text-slate-800 font-bold tracking-wider">Add New Product</h1>
        </div>
        <form onSubmit={onHandlerSubmit}>
          <div className="w-full">
            <div className="w-full px-6 mb-4 lg:mb-6">
              <label htmlFor="name" className="text-title">Product Name</label>
              <input
                type="text"
                name="name"
                placeholder="Jeans"
                autoComplete="off"
                value={name}
                onChange={onNameChange}
                className="w-full bg-slate-50 text-dark p-3 mt-2 rounded-md border-title focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary placeholder:text-slate-300"
              />
            </div>
            <div className="w-full px-6 mb-4 lg:mb-6">
              <label htmlFor="description" className="text-title">Description</label>
              <textarea
                name="description"
                placeholder="Description Product.."
                value={description}
                onChange={onDescriptionChange}
                className="w-full h-32 bg-slate-50 text-dark p-3 mt-2 rounded-md border-title focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary placeholder:text-slate-300"
              />
            </div>
            <div className="w-full px-6 mb-4 lg:mb-6">
              <label htmlFor="sku" className="text-title">SKU</label>
              <input
                type="text"
                name="sku"
                placeholder="KU89XR"
                autoComplete="off"
                value={sku}
                onChange={onSKUChange}
                className="w-full bg-slate-50 text-dark p-3 mt-2 rounded-md border-title focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary placeholder:text-slate-300"
              />
            </div>
            <div className="w-2/5 px-6 mb-4 lg:mb-6">
              <label htmlFor="stock" className="text-title">Stock</label>
              <input
                type="number"
                name="stock"
                placeholder="12"
                autoComplete="off"
                value={stock}
                onChange={onStockChange}
                className="w-full bg-slate-50 text-dark p-3 mt-2 rounded-md border-title focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary placeholder:text-slate-300"
              />
            </div>
            <div className="w-full px-6 mb-4 lg:mb-6">
              <label htmlFor="name" className="text-title">Price</label>
              <div className="w-full flex flex-wrap">
                <div className="py-3 pr-4"><span className="bg-sky-200 py-2 px-3 rounded-lg text-title text-xl">Wash and Fold</span></div>
                <div className="py-3 pr-4"><span className="bg-title py-2 px-3 rounded-lg text-slate-100 text-xl">Dry Clean</span></div>
                <div className="py-3 pr-4"><span className="bg-sky-200 py-2 px-3 rounded-lg text-title text-xl">Home</span></div>
                <div className="py-3 pr-4"><span className="bg-sky-200 py-2 px-3 rounded-lg text-title text-xl">Others</span></div>
              </div>
            </div>
            <div className="w-1/2 px-6 mb-4 lg:mb-6">
              <label htmlFor="name" className="text-title">Price</label>
              <input
                type="number"
                name="price"
                placeholder="10.00"
                autoComplete="off"
                value={price}
                onChange={onPriceChange}
                className="w-full bg-slate-50 text-dark p-3 mt-2 rounded-md border-title focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary placeholder:text-slate-300"
              />
            </div>
            <div className="w-full px-6 pt-3 mb-4 lg:mb-6">
              <div className="bg-slate-50 rounded-3xl">
                <div className="h-56 flex flex-col justify-center items-center">
                  <img src="../images/picture.png" alt="upload_image" className="w-32 h-32" />
                </div>
                <div className="text-center pb-6">
                  <input
                    type="file"
                    accept="image/*"
                    name="image"
                    id="image"
                    hidden
                    onChange={handleImageChange}
                  />
                  <label htmlFor="image" className="text-title hover:cursor-pointer underline text-2xl font-semibold">Upload image here</label>
                </div>
              </div>
            </div>
            <div className="w-full my-10 px-6">
              <button type="submit" disabled={status} className=" w-full text-xl font-bold text-white bg-third py-3 px-8 rounded-lg hover:opacity-80 shadow-md transition duration-500 ease-in-out">
                {status ? 'Processing..' : 'Publish'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

AddProduct.propTypes = {
  addProduct: PropTypes.func.isRequired,
};
