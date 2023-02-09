const express = require("express");
const app = express();
const port = 3000;
const { Product } = require("./models/index");
const upload = require("./middlewares/storage");
const path = require("path");

app.use(express.urlencoded({ extended: false }));
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

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
    const { productName, description, sku, stock, category, price, photo } =
      req.body;

    const dataProduct = {
      productName,
      sku,
      stock,
      category,
      price,
      description,
      photo,
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

app.post("/upload", upload.single("photo"), async (req, res) => {
  try {
    const url = req.protocol + "://" + req.get("host") + "/uploads/";
    const images = url + req.file.filename;

    res.status(200).json(images);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
