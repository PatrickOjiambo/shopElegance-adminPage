import pool from "../pool.js";
// Check the category_id well. Could be a problem
// Provide a corresponding implementation of it elsewhere
const poolPromise = pool.promise();
/**
 *
 * @param {string} name - The product's name
 * @param {string} description - The product's description
 * @param {string} price - The product's price
 * @param {string} stock_quantity - The stock quantity of the product
 * @param {string} category_id - The category_id of the product
 * @param {string} image_url - The url of the product image
 */
export async function createProduct(
  name,
  description,
  price,
  stock_quantity,
  category_id,
  image_url
) {
  try {
    const createProductQuery =
      "INSERT INTO Products(name, description, price, stock_quantity, category_id) VALUES(?, ?, ?, ?, ?)";
    console.log("This ran yess!!!");
    const productQuery = await poolPromise.query(createProductQuery, [
      name,
      description,
      price,
      stock_quantity,
      category_id,
    ]);
    const product_id = productQuery[0].insertId;
    const insertImageQuery = "INSERT INTO Images(product_id, url) VALUES(?, ?)";
    const imageQuery = await poolPromise.query(insertImageQuery, [
      product_id,
      image_url,
    ]);
    console.log(imageQuery);
  } catch (error) {
    console.log(error);
  }
}
