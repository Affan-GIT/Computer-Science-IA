const Product = require("../Database/ProductDatabase");
const PorductDatabase = new Product();

const getCategories = async (req, res) => {
  PorductDatabase.getCategories(res);
};
const getProducts = async (req, res) => {
  PorductDatabase.getProducts(req.params, res);
};

const getAllProducts = async (req, res) => {
  if (req.query.query === "" || req.query.query === undefined) {
    PorductDatabase.getAllProducts(req.params, res);
  } else {
    PorductDatabase.searchProducts(req.query.query, res);
  }
};

const getProduct = async (req, res) => {
  PorductDatabase.getProduct(req.params, res);
};

const addCategory = async (req, res) => {
  PorductDatabase.addCategory(req.body, res);
};
const removeCategory = async (req, res) => {
  PorductDatabase.removeCategory(req.body, res);
};

const getVariants = async (req, res) => {
  PorductDatabase.getVariants(req.body, res);
};

const addVariant = async (req, res) => {
  PorductDatabase.addVariant(req.body, res);
};
const removeVariant = async (req, res) => {
  PorductDatabase.removeVariant(req.body, res);
};

const addProduct = async (req, res) => {
  PorductDatabase.addProduct(req.body, res);
};

const removeProduct = async (req, res) => {
  PorductDatabase.removeProduct(req.body, res);
};

const modifyProduct = async (req, res) => {
  PorductDatabase.modifyProduct(req.body, res);
};

const updateCategoryPic = async (req, res) => {
  delete req.body.token;
  PorductDatabase.updateCategoryPic(req, res);
};

const updateProductPic = async (req, res) => {
  PorductDatabase.updateProductPic(req, res);
};

module.exports = {
  getCategories,
  getAllProducts,
  getProducts,
  getProduct,
  addCategory,
  removeCategory,
  getVariants,
  addVariant,
  removeVariant,
  addProduct,
  removeProduct,
  modifyProduct,
  updateCategoryPic,
  updateProductPic,
};
