const express = require("express");
const {
  getCategories,
  getProducts,
  getProduct,
  getAllProducts,
  addCategory,
  removeCategory,
  getVariants,
  addVariant,
  removeVariant,
  addProduct,
  removeProduct,
  modifyProduct,
  updateCategoryPic,
  getCategoryPic,
  updateProductPic,
  getProductPic,
} = require("../Controllers/ProductController");
const auth = require("../Middleware/auth");
const productRouter = express.Router();

const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "publicImages/");
  },
  filename: function (req, file, cb) {
    req.savedName = `item-${Date.now()}`;
    cb(null, req.savedName + ".webp"); //Appending .jpg
  },
});

var upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    // Set the filetypes, it is optional
    var filetypes = /jpeg|jpg|png|webp/;
    var mimetype = filetypes.test(file.mimetype);

    var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    }

    cb(
      "Error: File upload only supports the " +
        "following filetypes - " +
        filetypes
    );
  },

  // mypic is the name of file attribute
}).single("profilePic");

productRouter.route("/categories").get(getCategories);
productRouter.route("/variants").get(auth, getVariants);
productRouter.route("/allProducts").get(getAllProducts);
productRouter.route("/addCategory").post(auth, addCategory);
productRouter.route("/removeCategory").post(auth, removeCategory);
productRouter.route("/addVariant").post(auth, addVariant);
productRouter.route("/removeVariant").post(auth, removeVariant);
productRouter.route("/addProduct").post(auth, addProduct);
productRouter.route("/removeProduct").post(auth, removeProduct);
productRouter.route("/modifyProduct").post(auth, modifyProduct);
productRouter.route("/updateCategoryPic").post(auth, upload, updateCategoryPic);
productRouter.route("/updateProductPic").post(auth, upload, updateProductPic);
productRouter.route("/Category/:CategoryName/products").get(getProducts);
productRouter.route("/Product/:ProductName").get(getProduct);

module.exports = productRouter;
