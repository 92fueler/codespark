import asyncHandler from "express-async-handler";
import Problem from "../models/problemModel.js";

// @desc fetch all problems
// @route GET /api/v1/problems
// @access public
const getProblems = asyncHandler(async (req, res) => {
  const problems = await Problem.find({});
  res.json(problems);
});

// @desc fetch single problem
// @route GET /api/v1/problems/:id
// @access public
const getProblemById = asyncHandler(async (req, res) => {
  const problem = await Problem.findOne({ id: parseInt(req.params.id) });
  if (problem) {
    res.json(problem);
  } else {
    res.status(404);
    throw new Error("problem not found");
  }
});

export { getProblems, getProblemById };
