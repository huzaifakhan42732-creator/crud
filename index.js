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

app.listen(5000, () => console.log("Server running"));
