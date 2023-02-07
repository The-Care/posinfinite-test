const Products = [
  {
    id: "1",
    name: "T-SHIRT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas rutrum ipsum, ac gravida nisi dignissim vel. Donec accumsan lacinia orci, vitae luctus nibh tincidunt laoreet. Quisque ligula nibh, ultrices tempus metus vel, porttitor ullamcorper nulla. Curabitur luctus purus ac consectetur egestas. Praesent accumsan, quam eu venenatis tempor, massa orci interdum turpis, sed accumsan lacus dolor at nisi. Sed vitae porttitor nulla. Ut a velit semper, ullamcorper metus non, vestibulum elit.",
    price: 6.0,
    mainImg: require("../assets/picture/t-shirt.jpg"),
    categoryId: 3,
    authorId: 1,
  },
  {
    id: "2",
    name: "JEANS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas rutrum ipsum, ac gravida nisi dignissim vel. Donec accumsan lacinia orci, vitae luctus nibh tincidunt laoreet. Quisque ligula nibh, ultrices tempus metus vel, porttitor ullamcorper nulla. Curabitur luctus purus ac consectetur egestas. Praesent accumsan, quam eu venenatis tempor, massa orci interdum turpis, sed accumsan lacus dolor at nisi. Sed vitae porttitor nulla. Ut a velit semper, ullamcorper metus non, vestibulum elit.",
    price: 8.0,
    mainImg: require("../assets/picture/jeans.jpg"),
    categoryId: 2,
    authorId: 3,
  },
  {
    id: "2",
    name: "BAG OF LAUNDRY",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas rutrum ipsum, ac gravida nisi dignissim vel. Donec accumsan lacinia orci, vitae luctus nibh tincidunt laoreet. Quisque ligula nibh, ultrices tempus metus vel, porttitor ullamcorper nulla. Curabitur luctus purus ac consectetur egestas. Praesent accumsan, quam eu venenatis tempor, massa orci interdum turpis, sed accumsan lacus dolor at nisi. Sed vitae porttitor nulla. Ut a velit semper, ullamcorper metus non, vestibulum elit.",
    price: 18.0,
    mainImg: require("../assets/picture/bag.jpg"),
    categoryId: 3,
    authorId: 3,
  },
];

export function fetchProducts() {
  return Products;
}

export function getProduct(id) {
  return Products.find((product) => product.id == id);
}
