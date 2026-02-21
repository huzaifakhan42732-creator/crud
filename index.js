import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authroutes.js";
import productRoutes from "./routes/productroutes.js";
import { errorHandler } from "./middleware/errormiddleware.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000; // Use PORT from .env or default to 5000

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${server.address().port}`);
});