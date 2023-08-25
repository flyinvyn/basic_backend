const express = require("express");
const router = express.Router();
const productController = require("../controller/Products");
// const {protect, roleAdmin} = require("../middleware/auth")
const upload = require("../middleware/uploadProduct")
// const {hitCacheProductDetail,clearCacheProductDetail} = require('../middleware/redis')

router
  .get("/", productController.getAllProduct)
  .get("/search", productController.searchProduct)
  .get("/:id", productController.getDetailProduct)
  .post("/",upload, productController.createProduct)
  .put("/:id",upload, productController.updateProduct)
  .delete("/:id",productController.deleteProduct);

module.exports = router;