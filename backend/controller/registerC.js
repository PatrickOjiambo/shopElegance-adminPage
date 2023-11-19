import { pool } from "../models/pool.js";
import { createAdmin } from "../models/admin.js";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

const poolPromise = pool.promise();

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the email is already in the database.
    const [emailQueryResult] = await poolPromise.query(
      "SELECT email FROM Admins WHERE email = ?",
      [email]
    );

    if (emailQueryResult.length > 0) {
      return res.status(404).json({ error: "Email already exists" });
    }

    // Hash the password
    const passwordHash = await bcrypt.hash(password, 10);

    // Store the user
    const [userCreationResult] = await createAdmin(
      name,
      email.toLowerCase(),
      passwordHash
    );

    if (userCreationResult.affectedRows === 0) {
      return res.status(500).json({ error: "Unable to create admin" });
    }

    // Send JWT Token
    const token = JWT.sign(
      { email: email.toLowerCase() },
      process.env.TOKEN_SECRET,
      {
        expiresIn: 3600,
      }
    );

    res.cookie("token", token, {
      httpOnly: true,
    });

    // Send a success response with token and email
    return res.status(200).json({ message: "Admin registration successful" });
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
