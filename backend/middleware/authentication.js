import JWT from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export default function isAuthenticated(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.redirect("/");
  }
  try {
    const user = JWT.verify(token, process.env.TOKEN_SECRET);
    req.user = user;
    next();
  } catch (error) {
    res.clearcookie("token");
    return res.redirect("/");
  }
}