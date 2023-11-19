import { pool } from "../models/pool.js";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

const poolPromise = pool.promise();
export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if the user exists with the provided email or phone_number
      const emailQuery = await poolPromise.query(
        "SELECT email, password_hash FROM Admins WHERE email = ?",
        [email.toLowerCase()]
      );
  
      if (emailQuery[0].length === 0) {
        return res.status(404).json({ error: "Admin not found" });
      }
  
      const admin = emailQuery[0]; // Assuming the first result is the user
      // Compare the hashed password
      const passwordMatch = await bcrypt.compare(password, admin[0].password_hash);
      if (passwordMatch) {
        // Generate and send a JWT token upon successful login
        const token = JWT.sign(
          { email: user[0].email},
          process.env.TOKEN_SECRET,
          {
            expiresIn: 3600, // You can adjust the expiration time as needed
          }
        );
        res.cookie("token", token, {
          httpOnly: true,
        });
        return res.status(200).json({ message: "Successful login" });
       
      } else {
        return res.status(400).json({ message: "Incorrect password" });
      }
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };