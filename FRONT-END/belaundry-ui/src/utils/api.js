const api = (() => {
  const BASE_URL = 'http://localhost:3000/api';

  async function getAllProducts() {
    const response = await fetch(`${BASE_URL}/products`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { products } } = responseJson;

    return products;
  }

  async function getProductDetail(productId) {
    const response = await fetch(`${BASE_URL}/products/${productId}`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { detailProduct } } = responseJson;

    return detailProduct;
  }

  async function postProduct({
    name, description, sku, stock, category, price, image,
  }) {
    const response = await fetch(`${BASE_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name, description, sku, stock, category, price, image,
      }),
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { product } } = responseJson;
    return product;
  }

  return {
    getAllProducts,
    getProductDetail,
    postProduct,
  };
})();

export default api;
