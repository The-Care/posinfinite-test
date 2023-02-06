const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3002;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log("this app running on Port", PORT);
});
