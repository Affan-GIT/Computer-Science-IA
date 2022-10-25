const Item = require('../Database/ItemDatabase');
const ItemDatabase = new Item();

const getCategories = async (req, res) => {
  ItemDatabase.getCategories(res);
};
const getItems = async (req, res) => {
  ItemDatabase.getItems(req.params, res);
};

module.exports = { getCategories, getItems };
