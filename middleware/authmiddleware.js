import jwt from "jsonwebtoken";
import User from "../models/usermodel.js";

export const protect = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json("Not authorized");

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decoded.id);

  next();
};

export const adminOnly = (req, res, next) => {
  if (!req.user.isAdmin)
    return res.status(403).json("Admin only");

  next();
};
