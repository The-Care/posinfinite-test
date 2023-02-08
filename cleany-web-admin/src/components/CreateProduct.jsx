import React from "react";
import { useFormik } from "formik";
import axios from "axios";

export default function CreateProduct() {
  const formik = useFormik({
    initialValues: {
      productName: "",
      description: "",
      sku: "",
      stock: "",
      category: "",
      price: "",
    },

    onSubmit: (values) => {
      axios.post(`http://localhost:3000/add-product`, values).then((res) => {
        console.log(res);
        console.log(res.data);
      });
    },
  });

  return (
    <div className="flex flex-row h-full">
      <div className="basis-9/12 bg-[#CAECFF] max-h-full ">
        <div className="ml-12 mr-12">
          <h1 className="mb-12 mt-12 font-extrabold text-5xl">
            Add New Product
          </h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-6">
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-[#0099EE] dark:text-white">
                  Product Name
                </label>
                <input
                  id="password"
                  className="border-[#2D9CDB] mr-auto ml-auto bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  // required
                  name="productName"
                  onChange={formik.handleChange}
                  value={formik.values.productName}
                />
              </div>

              <label className="block mb-2 text-sm font-medium text-[#0099EE] dark:text-white">
                Description
              </label>
              <textarea
                id="message"
                rows="4"
                class="border-[#2D9CDB] ml-auto mr-auto block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Leave a comment..."
                name="description"
                required
                onChange={formik.handleChange}
                value={formik.values.description}
              ></textarea>
            </div>

            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-6 group">
                <label className="block mb-2 text-sm font-medium text-[#0099EE] dark:text-white">
                  SKU
                </label>
                <input
                  id="password"
                  type="number"
                  className="border-[#2D9CDB] bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="sku"
                  required
                  onChange={formik.handleChange}
                  value={formik.values.sku}
                />
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <label className="block mb-2 text-sm font-medium text-[#0099EE] dark:text-white">
                  Stock
                </label>
                <input
                  id="password"
                  className="border-[#2D9CDB] bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="stock"
                  required
                  onChange={formik.handleChange}
                  value={formik.values.stock}
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-[#0099EE] dark:text-white">
                Category
              </label>
              <select
                id="countries"
                class="mr-auto ml-auto border-[#2D9CDB] bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="category"
                onChange={formik.handleChange}
                value={formik.values.category}
              >
                <option>Wash and Fold</option>
                <option>Dry Clean</option>
                <option>Home</option>
                <option>Others</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-[#0099EE] dark:text-white">
                Price
              </label>
              <input
                id="password"
                type="number"
                className="border-[#2D9CDB] bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                name="price"
                onChange={formik.handleChange}
                value={formik.values.price}
              />
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Publish
            </button>
          </form>
        </div>
      </div>
      <div className="basis-3/12 bg-[#E7F5FD] h-full">
        <h1 className="text-center mt-12">IMAGE UPLOAD</h1>
      </div>
    </div>
  );
}
