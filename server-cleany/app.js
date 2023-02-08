const express = require("express");
const app = express();
const port = 3000;
const { Product } = require("./models/index");

app.use(express.urlencoded({ extended: false }));
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Worldsss!");
});

app.get("/product", async (req, res) => {
  try {
    const getProduct = await Product.findAll({
      order: [["createdAt", "DESC"]],
      limit: 8,
    });

    res.status(200).json({
      data: getProduct,
    });
  } catch (error) {
    throw error;
  }
});

app.get("/product/:id", async (req, res) => {
  try {
    const getProductDetail = await Product.findByPk(req.params.id);

    res.status(200).json(getProductDetail);
  } catch (error) {
    throw error;
  }
});

app.post("/add-product", async (req, res) => {
  try {
    console.log(req.body, "req body");
    const { productName, description, sku, stock, category, price } = req.body;

    const dataProduct = {
      productName: productName,
      sku,
      stock,
      category,
      price,
      description,
    };

    console.log(dataProduct, "data buat create");

    const addProduct = await Product.create(dataProduct);

    res.status(201).json({
      statuscode: 201,
      message: "Product has been created",
      data: addProduct,
    });
  } catch (err) {
    throw err;
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
