// const products = [];
// const fs = require("fs");
// const path = require("path");

// const p = path.join(
//   path.dirname(process.mainModule.filename),
//   "data",
//   "products.json"
// );

// const getProductsFromFile = (cb) => {
//   fs.readFile(p, (err, fileContent) => {
//     if (err) {
//       cb([]);
//     }
//     cb(JSON.parse(fileContent));
//   });
// };

const db = require("../util/database");

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.title = title;
    this.id = id;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }

  save() {
    // getProductsFromFile((products) => {
    //   products.push(this);
    //   fs.writeFile(p, JSON.stringify(products), (err) => {
    //     console.log(err);
    //   });
    // });
    // fs.readFile(p, (err, fileContent) => {
    //   let products = [];
    //   if (!err) {
    //     products = JSON.parse(fileContent);
    //   }
    // });
    return db.execute(
      "INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)",
      [this.title, this.price, this.imageUrl, this.description]
    );
  }

  static deleteById(id) {}

  static fetchAll() {
    // getProductsFromFile(cb);
    return db.execute("SELECT * FROM products");
  }
  static fidnById(id) {
    return db.execute("SELECT * FROM products WHERE products.id = ?", [id]);
  }
};
