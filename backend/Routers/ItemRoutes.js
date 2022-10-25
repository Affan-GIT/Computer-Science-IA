const express = require('express');
const { getCategories, getItems } = require('../Controllers/ItemController');
const itemRouter = express.Router();

itemRouter.route('/categories').get(getCategories);
itemRouter.route('/:CategoryName/items').get(getItems);

module.exports = itemRouter;
