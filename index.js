import express from "express";
import cors from "cors";
import colors from "colors";
// import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import cookieParser from "cookie-parser";
import authRoute from "./routes/authRoutes.js";
import menuRoute from "./routes/menuRoute.js";

const app = express();
// dotenv.config();
connectDB();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// endpoints
app.use("/api/auth", authRoute);
app.use("/api/menu", menuRoute);

const port = 5000;

app.listen(port, () => {
  console.log(`App is running http://localhost:${port}`.cyan.underline);
});
