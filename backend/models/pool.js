import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();
export const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.DBUSER, 
  password: process.env.PASSWORD,
  database: process.env.DBNAME
});

const createAdmin = [
  `CREATE TABLE IF NOT EXISTS Admins (
    admin_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );`,
  
];
Promise.all(createAdmin.map((query) => pool.promise().query(query)))
  .then((result) => console.log("Admin table created"))
  .catch((err) => console.log(err));

export default pool;
