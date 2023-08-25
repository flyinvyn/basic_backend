const express = require("express");
const router = express.Router();
const categoryController = require("../controller/Category");
// const {protect, roleAdmin} = require("../middleware/auth")
const upload = require("../middleware/upload")
// const {hitCacheCategoryDetail,clearCacheCategoryDetail} = require('../middleware/redis')

router
  .get("/" , categoryController.getAllCategory)
  .get("/search", categoryController.searchCategory)
  .get("/:id", categoryController.getDetailCategory)
  .post("/",upload.single('image_category'), categoryController.createCategory)
  .put("/:id",upload.single('image_category'), categoryController.updateCategory)
  .delete("/:id",categoryController.deleteCategory);

module.exports = router;
