import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDb from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import cors from "cors";
import categoryRoute from "./routes/categoryRoute.js";
import productRoute from "./routes/productRoute.js";
import path from "path";
import { fileURLToPath } from "url";

// config dotenv
dotenv.config();
// database config
connectDb();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
// middleware
app.use(express.json({ limit: "500mb" }));
app.use(morgan("dev"));
// Serve static files from the client build directory
app.use(express.static(path.join(__dirname, " ./client/public")));
app.use(cors());

// route
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoute);
// rest api


// Fallback for all other requests to serve the index.html
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});
// port
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`.bgCyan.yellow);
});
