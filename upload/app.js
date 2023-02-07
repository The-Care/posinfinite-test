const express = require("express");
const app = express();
const cors = require("cors");
const uploader = require("./helpers/uploader");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

const PORT = 4040;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "upload services" });
});

app.post("/", upload.single("image"), async (req, res) => {
  const { file } = req;
  try {
    const { url } = await uploader(file.buffer);

    res.status(200).json({
      url,
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, (req, res) => {
  console.log(`Uploader listening on port: ${PORT}`);
});
