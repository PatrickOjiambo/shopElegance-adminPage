import pool from '../pool.js';
const poolPromise = pool.promise();
// Check the product id. Make sure the corresponding implementation elsewhere is okay.
/**
 *
 * @param {string} name - The product's name
 * @param {string} description - The product's description
 * @param {string} price - The product's price
 * @param {string} stock_quantity - The stock quantity of the product
 * @param {string} category_id - The category_id of the product
 * @param {string} product_id - The product id of the product to be updated.
 */
export function updateProduct (
  name,
  description,
  price,
  stock_quantity,
  category_id,
  product_id
) {
  const updateProductQuery =
    'UPDATE Products SET name = ?, \
  description = ?,\
   price = ?, \
   stock_quantity = ?, \
   category_id = ? \
   WHERE product_id = ?';
  return new Promise((resolve, reject) => {
    poolPromise.query(
      updateProductQuery,
      [name, description, price, stock_quantity, category_id, product_id],
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
}
module.exports = { updateProduct };
