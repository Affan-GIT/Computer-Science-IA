const mysql2 = require("mysql2");
require("dotenv").config();
const imageToUri = require("image-to-uri");
const path = require("path");

class Product {
  constructor() {
    this.productConnection = mysql2.createPool({
      host: "localhost",
      user: "root",
      password: "password",
      database: "ecommerce",
    });
  }

  async getCategories(res) {
    this.productConnection.query(
      "select CategoryName, CategoryImg from categories",
      (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(result);
        }
      }
    );
  }

  async getVariants(req, res) {
    this.productConnection.query(
      "select Variant from variants",
      (err, result) => {
        if (err) {
          throw err;
          res.status(500).send(err);
        } else {
          res.status(200).send(result);
        }
      }
    );
  }

  async getProducts(body, res) {
    this.productConnection.query(
      `select * from products where CategoryName = '${body.CategoryName}'`,
      (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.send(result);
        }
      }
    );
  }

  async getAllProducts(user, res) {
    this.productConnection.query(`select * from products`, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  }

  async searchProducts(query, res) {
    this.productConnection.query(
      `select * from categories where CategoryName= "${query}"`,
      (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          if (result.length !== 0) {
            res.send(result);
          } else {
            this.productConnection.query(
              `select * from products where ProductName = "${query}"`,
              (err, result) => {
                if (err) {
                  res.status(500).send(err);
                } else {
                  if (res.length !== 0) {
                    res.send(result);
                  } else {
                    this.getAllProducts();
                  }
                }
              }
            );
          }
        }
      }
    );
  }

  async getProduct(body, res) {
    this.productConnection.query(
      `select * from products where ProductName = '${body.ProductName}'`,
      (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.send(result);
        }
      }
    );
  }
  async addCategory(body, res) {
    this.productConnection.query(
      `select * from categories where CategoryName = "${body.CategoryName}"`,
      (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          if (result.length === 0) {
            this.productConnection.query(
              `insert into categories (CategoryName) values ("${body.CategoryName}")`,
              (err, result) => {
                if (err) {
                  res.status(500).send(err);
                } else {
                  res.send(result);
                }
              }
            );
          } else {
            res.status(200).send("Category Already Exists");
          }
        }
      }
    );
  }
  async addVariant(body, res) {
    this.productConnection.query(
      `select * from variants where variant = "${body.Variant}"`,
      (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          if (result.length === 0) {
            this.productConnection.query(
              `insert into variants (Variant) values ("${body.Variant}")`,
              (err, result) => {
                if (err) {
                  res.status(500).send(err);
                } else {
                  res.send(result);
                }
              }
            );
          } else {
            res.status(200).send("Variant Already Exists");
          }
        }
      }
    );
  }

  async removeCategory(body, res) {
    this.productConnection.query(
      `select * from categories where CategoryName = "${body.CategoryName}"`,
      (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          if (result.length !== 0) {
            this.productConnection.query(
              `delete from categories where CategoryName = "${body.CategoryName}"`,
              (err, result) => {
                if (err) {
                  res.status(500).send(err);
                } else {
                  res.send(result);
                }
              }
            );
          } else {
            res.status(200).send("Category doesnt exist");
          }
        }
      }
    );
  }
  async removeVariant(body, res) {
    this.productConnection.query(
      `select * from variants where Variant = "${body.Variant}"`,
      (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          if (result.length !== 0) {
            this.productConnection.query(
              `delete from variants where Variant = "${body.Variant}"`,
              (err, result) => {
                if (err) {
                  res.status(500).send(err);
                } else {
                  res.send(result);
                }
              }
            );
          } else {
            res.status(200).send("Variation doesnt exist");
          }
        }
      }
    );
  }

  async addProduct(body, res) {
    this.productConnection.query(
      `select * from products where ProductName = "${body.ProductName}"`,
      (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          if (result.length === 0) {
            this.productConnection.query(
              `select CategoryID from categories where CategoryName = "${body.CategoryName}"`,
              (err, result) => {
                if (err) {
                  res.status(500).send(err);
                } else {
                  this.productConnection.query(
                    `insert into products (ProductName, ProductPrice, ProductDescription, CategoryName, CategoryID, Variants) values ("${body.ProductName}", "${body.ProductPrice}","${body.ProductDescription}", "${body.CategoryName}", "${result[0].CategoryID}", "${body.Variants}")`,
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
            );
          } else {
            res.status(200).send("Variation Already Exists");
          }
        }
      }
    );
  }
  async removeProduct(body, res) {
    this.productConnection.query(
      `select * from products where ProductName = "${body.ProductName}"`,
      (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          if (result.length !== 0) {
            this.productConnection.query(
              `delete from products where ProductName = "${body.ProductName}"`,
              (err, result) => {
                if (err) {
                  res.status(500).send(err);
                } else {
                  res.send(result);
                }
              }
            );
          } else {
            res.status(200).send("Product doesnt exist");
          }
        }
      }
    );
  }
  async modifyProduct(body, res) {
    this.productConnection.query(
      `select * from products where ProductName = "${body.ProductName}"`,
      (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          if (result.length !== 0) {
            this.productConnection.query(
              `select CategoryID from categories where CategoryName = "${body.CategoryName}"`,
              (err, result) => {
                if (err) {
                  res.status(500).send(err);
                } else {
                  this.productConnection.query(
                    `update products set ProductName = "${body.ProductName}", ProductPrice = "${body.ProductPrice}", ProductDescription = "${body.ProductDescription}", CategoryName = "${body.CategoryName}", CategoryID = "${result[0].CategoryID}", Variants = "${body.Variants}" where ProductName = "${body.OriginalName}"`,
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
            );
          } else {
            res.status(200).send("Product doesnt exist");
          }
        }
      }
    );
  }
  async updateCategoryPic(req, res) {
    console.log(
      `update categories set CategoryImg = "${req.savedName}" where CategoryName = "${req.body.CategoryName}"`
    );
    this.productConnection.query(
      `update categories set CategoryImg = "${req.savedName}" where CategoryName = "${req.body.CategoryName}"`,
      (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send("success category");
        }
      }
    );
  }

  async updateProductPic(req, res) {
    this.productConnection.query(
      `update products set ProductImg = "${req.savedName}" where ProductName = "${req.body.ProductName}"`,
      (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send("success");
        }
      }
    );
  }
}

module.exports = Product;
