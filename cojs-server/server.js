const express = require("express");
const app = express();

const problems = require("./data/problems");

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

app.listen(5000, () => {
  "server is running on port 5000";
});
