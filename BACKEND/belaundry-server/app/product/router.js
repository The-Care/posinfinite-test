const router = require('express').Router();
const multer = require('multer');
const os = require('os');
const productController = require('./controller');

router.post('/products', multer({ dest: os.tmpdir() }).single('image'), productController.postProduct);
router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProductById);

module.exports = router;