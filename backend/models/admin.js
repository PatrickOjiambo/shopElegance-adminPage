import pool from './pool.js';

const promiseConnection = pool.promise();
/**
 * Create a new admin in the database.
 *
 
 * @param {string} name - The admin's name.
 * @param {string} email - The admin's email address.
 * @param {string} password_hash - The hashed password of the admin.
 * @returns {Promise} A Promise that resolves if the admin is created successfully or rejects with an error.
 */
export function createAdmin (
  
  name,
  email,
  password_hash
) {
  const createAdminQuery =
    'INSERT INTO Users(name, email, password_hash) VALUES(?, ?, ?)';
  return new Promise((resolve, reject) => {
    promiseConnection.query(
      createAdminQuery,
      [name, email, password_hash],
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