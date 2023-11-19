import { pool } from "../models/pool.js";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

const poolPromise = pool.promise();
export const login = async (req, res) => {
    try {
      const { log_details, password } = req.body;
  
      // Check if the user exists with the provided email or phone_number
      const emailQuery = await poolPromise.query(
        "SELECT email, password_hash FROM Users WHERE email = ? OR phone_number = ?",
        [log_details.toLowerCase(), log_details.toLowerCase()]
      );
  
      if (emailQuery[0].length === 0) {
        return res.status(404).json({ error: "User not found" });
      }
  
      const user = emailQuery[0]; // Assuming the first result is the user
      // Compare the hashed password
      const userRole = "user";
      const passwordMatch = await bcrypt.compare(password, user[0].password_hash);
      if (passwordMatch) {
        // Generate and send a JWT token upon successful login
        const token = JWT.sign(
          { email: user[0].email, role: userRole },
          process.env.TOKEN_SECRET,
          {
            expiresIn: 3600, // You can adjust the expiration time as needed
          }
        );
        res.cookie("token", token, {
          httpOnly: true,
        });
        console.log("Successful login")
        return res.status(200).json({ message: "Successfull login" });
       
      } else {
        return res.status(400).json({ message: "Incorrect password" });
      }
    } catch (error) {
      console.error("Error during login:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };