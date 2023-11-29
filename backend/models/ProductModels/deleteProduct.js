import pool from '../pool.js';

/**
 * Model for deleting a product
 * @param {string} product_id - The id of the product to be deleted
 */
export function deleteProduct (product_id) {
  const deleteProductQuery = 'DELETE FROM Products WHERE product_id = ?';
  return new Promise((resolve, reject) => {
    poolPromise.query(deleteProductQuery, [product_id], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

