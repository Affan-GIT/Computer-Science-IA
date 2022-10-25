const mysql = require('mysql');
require('dotenv').config();

class Item {
  constructor() {
    this.itemConnection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'ecommerce',
    });
  }

  async getCategories(res) {
    this.itemConnection.query(
      'select CategoryName from categories',
      (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(result);
        }
      }
    );
  }

  async getItems(body, res) {
    this.itemConnection.query(
      `select * from items where CategoryName = '${body.CategoryName}'`,
      (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.send(result);
        }
      }
    );
  }
}

module.exports = Item;
