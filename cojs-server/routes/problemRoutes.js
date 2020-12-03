import express from "express";
import asyncHandler from "express-async-handler";
import Problem from "../models/problemModel.js";

const router = express.Router();

// @desc fetch all problems
// @route GET /api/v1/problems
// @access public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const problems = await Problem.find({});
    res.json(problems);
  })
);

// @desc fetch single problem
// @route GET /api/v1/problems/:id
// @access public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const problem = await Problem.findOne({ id: parseInt(req.params.id) });
    if (problem) {
      res.json(problem);
    } else {
      res.status(404).json({ message: "problem not found" });
    }
  })
);

export default router;
