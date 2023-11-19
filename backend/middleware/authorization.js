import JWT from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const isAuthorized = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    res.json({ message: "Not accessible to you" });
  }
  try {
    const user = JWT.verify(token, process.env.TOKEN_SECRET);
    req.user = user;
    if (user.role != "admin") {
      return res.status(400).json({ message: "User not authorized" });
    }
    next();
  } catch (error) {
    return res.status(400).json({ Autherror: error });
  }
};