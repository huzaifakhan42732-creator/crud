import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: String,
    description: String,
    price: Number,
    stock: Number,
    image: String
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
