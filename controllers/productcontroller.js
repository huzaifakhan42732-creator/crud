import Product from "../models/productmodel.js";
import asyncHandler from "../middleware/asynchandlermiddleware.js";

export const getProducts = asyncHandler(async (req, res) => {
  res.json(await Product.find());
});

export const createProduct = asyncHandler(async (req, res) => {
  res.json(await Product.create(req.body));
});

export const updateProduct = asyncHandler(async (req, res) => {
  res.json(
    await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
  );
});

export const deleteProduct = asyncHandler(async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});
