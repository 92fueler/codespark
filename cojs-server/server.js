import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import problems from "./data/problems.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("api is running");
});

app.get("/api/v1/problems", (req, res) => {
  res.json(problems);
});

app.get("/api/v1/problems/:id", (req, res) => {
  const problem = problems.find(
    (problem) => problem.id === parseInt(req.params.id)
  );
  res.json(problem);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  );
});
