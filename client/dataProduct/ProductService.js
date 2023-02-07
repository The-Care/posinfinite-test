const Products = [
    {}
]

export function fetchProducts() {
    return Products;
  }
  
  export function getProduct(id) {
    return Products.find((product) => product.id == id);
  }
  