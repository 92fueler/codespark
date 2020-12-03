import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { notFoundHandler, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import problemRoutes from "./routes/problemRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("api is running");
});

app.use("/api/v1/problems", problemRoutes);

app.use(notFoundHandler);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  );
});
