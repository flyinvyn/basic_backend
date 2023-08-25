const express = require("express");
const router = express.Router();
const transactionController = require("../controller/Transactionn");
// const {protect, roleAdmin} = require("../middleware/auth")
// const {hitCacheProductDetail,clearCacheProductDetail} = require('../middleware/redis')

router
  .get("/", transactionController.getAllTransaction)
  .get("/search", transactionController.searchTransaction)
  .get("/:id",transactionController.getDetailTransaction)
  .post("/",transactionController.createTransaction)
  .put("/:id",transactionController.updateTransaction)
  .delete("/:id",transactionController.deleteTransaction);

module.exports = router;
