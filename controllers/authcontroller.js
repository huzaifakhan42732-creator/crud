import User from "../models/usermodel.js";
import bcrypt from "bcryptjs";
import asyncHandler from "../middleware/asynchandlermiddleware.js";
import generateToken from "../utils/generateToken.js";

export const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashed,
  });

  res.json({
    token: generateToken(user._id),
  });
});

export const login = asyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) throw new Error("User not found");

  const match = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!match) throw new Error("Invalid password");

  res.json({
    token: generateToken(user._id),
    isAdmin: user.isAdmin,
  });
});
