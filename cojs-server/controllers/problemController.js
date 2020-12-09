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

// @desc delete a problem
// @route DELETE /api/v1/problems/:id
// @access private/admin
const deleteProblem = asyncHandler(async (req, res) => {
  const problem = await Problem.findOne({ id: parseInt(req.params.id) });
  if (problem) {
    await problem.remove();
    res.json({ message: "Problem Deleted!" });
  } else {
    res.status(404);
    throw new Error("Problem Not Found!");
  }
});

// @desc create a problem
// @route POST /api/v1/problems
// @access private/admin
// TODO: need to rewrite this function
const createProblem = asyncHandler(async (req, res) => {
  const { id, title, desc, difficulty } = req.body;
  const problemById = await Problem.findOne({ id: id });
  const problemByTitle = await Problem.findOne({ title: title });
  if (problemById) {
    throw Error("Problem id is taken");
  }
  if (problemByTitle) {
    throw Error("Problem title exists");
  }

  const problem = new Problem({
    id: id,
    title: title,
    desc: desc,
    difficulty: difficulty,
  });
  if (problem) {
    const createdProblem = await problem.save();
    res.status(201).json(createdProblem);
  } else {
    res.status(404);
    throw new Error("Cannot create problem this time ...");
  }
});

// @desc update a problem
// @route PUT /api/v1/problems
// @access private/admin
const updateProblem = asyncHandler(async (req, res) => {
  const { id, title, desc, difficulty } = req.body;

  const problem = await Problem.findOne({ id: parseInt(req.params.id) });
  if (problem) {
    problem.id = id;
    problem.title = title;
    problem.desc = desc;
    problem.difficulty = difficulty;

    const updatedProblem = await problem.save();
    res.status(201).json(problem);
  } else {
    res.status(404);
    throw new Error("Problem Not Found");
  }
});

export {
  getProblems,
  getProblemById,
  deleteProblem,
  createProblem,
  updateProblem,
};
