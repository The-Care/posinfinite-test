import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useState } from "react";
import * as Yup from "yup";
import Swal from "sweetalert2";

export default function CreateProduct() {
  const [saveImage, setSaveImage] = useState([]);

  const handleImageUpload = (e) => {
    let uploaded = e.target.files;

    setSaveImage(uploaded);
  };

  const formik = useFormik({
    initialValues: {
      productName: "",
      description: "",
      sku: "",
      stock: "",
      category: "",
      price: "",
    },
    validationSchema: Yup.object({
      productName: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Required"),
      description: Yup.string()
        .max(1000, "Must be 10000 characters or less")
        .required("Required"),
      sku: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Required"),
      stock: Yup.string()
        .min(1, "Must be exactly 5 characters")
        .required("Required"),
      price: Yup.string()
        .min(1, "Must be exactly 5 characters")
        .required("Required"),
    }),

    onSubmit: (values) => {
      let formData = new FormData();
      formData.append("photo", saveImage[0]);

      axios
        .post(`http://localhost:3000/upload`, formData)
        .then((res) => {
          return axios.post(`http://localhost:3000/add-product`, {
            productName: values.productName,
            sku: values.sku,
            stock: values.stock,
            category: values.category,
            price: values.price,
            description: values.description,
            photo: res.data,
          });
        })
        .then((res) => {
          console.log("Add product successful");
          Swal.fire({
            title:
              "Add new product successful, please see the update on mobile",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(0,0,123,0.4)
              no-repeat
            `,
          });
        })
        .catch((error) => {
          console.error(error);
          Swal.fire({
            title: "Error!",
            text: "Do you want to continue",
            icon: "error",
            confirmButtonText: "Cool",
          });
        });
    },
  });

  return (
    <div className="flex flex-row h-full">
      <div className="basis-9/12 bg-[#CAECFF] max-h-full ">
        <form onSubmit={formik.handleSubmit}>
          <div className="ml-12 mr-12">
            <h1 className="mb-12 mt-12 font-extrabold text-5xl">
              Add New Product
            </h1>
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
                {formik.touched.productName && formik.errors.productName ? (
                  <div>{formik.errors.productName}</div>
                ) : null}
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
                // required
                onChange={formik.handleChange}
                value={formik.values.description}
              ></textarea>
              {formik.touched.description && formik.errors.description ? (
                <div>{formik.errors.description}</div>
              ) : null}
            </div>

            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-6 group">
                <label className="block mb-2 text-sm font-medium text-[#0099EE] dark:text-white">
                  SKU
                </label>
                <input
                  id="password"
                  className="border-[#2D9CDB] bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="sku"
                  // required
                  onChange={formik.handleChange}
                  value={formik.values.sku}
                />
                {formik.touched.sku && formik.errors.sku ? (
                  <div>{formik.errors.sku}</div>
                ) : null}
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <label className="block mb-2 text-sm font-medium text-[#0099EE] dark:text-white">
                  Stock
                </label>
                <input
                  id="password"
                  className="border-[#2D9CDB] bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="stock"
                  // required
                  onChange={formik.handleChange}
                  value={formik.values.stock}
                />
                {formik.touched.stock && formik.errors.stock ? (
                  <div>{formik.errors.stock}</div>
                ) : null}
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
              {formik.touched.category && formik.errors.category ? (
                <div>{formik.errors.category}</div>
              ) : null}
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-[#0099EE] dark:text-white">
                Price
              </label>
              <input
                id="password"
                type="number"
                className="border-[#2D9CDB] bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // required
                name="price"
                onChange={formik.handleChange}
                value={formik.values.price}
              />
              {formik.touched.price && formik.errors.price ? (
                <div>{formik.errors.price}</div>
              ) : null}
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                type="submit"
                className="text-white bg-[#56E4A0] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Publish
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="basis-3/12 bg-[#E7F5FD] h-full">
        <div class="flex items-center justify-center w-full mt-5">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-11/12 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                class="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Upload image here</span>
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              class="hidden"
              onChange={handleImageUpload}
              enctype="multipart/form-data"
              name="photo"
            />
          </label>
        </div>
      </div>
    </div>
  );
}
